import { createPortal } from "react-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronDown, Search, Check } from "lucide-react";

/** Industry sector options for the assessment modal's searchable dropdown. */
export const SECTORS = [
  "Technology / SaaS",
  "Artificial Intelligence / ML",
  "Fintech / Payments",
  "Edtech",
  "Healthtech / Medtech",
  "Agritech",
  "Cleantech / Green Energy",
  "E-commerce / D2C",
  "Logistics & Supply Chain",
  "Manufacturing",
  "Food Processing",
  "Textile & Apparel",
  "Pharmaceuticals & Chemicals",
  "Auto & EV Components",
  "Agriculture & Farming",
  "Dairy & Animal Husbandry",
  "Fisheries",
  "Food & Beverage",
  "Healthcare & Wellness",
  "Hospital & Clinic",
  "Pharmacy & Medical Devices",
  "Retail & Consumer",
  "Fashion & Lifestyle",
  "Beauty & Personal Care",
  "Services & Consulting",
  "Legal Services",
  "Accounting & Finance",
  "Marketing & Advertising",
  "Training & Skill Development",
  "Media & Entertainment",
  "Film & Content Creation",
  "Animation & VFX",
  "Education",
  "School / College",
  "Coaching & Tutoring",
  "Vocational Training",
  "Tourism & Hospitality",
  "Hotel & Restaurant",
  "Travel & Tour Operations",
  "Energy & Environment",
  "Solar / Wind Energy",
  "Waste Management",
  "Electric Vehicles",
  "Infrastructure & Real Estate",
  "Construction",
  "Interior Design",
  "Social Enterprise / NGO",
  "Financial Services",
  "Insurance & NBFC",
  "Defence & Aerospace",
  "Other — Please Specify",
];

/**
 * Searchable single-select dropdown for industry sectors. Owns its open/search
 * state; the selected value is controlled by the parent.
 */
export function SectorDropdown({
  value,
  error,
  onChange,
}: {
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0, width: 0 });

  const updateMenuPosition = () => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + 6,
      left: rect.left,
      width: rect.width,
    });
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useLayoutEffect(() => {
    if (!isDropdownOpen) return;
    updateMenuPosition();
    const reposition = () => updateMenuPosition();
    window.addEventListener("resize", reposition);
    window.addEventListener("scroll", reposition, true);
    return () => {
      window.removeEventListener("resize", reposition);
      window.removeEventListener("scroll", reposition, true);
    };
  }, [isDropdownOpen]);

  const select = (sector: string) => {
    onChange(sector);
    setIsDropdownOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="relative space-y-1.5">
      <button
        ref={triggerRef}
        id="businessType"
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-black shadow-xs outline-none focus:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 h-10 cursor-pointer flex items-center justify-between ${error ? "border-red-500" : ""}`}
      >
        <span className={value ? "text-black" : "text-zinc-400"}>
          {value || "Select business sector"}
        </span>
        <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
      </button>

      {isDropdownOpen && createPortal(
        <div
          ref={menuRef}
          className="fixed bg-white border border-zinc-250 rounded-xl shadow-xl z-[1000] text-black overflow-hidden flex flex-col"
          style={{ top: menuPosition.top, left: menuPosition.left, width: menuPosition.width }}
        >
          {/* Search Bar - Fixed at the top */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-zinc-150 bg-zinc-50/50">
            <Search className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <input
              type="text"
              placeholder="Search business sector..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs text-black border-none outline-none placeholder-zinc-400 h-6"
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-zinc-400 hover:text-zinc-600 text-[10px] font-bold cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Options List - Internally scrolls, max 5 rows window */}
          <div className="overflow-y-auto max-h-[180px] divide-y divide-zinc-50">
            {(() => {
              const filtered = SECTORS.filter((sector) =>
                sector.toLowerCase().includes(searchQuery.toLowerCase())
              );
              if (filtered.length > 0) {
                return filtered.map((sector) => {
                  const isSelected = value === sector;
                  return (
                    <button
                      key={sector}
                      type="button"
                      onClick={() => select(sector)}
                      className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors flex items-center justify-between h-9 cursor-pointer ${isSelected
                          ? "bg-primary/5 text-primary font-bold"
                          : "hover:bg-zinc-50 text-zinc-700 hover:text-black"
                        }`}
                    >
                      <span>{sector}</span>
                      {isSelected && <Check className="w-3 h-3 text-primary shrink-0" />}
                    </button>
                  );
                });
              }
              return (
                <div className="px-3 py-4 text-xs text-zinc-400 text-center select-none">
                  No sectors found
                </div>
              );
            })()}
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
