import React, { useState, useEffect, useMemo, useCallback } from "react";
import { ClickSpark } from "./ui/ClickSpark";

// ─── Module-Level Static Data (allocated once, never re-created) ────────────

interface StateMetrics {
  startupFund: string;
  incubators: string;
  dpiitStartups: string;
  strongSector: string;
}

const STATE_DATA: Record<string, StateMetrics> = {
  "Andhra Pradesh": { startupFund: "₹200 Cr", incubators: "30+", dpiitStartups: "4500+", strongSector: "Agritech & Electronics" },
  "Arunachal Pradesh": { startupFund: "₹10 Cr", incubators: "3+", dpiitStartups: "55+", strongSector: "Tourism" },
  "Assam": { startupFund: "₹200 Cr", incubators: "15+", dpiitStartups: "1500+", strongSector: "Tea & Agritech" },
  "Bihar": { startupFund: "₹500 Cr", incubators: "20+", dpiitStartups: "3000+", strongSector: "EdTech & Agriculture" },
  "Chhattisgarh": { startupFund: "₹100 Cr", incubators: "8+", dpiitStartups: "1200+", strongSector: "Mining & Rural Tech" },
  "Goa": { startupFund: "₹50 Cr", incubators: "7+", dpiitStartups: "700+", strongSector: "Tourism & SaaS" },
  "Gujarat": { startupFund: "₹300 Cr", incubators: "200+", dpiitStartups: "16700+", strongSector: "Manufacturing & EV" },
  "Haryana": { startupFund: "₹200 Cr", incubators: "35+", dpiitStartups: "8000+", strongSector: "AutoTech & Logistics" },
  "Himachal Pradesh": { startupFund: "₹50 Cr", incubators: "10+", dpiitStartups: "500+", strongSector: "Tourism & Food Processing" },
  "Jharkhand": { startupFund: "₹50 Cr", incubators: "7+", dpiitStartups: "1000+", strongSector: "Mining & Tribal Innovation" },
  "Karnataka": { startupFund: "₹518 Cr", incubators: "210+", dpiitStartups: "16954+", strongSector: "AI & SaaS" },
  "Kerala": { startupFund: "₹100 Cr", incubators: "55+", dpiitStartups: "6000+", strongSector: "DeepTech & HealthTech" },
  "Madhya Pradesh": { startupFund: "₹200 Cr", incubators: "40+", dpiitStartups: "4000+", strongSector: "Agritech & Manufacturing" },
  "Maharashtra": { startupFund: "₹500 Cr", incubators: "220+", dpiitStartups: "28511+", strongSector: "FinTech & SaaS" },
  "Manipur": { startupFund: "₹10 Cr", incubators: "4+", dpiitStartups: "185+", strongSector: "Handicraft & Sports" },
  "Meghalaya": { startupFund: "₹10 Cr", incubators: "4+", dpiitStartups: "63+", strongSector: "Tourism" },
  "Mizoram": { startupFund: "₹10 Cr", incubators: "4+", dpiitStartups: "44+", strongSector: "Bamboo & Handicraft" },
  "Nagaland": { startupFund: "₹10 Cr", incubators: "4+", dpiitStartups: "88+", strongSector: "Agriculture" },
  "Odisha": { startupFund: "₹100 Cr", incubators: "45+", dpiitStartups: "3500+", strongSector: "DeepTech & Manufacturing" },
  "Punjab": { startupFund: "₹150 Cr", incubators: "35+", dpiitStartups: "3000+", strongSector: "Agritech & Logistics" },
  "Rajasthan": { startupFund: "₹500 Cr", incubators: "60+", dpiitStartups: "6500+", strongSector: "EV & Tourism" },
  "Sikkim": { startupFund: "₹5 Cr", incubators: "3+", dpiitStartups: "13+", strongSector: "Organic Farming" },
  "Tamil Nadu": { startupFund: "₹100 Cr", incubators: "228+", dpiitStartups: "11900+", strongSector: "Automobile & EV" },
  "Telangana": { startupFund: "₹100 Cr", incubators: "140+", dpiitStartups: "8000+", strongSector: "AI & Pharma" },
  "Tripura": { startupFund: "₹10 Cr", incubators: "8+", dpiitStartups: "147+", strongSector: "Bamboo & Rural Innovation" },
  "Uttar Pradesh": { startupFund: "₹1000 Cr", incubators: "70+", dpiitStartups: "14000+", strongSector: "Agritech & Electronics" },
  "Uttarakhand": { startupFund: "₹200 Cr", incubators: "12+", dpiitStartups: "1200+", strongSector: "Tourism & Sustainability" },
  "West Bengal": { startupFund: "₹100 Cr", incubators: "50+", dpiitStartups: "5500+", strongSector: "DeepTech & FinTech" },
  "NCT of Delhi": { startupFund: "₹200 Cr", incubators: "130+", dpiitStartups: "15000+", strongSector: "AI & FinTech" },
  "Jammu & Kashmir": { startupFund: "₹50 Cr", incubators: "8+", dpiitStartups: "900+", strongSector: "Tourism & Handicraft" },
  "Chandigarh": { startupFund: "₹25 Cr", incubators: "3+", dpiitStartups: "600+", strongSector: "IT Services" },
  "Puducherry": { startupFund: "₹20 Cr", incubators: "5+", dpiitStartups: "250+", strongSector: "Tourism & MSME" },
  "Andaman and Nicobar Islands": { startupFund: "N/A", incubators: "N/A", dpiitStartups: "N/A", strongSector: "N/A" },
  "Dadra and Nagar Haveli and Daman and Diu": { startupFund: "N/A", incubators: "N/A", dpiitStartups: "N/A", strongSector: "N/A" },
  "Lakshadweep": { startupFund: "N/A", incubators: "N/A", dpiitStartups: "N/A", strongSector: "N/A" },
  "Ladakh": { startupFund: "N/A", incubators: "N/A", dpiitStartups: "N/A", strongSector: "N/A" },
};

const FALLBACK_STATE_DATA: StateMetrics = {
  startupFund: "N/A",
  incubators: "N/A",
  dpiitStartups: "N/A",
  strongSector: "—",
};

// Optimized Unsplash URLs: w=600, q=50, WebP format — 50-70% smaller than originals
// These are background images behind a 55% black overlay, so lower quality is invisible
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=50&fm=webp";

const STATE_IMAGES: Record<string, string> = {
  "Jammu & Kashmir": "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Gujarat": "https://images.unsplash.com/photo-1620103143245-9efb3e4a7553?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Tamil Nadu": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Andaman & Nicobar Island": "https://images.unsplash.com/photo-1617653202545-931490e8d7e7?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Andhra Pradesh": "https://plus.unsplash.com/premium_photo-1661904165347-369200d4bf72?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Daman & Diu": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Bihar": "https://images.unsplash.com/photo-1631984876480-f821262c2609?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Lakshadweep": "https://images.unsplash.com/photo-1572431447238-425af66a273b?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Madhya Pradesh": "https://images.unsplash.com/photo-1638814175187-b7fbc1a1e46e?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Karnataka": "https://images.unsplash.com/photo-1600112356915-089abb8fc71a?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Puducherry": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Uttar Pradesh": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=50&fm=webp",
  "West Bengal": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Odisha": "https://images.unsplash.com/photo-1639980290886-6bdd61c7582b?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Chandigarh": "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Haryana": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Himachal Pradesh": "https://images.unsplash.com/photo-1628699543232-dc241b48a4b3?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Arunachal Pradesh": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Nagaland": "https://plus.unsplash.com/premium_photo-1661957883806-4f6d9ffff913?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Kerala": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Punjab": "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Assam": "https://images.unsplash.com/photo-1602020277972-fd160de66021?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Tripura": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Dadara & Nagar Havelli": "https://images.unsplash.com/photo-1567097592889-d5dc1590cd5c?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Goa": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Ladakh": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Chhattisgarh": "https://plus.unsplash.com/premium_photo-1697729677108-a6273adeab39?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Maharashtra": "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Manipur": "https://plus.unsplash.com/premium_photo-1666865792731-0a2656f2b12c?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Meghalaya": "https://images.unsplash.com/photo-1593813738953-fb3c93e0769d?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Mizoram": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Rajasthan": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Sikkim": "https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Uttarakhand": "https://images.unsplash.com/photo-1608942025318-1191eeade556?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Jharkhand": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=50&fm=webp",
  "NCT of Delhi": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=50&fm=webp",
  "Telangana": "https://images.unsplash.com/photo-1621909321963-2276c9660298?auto=format&fit=crop&w=600&q=50&fm=webp",
};

// Priority states for eager loading — the most important ones load first
const PRIORITY_STATES = new Set([
  "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "NCT of Delhi",
  "Telangana", "Uttar Pradesh", "West Bengal",
]);

// ─── Memoized Sub-Components ────────────────────────────────────────────────

interface StateInfoPanelProps {
  activeRegion: string;
  data: StateMetrics;
}

const StateInfoPanel = React.memo(({ activeRegion, data }: StateInfoPanelProps) => {
  const displayName = activeRegion === "NCT of Delhi" ? "Delhi NCR" : activeRegion;

  return (
    <div className="relative z-10 lg:col-span-5 text-left flex flex-col items-start gap-5 self-start pt-12 lg:pt-20 notranslate" translate="no">
      <div>
        <h2 className="font-sans text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {displayName}
        </h2>
        <p className="font-sans text-sm text-zinc-200 leading-relaxed mt-3 max-w-sm">
          Supporting startups and MSMEs in {displayName} with access to incubators, funding opportunities, government support and emerging business sectors.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 w-full max-w-sm mt-6 p-5 bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-2xl">
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase select-none">
            Startup Fund
          </span>
          <span className="text-2xl font-sans font-extrabold text-white">
            {data.startupFund}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase select-none">
            Incubators
          </span>
          <span className="text-2xl font-sans font-extrabold text-white">
            {data.incubators}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase select-none">
            Startups Registered
          </span>
          <span className="text-2xl font-sans font-extrabold text-emerald-400">
            {data.dpiitStartups}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase select-none">
            Strong Sector
          </span>
          <span className="text-base font-sans font-bold text-amber-300 leading-tight">
            {data.strongSector}
          </span>
        </div>
      </div>
    </div>
  );
});
StateInfoPanel.displayName = "StateInfoPanel";

// ─── Background Image Stack (CSS-only crossfade, no per-cycle network requests) ─

interface BackgroundImageStackProps {
  activeRegion: string;
  allStateNames: string[];
}

const BackgroundImageStack = React.memo(({ activeRegion, allStateNames }: BackgroundImageStackProps) => {
  // Track which images have been requested/loaded to progressively add them to DOM
  const [loadedStates, setLoadedStates] = useState<Set<string>>(() => new Set(PRIORITY_STATES));

  // When activeRegion changes, ensure that state's image is in the DOM
  useEffect(() => {
    setLoadedStates((prev) => {
      if (prev.has(activeRegion)) return prev;
      const next = new Set(prev);
      next.add(activeRegion);
      return next;
    });
  }, [activeRegion]);

  // Progressively load remaining states after initial mount
  useEffect(() => {
    if (allStateNames.length === 0) return;

    const remaining = allStateNames.filter((name) => !PRIORITY_STATES.has(name));
    if (remaining.length === 0) return;

    // Load remaining states in batches of 6, every 2 seconds
    let batchIndex = 0;
    const batchSize = 6;
    const timer = setInterval(() => {
      const batch = remaining.slice(batchIndex * batchSize, (batchIndex + 1) * batchSize);
      if (batch.length === 0) {
        clearInterval(timer);
        return;
      }
      setLoadedStates((prev) => {
        const next = new Set(prev);
        batch.forEach((name) => next.add(name));
        return next;
      });
      batchIndex++;
    }, 2000);

    return () => clearInterval(timer);
  }, [allStateNames]);

  // Only render images that are in the loadedStates set
  const statesToRender = useMemo(
    () => allStateNames.filter((name) => loadedStates.has(name)),
    [allStateNames, loadedStates]
  );

  return (
    <div className="absolute inset-0 z-0">
      {statesToRender.map((stateName) => {
        const isActive = activeRegion === stateName;
        const isPriority = PRIORITY_STATES.has(stateName);
        return (
          <img
            key={stateName}
            src={STATE_IMAGES[stateName] || DEFAULT_IMAGE}
            alt={stateName}
            loading={isPriority ? "eager" : "lazy"}
            width={600}
            height={400}
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none
              contrast-[1.08] brightness-[0.90] scale-105
              transition-opacity duration-700 ease-in-out
              ${isActive ? "opacity-100" : "opacity-0"}`}
          />
        );
      })}
      {/* Black tint overlay to make the content pop */}
      <div className="absolute inset-0 bg-black/55 z-0" />
    </div>
  );
});
BackgroundImageStack.displayName = "BackgroundImageStack";

// ─── Main Component ─────────────────────────────────────────────────────────

interface IndiaMapSectionProps {
  statesPaths: { stateName: string; pathData: string }[];
}

export function IndiaMapSection({ statesPaths }: IndiaMapSectionProps) {
  const [activeRegion, setActiveRegion] = useState("Maharashtra");
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  // Memoize list of all state names from paths data
  const allStateNames = useMemo(
    () => (statesPaths || []).map((p) => p.stateName),
    [statesPaths]
  );

  // Auto-cycle active region every 3s (slowed from 1.7s for UX + perf)
  useEffect(() => {
    if (hoveredState !== null) return;
    if (allStateNames.length === 0) return;

    const interval = setInterval(() => {
      setActiveRegion((prev) => {
        const currentIndex = allStateNames.indexOf(prev);
        const nextIndex = (currentIndex + 1) % allStateNames.length;
        return allStateNames[nextIndex] ?? prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [hoveredState, allStateNames]);

  // Lookup current state data from module-level constant (no object re-creation)
  const currentStateData = STATE_DATA[activeRegion] || FALLBACK_STATE_DATA;

  const handleStateHover = useCallback((stateName: string) => {
    setActiveRegion(stateName);
    setHoveredState(stateName);
  }, []);

  const handleStateLeave = useCallback(() => {
    setHoveredState(null);
  }, []);

  const handleStateClick = useCallback((stateName: string) => {
    setActiveRegion(stateName);
  }, []);

  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center bg-zinc-950 py-12 lg:py-16 border-y border-zinc-800 relative overflow-hidden">

      {/* CSS-only crossfade background image stack */}
      <BackgroundImageStack
        activeRegion={activeRegion}
        allStateNames={allStateNames}
      />

      {/* Inner Grid: State Info (Left) + India SVG Map (Right) */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 w-full">

        {/* Left Column: State Information & Real-time Metrics HUD */}
        <StateInfoPanel activeRegion={activeRegion} data={currentStateData} />

        <div className="relative z-10 lg:col-span-7 flex flex-col justify-center items-center lg:items-end w-full">
          <div className="relative w-full max-w-[540px] aspect-[500/520] bg-transparent p-0 overflow-hidden flex items-center justify-center lg:justify-end mx-auto lg:ml-auto">

            <ClickSpark
              sparkColor="#ffffff"
              sparkRadius={28}
              sparkCount={10}
              duration={450}
              style={{ display: "block", width: "100%", height: "100%" }}
              className="w-full h-full flex items-center justify-center lg:justify-end"
            >
              <svg
                viewBox="0 0 500 550"
                preserveAspectRatio="xMaxYMid meet"
                className="w-full h-full select-none transition-transform duration-500 notranslate"
              >
                <g className="transition-all duration-300">
                  {(statesPaths || []).map(({ stateName, pathData }) => {
                    const isActive = activeRegion === stateName;

                    return (
                      <path
                        key={stateName}
                        d={pathData}
                        onMouseEnter={() => handleStateHover(stateName)}
                        onMouseLeave={handleStateLeave}
                        onClick={() => handleStateClick(stateName)}
                        className={`transition-all duration-300 cursor-pointer stroke-[1.5] ${isActive
                          ? "fill-white stroke-white drop-shadow-[0_0_16px_rgba(255,255,255,0.3)] z-20"
                          : "fill-white/15 hover:fill-white/30 stroke-white/60 hover:stroke-white/90"
                          }`}
                      >
                        <title>{stateName}</title>
                      </path>
                    );
                  })}
                </g>
              </svg>
            </ClickSpark>

          </div>
        </div>

      </div>
    </section>
  );
}

export default IndiaMapSection;
