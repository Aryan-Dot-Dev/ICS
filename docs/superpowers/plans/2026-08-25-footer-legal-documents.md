# Footer Legal Documents Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the supplied Privacy Policy and Terms & Conditions PDFs available from the footer in new browser tabs.

**Architecture:** Copy the source PDFs into `src/assets/legal`, which the existing Bun build copies into the production output. Import those assets in `Footer.tsx` and use their generated URLs in ordinary external-document anchors, preserving the current footer layout and styling.

**Tech Stack:** React 19, TypeScript, Bun, Bun build script, Tailwind utility classes.

---

### Task 1: Add the supplied legal documents as static assets

**Files:**
- Create: `src/assets/legal/Infou_ICS_Privacy_Policy.pdf`
- Create: `src/assets/legal/Infou_ICS_Terms_and_Conditions.pdf`

- [ ] **Step 1: Copy each user-supplied PDF into the legal asset directory**

Run from `D:\ics\ICS`:

```powershell
New-Item -ItemType Directory -Force src\assets\legal
Copy-Item 'C:\Users\suspi\Downloads\Infou_ICS_Privacy_Policy.pdf' src\assets\legal\Infou_ICS_Privacy_Policy.pdf
Copy-Item 'C:\Users\suspi\Downloads\Infou_ICS_Terms_and_Conditions.pdf' src\assets\legal\Infou_ICS_Terms_and_Conditions.pdf
```

Expected: both files exist under `src/assets/legal` and retain their original contents.

- [ ] **Step 2: Verify the copied PDFs are byte-for-byte identical to the supplied sources**

```powershell
if ((Get-FileHash 'C:\Users\suspi\Downloads\Infou_ICS_Privacy_Policy.pdf').Hash -ne (Get-FileHash 'src\assets\legal\Infou_ICS_Privacy_Policy.pdf').Hash) { throw 'Privacy PDF changed during copy' }
if ((Get-FileHash 'C:\Users\suspi\Downloads\Infou_ICS_Terms_and_Conditions.pdf').Hash -ne (Get-FileHash 'src\assets\legal\Infou_ICS_Terms_and_Conditions.pdf').Hash) { throw 'Terms PDF changed during copy' }
```

Expected: no output and exit code 0.

### Task 2: Wire the footer labels to the PDFs

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Add imports for the two legal asset URLs**

Add these imports with the existing asset imports:

```tsx
import privacyPolicyPdf from "../assets/legal/Infou_ICS_Privacy_Policy.pdf";
import termsAndConditionsPdf from "../assets/legal/Infou_ICS_Terms_and_Conditions.pdf";
```

- [ ] **Step 2: Update the two legal anchors**

Replace the existing `/privacy` and `/terms` anchors with:

```tsx
<a
  href={privacyPolicyPdf}
  target="_blank"
  rel="noopener noreferrer"
  className="text-zinc-500 hover:text-black transition-colors hover:underline underline-offset-4 decoration-1"
>
  Privacy Policy
</a>
```

and:

```tsx
<a
  href={termsAndConditionsPdf}
  target="_blank"
  rel="noopener noreferrer"
  className="text-zinc-500 hover:text-black transition-colors hover:underline underline-offset-4 decoration-1"
>
  Terms & Conditions
</a>
```

- [ ] **Step 3: Run a focused source assertion before the build**

```powershell
$footer = Get-Content src\components\Footer.tsx -Raw
if ($footer -notmatch 'privacyPolicyPdf' -or $footer -notmatch 'termsAndConditionsPdf') { throw 'Legal PDF imports are missing' }
if (([regex]::Matches($footer, 'target="_blank"')).Count -lt 2) { throw 'Both legal links must open in new tabs' }
if (([regex]::Matches($footer, 'rel="noopener noreferrer"')).Count -lt 2) { throw 'Both legal links need safe opener handling' }
```

Expected: no output and exit code 0.

### Task 3: Verify the production output

**Files:**
- Verify: `dist/assets/Infou_ICS_Privacy_Policy.pdf`
- Verify: `dist/assets/Infou_ICS_Terms_and_Conditions.pdf`

- [ ] **Step 1: Build the production site**

```powershell
bun run build
```

Expected: exit code 0 with the existing build completing successfully.

- [ ] **Step 2: Confirm both PDFs were emitted into the build output**

```powershell
if (-not (Test-Path dist\assets\Infou_ICS_Privacy_Policy.pdf)) { throw 'Privacy PDF missing from dist' }
if (-not (Test-Path dist\assets\Infou_ICS_Terms_and_Conditions.pdf)) { throw 'Terms PDF missing from dist' }
```

Expected: no output and exit code 0.

- [ ] **Step 3: Confirm the final diff is limited to the requested change**

```powershell
git status --short
git diff -- src/components/Footer.tsx
```

Expected: the footer source and two legal PDFs are the only task changes; pre-existing `debug.log` remains untouched.

- [ ] **Step 4: Commit the implementation**

```powershell
git add src/components/Footer.tsx src/assets/legal/Infou_ICS_Privacy_Policy.pdf src/assets/legal/Infou_ICS_Terms_and_Conditions.pdf
git commit -m "feat: link footer legal documents"
```
