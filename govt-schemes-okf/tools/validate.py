#!/usr/bin/env python3
"""Validation pass for the govt-schemes-okf OKF v0.2 bundle.

Convention: objects under schemes/ are FACT objects and must carry full
provenance (sources, verified, stale_after). Objects in concepts/, rules/,
taxonomy/ plus index.md and README.md are STRUCTURAL objects (controlled
vocabularies and definitions whose source is this bundle itself) — they
require only base frontmatter.
"""
import os, re, sys, glob, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
md_files = [p for p in glob.glob(os.path.join(ROOT, "**", "*.md"), recursive=True)]

link_re = re.compile(r"\[[^\]]*\]\(([^)#\s]+)(?:#[^)]*)?\)")
base_required = ["type", "title", "description"]

results = {
    "files": len(md_files),
    "scheme_objects": 0,
    "structural_object_count": 0,
    "broken_links": [],
    "missing_frontmatter": [],
    "scheme_objects_missing_provenance": [],
    "structural_objects": [],
    "scheme_dirs": sorted(os.listdir(os.path.join(ROOT, "schemes"))),
}

for path in md_files:
    rel = os.path.relpath(path, ROOT).replace("\\", "/")
    is_scheme = rel.startswith("schemes/")
    results["scheme_objects" if is_scheme else "structural_object_count"] += 1
    with open(path, encoding="utf-8", errors="replace") as f:
        text = f.read()
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if not m:
        results["missing_frontmatter"].append(rel)
        continue
    fm = m.group(1)
    for field in base_required:
        if not re.search(rf"^{field}:", fm, re.M):
            results["missing_frontmatter"].append(f"{rel}:{field}")
    if is_scheme:
        missing = [k for k in ["status:", "verified:", "generated:", "stale_after", "sources:"] if k not in fm]
        if missing:
            results["scheme_objects_missing_provenance"].append(f"{rel}: {','.join(missing)}")
    else:
        results["structural_objects"].append(rel)
    for link in link_re.findall(text):
        if link.startswith(("http://", "https://", "mailto:")):
            continue
        target = os.path.normpath(os.path.join(os.path.dirname(path), link))
        if not os.path.exists(target):
            results["broken_links"].append(f"{rel} -> {link}")

print(json.dumps(results, indent=2))
