import React, { useState, useEffect, useRef, Suspense } from "react";
import { ShieldCheck, Landmark, TrendingUp, ArrowRight, MapPin, CheckCircle, HelpCircle } from "lucide-react";
import { navigateTo, navigateToDelayed } from "../lib/router";
import { Magnet } from "./ui/Magnet";
const Grainient = React.lazy(() => import("./ui/Grainient"));
import { ClickSpark } from "./ui/ClickSpark";
import indiaStatesData from "../data/india_states_compressed.json";
import { AnimatedCounter } from "./ui/Counter";
import { Testimonials } from "./ui/Testimonials";
import { LogoCloud } from "./ui/logo-cloud-3";
import { gsap } from "gsap";
import { AnimatedGroup } from "./ui/hero-section-with-gradient";
import { Button } from "./ui/button";
import { TextType } from "./ui/TextType";
import { useLanguage } from "../lib/i18n";

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];

// Map projection math: India boundaries
// Lon: [68.187, 97.378], Lat: [6.757, 37.074]
const minLon = 68.187;
const maxLat = 37.074;
const centerLatRad = (21.9 * Math.PI) / 180;
const cosVal = Math.cos(centerLatRad); // ~0.9278

const project = (lon: number, lat: number) => {
  const x = 19.8 + (lon - minLon) * cosVal * 17.0;
  const y = 17.3 + (maxLat - lat) * 17.0;
  return `${x.toFixed(1)},${y.toFixed(1)}`;
};

const generatePathData = (geometry: any): string => {
  if (!geometry) return "";
  if (geometry.type === "Polygon") {
    return geometry.coordinates
      .map((ring: number[][]) => {
        return ring
          .map((coord, i) => {
            const p = project(coord[0]!, coord[1]!);
            return `${i === 0 ? "M" : "L"}${p}`;
          })
          .join(" ") + " Z";
      })
      .join(" ");
  } else if (geometry.type === "MultiPolygon") {
    return geometry.coordinates
      .map((polygon: number[][][]) => {
        return polygon
          .map((ring: number[][]) => {
            return ring
              .map((coord, i) => {
                const p = project(coord[0]!, coord[1]!);
                return `${i === 0 ? "M" : "L"}${p}`;
              })
              .join(" ") + " Z";
          })
          .join(" ");
      })
      .join(" ");
  }
  return "";
};

interface StateMetrics {
  funds: string;
  centers: number;
  success: string;
}

const getStateData = (name: string): StateMetrics => {
  const hubs: Record<string, StateMetrics> = {
    "Maharashtra": { funds: "₹12.4B", centers: 18, success: "94.2%" },
    "NCT of Delhi": { funds: "₹9.8B", centers: 12, success: "91.5%" },
    "Karnataka": { funds: "₹15.2B", centers: 22, success: "89.8%" },
    "Tamil Nadu": { funds: "₹8.6B", centers: 14, success: "85.4%" },
    "Gujarat": { funds: "₹7.9B", centers: 11, success: "88.0%" }
  };

  const matched = hubs[name];
  if (matched) return matched;

  // Deterministic hash-based mock generator
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  hash = Math.abs(hash);

  const fundsNum = ((hash % 56) + 12) / 10;
  const funds = `₹${fundsNum.toFixed(1)}B`;
  const centers = (hash % 8) + 2;
  const successNum = (hash % 16) + 72;
  const success = `${successNum}%`;

  return { funds, centers, success };
};

export function LandingPage() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeRegion, setActiveRegion] = useState("Maharashtra");

  const [schemesHover, setSchemesHover] = useState(0);
  const [statesHover, setStatesHover] = useState(0);
  const [capitalHover, setCapitalHover] = useState(0);
  const [errorHover, setErrorHover] = useState(0);

  const [whyChooseHover1, setWhyChooseHover1] = useState(0);
  const [whyChooseHover2, setWhyChooseHover2] = useState(0);
  const [whyChooseHover3, setWhyChooseHover3] = useState(0);

  const gradientRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!gradientRef.current) return;
    gsap.fromTo(
      gradientRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1.6, ease: "power3.out" }
    );
  }, []);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setEmail("");
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="p-6 overflow-hidden rounded-xl bg-white pt-24 md:pt-32">
        <div className="relative w-full">
          <div
            ref={gradientRef}
            className="absolute inset-0 -z-10 overflow-hidden max-h-[90vh] rounded-2xl border border-zinc-200/50"
          >
            <Suspense fallback={<div className="absolute inset-0 bg-secondary/20 animate-pulse" />}>
              <Grainient
                className="absolute inset-0 w-full h-full"
                color1="#FFF8F5"
                color2="#FFD2C4"
                color3="#DEBE94"
                timeSpeed={0.12}
                warpStrength={0.5}
                warpFrequency={3.0}
                warpSpeed={0.8}
                warpAmplitude={35.0}
                grainAmount={0.06}
                contrast={1.1}
              />
            </Suspense>
            {/* Tactile Dotted Grid Paper Texture Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-45"
              style={{
                backgroundImage: `radial-gradient(oklch(0.85 0.02 38) 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />
            {/* Bottom fade out transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>

          <div className="pt-8 pb-10 sm:pt-12 sm:pb-16 text-center">
            <div className="relative max-w-4xl mx-auto px-6">


              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.1]">
                Government Funding Strategy for Indian{" "}
                <span className="inline-block min-w-[200px] sm:min-w-[320px] text-center text-zinc-850 notranslate">
                  <TextType
                    text={["Businesses", "Startups", "SMEs"]}
                    as="span"
                    typingSpeed={80}
                    deletingSpeed={45}
                    pauseDuration={2200}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorClassName="text-zinc-400 font-light ml-1"
                  />
                </span>
              </h1>
              <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                {t("hero.desc")}
              </p>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  item: {
                    hidden: {
                      opacity: 0,
                      filter: "blur(12px)",
                      y: 12,
                    },
                    visible: {
                      opacity: 1,
                      filter: "blur(0px)",
                      y: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.3,
                        duration: 1.5,
                      },
                    },
                  },
                }}
                className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row"
              >
                <div key={1} className="bg-foreground/10 rounded-[14px] border border-zinc-200/50 p-0.5">
                  <Magnet padding={60} disabled={false} magnetStrength={10}>
                    <ClickSpark sparkColor="#fff" sparkRadius={24} sparkCount={8} duration={350}>
                      <Button
                        onClick={() => {
                          window.dispatchEvent(
                            new CustomEvent("open-assessment", { detail: { source: "manual_click" } })
                          );
                        }}
                        size="lg"
                        className="rounded-xl px-6 py-4 text-xs font-bold tracking-widest uppercase bg-black text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                      >
                        <span className="text-nowrap">{t("hero.assessmentBtn")}</span>
                      </Button>
                    </ClickSpark>
                  </Magnet>
                </div>
                <div
                  key={2}
                  className="bg-gradient-to-r from-zinc-400 via-zinc-600 to-zinc-800 rounded-[14px] border border-zinc-200/50 p-0.5"
                >
                  <ClickSpark sparkColor="#000" sparkRadius={24} sparkCount={8} duration={350}>
                    <Button
                      onClick={() => navigateToDelayed("services", 350)}
                      size="lg"
                      className="rounded-xl px-6 py-4 text-xs font-bold tracking-widest uppercase bg-white text-zinc-900 hover:bg-zinc-50 border border-zinc-200 transition-colors cursor-pointer"
                    >
                      <span className="text-nowrap">{t("hero.servicesBtn")}</span>
                    </Button>
                  </ClickSpark>
                </div>
              </AnimatedGroup>
            </div>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  filter: "blur(12px)",
                  y: 12,
                },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 1.5,
                  },
                },
              },
            }}
          >
            <div className="relative overflow-hidden px-2 mt-4">
              <div
                aria-hidden
                className="bg-gradient-to-b from-transparent to-white absolute inset-0 z-10 from-35%"
              />
              <div className="max-h-[45vh] bg-white relative mx-auto max-w-5xl overflow-hidden rounded-t-2xl border border-zinc-200 border-b-0 p-4 shadow-lg shadow-zinc-950/10">
                <a href="#" className="cursor-default">
                  <img
                    className="aspect-15/8 relative rounded-2xl w-full h-auto object-cover grayscale brightness-95 border border-zinc-100/50 shadow-inner"
                    src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                    alt="Institutional diagnostics dashboard preview"
                  />
                </a>
              </div>
            </div>
          </AnimatedGroup>
        </div>
        {/* <BrandsGrid /> */}
      </section>

      {/* Metrics Row */}
      <section className="border-y border-zinc-200/80 bg-secondary/35">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              onMouseEnter={() => setSchemesHover((p) => p + 1)}
              className="flex flex-col text-left cursor-pointer group"
            >
              <span className="font-sans text-4xl md:text-5xl font-extrabold text-black mb-1 flex items-center h-[36px] md:h-[48px]">
                <AnimatedCounter hoverTrigger={schemesHover} value="130+" fontSize={36} mdFontSize={48} fontWeight={800} textColor="black" />
              </span>
              <span className="font-sans text-[10px] tracking-widest text-zinc-400 group-hover:text-black transition-colors font-bold uppercase">{t("metrics.activeSchemes")}</span>
            </div>
            <div
              onMouseEnter={() => setStatesHover((p) => p + 1)}
              className="flex flex-col text-left cursor-pointer group"
            >
              <span className="font-sans text-4xl md:text-5xl font-extrabold text-black mb-1 flex items-center h-[36px] md:h-[48px]">
                <AnimatedCounter hoverTrigger={statesHover} value="28" fontSize={36} mdFontSize={48} fontWeight={800} textColor="black" />
              </span>
              <span className="font-sans text-[10px] tracking-widest text-zinc-400 group-hover:text-black transition-colors font-bold uppercase">{t("metrics.statesMapped")}</span>
            </div>
            <div
              onMouseEnter={() => setCapitalHover((p) => p + 1)}
              className="flex flex-col text-left cursor-pointer group"
            >
              <span className="font-sans text-4xl md:text-5xl font-extrabold text-black mb-1 flex items-center h-[36px] md:h-[48px]">
                <AnimatedCounter hoverTrigger={capitalHover} value="₹42B" fontSize={36} mdFontSize={48} fontWeight={800} textColor="black" />
              </span>
              <span className="font-sans text-[10px] tracking-widest text-zinc-400 group-hover:text-black transition-colors font-bold uppercase">{t("metrics.capitalOptimized")}</span>
            </div>
            <div
              onMouseEnter={() => setErrorHover((p) => p + 1)}
              className="flex flex-col text-left cursor-pointer group"
            >
              <span className="font-sans text-4xl md:text-5xl font-extrabold text-black mb-1 flex items-center h-[36px] md:h-[48px]">
                <AnimatedCounter hoverTrigger={errorHover} value="0%" fontSize={36} mdFontSize={48} fontWeight={800} textColor="black" />
              </span>
              <span className="font-sans text-[10px] tracking-widest text-zinc-400 group-hover:text-black transition-colors font-bold uppercase">{t("metrics.complianceError")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Intelligence Framework */}
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto">
        <div className="mb-16 text-left">
          <p className="font-sans text-xs font-extrabold tracking-[0.2em] uppercase text-bronze mb-4">
            The Framework
          </p>
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-black tracking-tight">
            Precision Intelligence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 md:p-12 border border-zinc-200 rounded-2xl hover:border-black hover:bg-zinc-50 transition-colors duration-300 group text-left">
            <div className="text-black mb-8">
              <ShieldCheck size={36} strokeWidth={1.5} />
            </div>
            <h3 className="font-sans text-xl font-bold text-black mb-4">Eligibility</h3>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed mb-8">
              Comprehensive diagnostic audit of corporate structures against cross-departmental grant criteria and fiscal incentives.
            </p>
            <div className="w-12 h-[1px] bg-black group-hover:w-full transition-all duration-300" />
          </div>

          {/* Card 2 */}
          <div className="p-8 md:p-12 border border-zinc-200 rounded-2xl hover:border-black hover:bg-zinc-50 transition-colors duration-300 group text-left">
            <div className="text-black mb-8">
              <Landmark size={36} strokeWidth={1.5} />
            </div>
            <h3 className="font-sans text-xl font-bold text-black mb-4">Compliance</h3>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed mb-8">
              Rigorous adherence to statutory reporting mandates, ensuring risk-mitigated applications and sustained funding cycles.
            </p>
            <div className="w-12 h-[1px] bg-black group-hover:w-full transition-all duration-300" />
          </div>

          {/* Card 3 */}
          <div className="p-8 md:p-12 border border-zinc-200 rounded-2xl hover:border-black hover:bg-zinc-50 transition-colors duration-300 group text-left">
            <div className="text-black mb-8">
              <TrendingUp size={36} strokeWidth={1.5} />
            </div>
            <h3 className="font-sans text-xl font-bold text-black mb-4">Peer Analysis</h3>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed mb-8">
              Deep-tier benchmarking against industry leaders to identify under-utilized subsidies and competitive advantages.
            </p>
            <div className="w-12 h-[1px] bg-black group-hover:w-full transition-all duration-300" />
          </div>
        </div>
      </section>

      {/* Logo Cloud Section */}
      <section className="relative border-y border-zinc-200 bg-zinc-50/50 py-16 overflow-hidden w-full">
        {/* Subtle decorative grid/glow inside logo cloud for premium feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:30px_30px] opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 via-transparent to-zinc-50 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 md:px-20 text-center mb-6">
          <h2 className="text-center font-sans font-medium text-zinc-800 text-lg tracking-tight md:text-xl">
            <span className="text-zinc-400">Trusted by experts.</span>{" "}
            <span className="font-semibold text-black">Used by the leaders.</span>
          </h2>
          <div className="mx-auto mt-6 h-px max-w-md bg-zinc-200 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        </div>

        {/* Full width container for LogoCloud */}
        <div className="w-full relative py-2">
          <LogoCloud logos={logos} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 md:px-20">
          <div className="mt-6 h-px bg-zinc-200 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        </div>
      </section>

      <section className="bg-white text-black py-24 border-y border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 text-left flex flex-col">
              {/* Dynamic Diagnostic HUD Card */}
              <div className="flex-grow bg-zinc-50/50 border border-zinc-200 rounded-2xl p-8 relative overflow-hidden backdrop-blur-md flex flex-col justify-between min-h-[380px] shadow-md">
                {/* Decorative pulse line at top */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:20px_20px] opacity-15 pointer-events-none" />

                {/* Top Section */}
                <div className="relative z-10">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">
                    {t("map.hudActive")}
                  </span>
                  <span className="text-3xl md:text-4xl font-extrabold text-black tracking-tight block">
                    {activeRegion === "NCT of Delhi" ? "Delhi NCR" : activeRegion}
                  </span>
                </div>

                {/* Bottom Section */}
                <div className="relative z-10 border-t border-zinc-200 pt-6 mt-8">
                  <div className="space-y-5">
                    <div className="flex justify-between items-center border-b border-zinc-200 pb-3">
                      <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        {t("map.hudOptimized")}
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-black tracking-tight font-mono flex items-center h-[20px] md:h-[24px]">
                        <AnimatedCounter
                          value={getStateData(activeRegion).funds}
                          fontSize={20}
                          mdFontSize={24}
                          fontWeight={700}
                          textColor="black"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-zinc-200 pb-3">
                      <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        {t("map.hudHubs")}
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-black tracking-tight font-mono flex items-center h-[20px] md:h-[24px]">
                        <AnimatedCounter
                          value={getStateData(activeRegion).centers}
                          fontSize={20}
                          mdFontSize={24}
                          fontWeight={700}
                          textColor="black"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        {t("map.hudSuccess")}
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-emerald-600 tracking-tight font-mono flex items-center h-[20px] md:h-[24px]">
                        <AnimatedCounter
                          value={getStateData(activeRegion).success}
                          fontSize={20}
                          mdFontSize={24}
                          fontWeight={700}
                          textColor="#059669"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="lg:col-span-7 flex flex-col justify-center items-center">
              <div className="relative w-full aspect-[500/550] bg-zinc-50 border border-zinc-200 rounded-2xl p-0 overflow-hidden flex items-center justify-center shadow-md">
                {/* Grid overlay for high-tech feeling */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:25px_25px] opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-200/20 pointer-events-none" />

                {/* Glow background for active state details */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-200 via-transparent to-transparent pointer-events-none" />

                <ClickSpark
                  sparkColor="#000000"
                  sparkRadius={28}
                  sparkCount={10}
                  duration={450}
                  style={{ display: "block", width: "100%", height: "100%" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <svg
                    viewBox="0 0 500 550"
                    className="w-full h-full select-none transition-transform duration-500"
                  >
                    <g className="transition-all duration-300">
                      {indiaStatesData.features.map((feature: any) => {
                        const stateName = feature.properties.name;
                        const isActive = activeRegion === stateName;

                        return (
                          <path
                            key={stateName}
                            d={generatePathData(feature.geometry)}
                            onMouseEnter={() => setActiveRegion(stateName)}
                            onClick={() => setActiveRegion(stateName)}
                            className={`transition-all duration-300 cursor-pointer stroke-[1] ${isActive
                              ? "fill-black stroke-white drop-shadow-[0_0_15px_rgba(0,0,0,0.15)] z-20"
                              : "fill-zinc-100 hover:fill-zinc-200 stroke-zinc-300 hover:stroke-zinc-450"
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
        </div>
      </section>

      {/* Why Choose ICS Section */}
      <section className="px-6 md:px-20 py-24 bg-secondary/20 border-b border-zinc-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center mb-16">
            <span className="font-sans text-[10px] tracking-[0.2em] text-bronze font-bold uppercase border border-bronze/20 px-4 py-1.5 rounded-lg bg-bronze/10 select-none shadow-xs mb-6">
              {t("choose.badge")}
            </span>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight mb-6">
              {t("choose.title")}
            </h2>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed">
              {t("choose.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              onMouseEnter={() => setWhyChooseHover1(p => p + 1)}
              className="group flex flex-col justify-between p-8 rounded-2xl border border-zinc-200 hover:border-primary bg-white hover:bg-secondary/15 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-bronze/10 rounded-xl border border-bronze/30 text-bronze group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ShieldCheck className="w-6 h-6 text-bronze group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-sans text-4xl font-extrabold text-black tracking-tight flex items-center h-[36px] md:h-[40px]">
                    <AnimatedCounter hoverTrigger={whyChooseHover1} value="98%" fontSize={36} mdFontSize={40} fontWeight={800} textColor="black" />
                  </span>
                </div>
                <h3 className="font-sans text-xl font-bold text-black mb-4">{t("choose.card1.title")}</h3>
                <p className="font-sans text-sm text-zinc-500 leading-relaxed mb-8">
                  {t("choose.card1.desc")}
                </p>
              </div>
              <div className="w-12 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
            </div>

            {/* Card 2 */}
            <div
              onMouseEnter={() => setWhyChooseHover2(p => p + 1)}
              className="group flex flex-col justify-between p-8 rounded-2xl border border-zinc-200 hover:border-primary bg-white hover:bg-secondary/15 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-bronze/10 rounded-xl border border-bronze/30 text-bronze group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Landmark className="w-6 h-6 text-bronze group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-sans text-4xl font-extrabold text-black tracking-tight flex items-center h-[36px] md:h-[40px]">
                    <AnimatedCounter hoverTrigger={whyChooseHover2} value="₹12.5B" fontSize={36} mdFontSize={40} fontWeight={800} textColor="black" />
                  </span>
                </div>
                <h3 className="font-sans text-xl font-bold text-black mb-4">{t("choose.card2.title")}</h3>
                <p className="font-sans text-sm text-zinc-500 leading-relaxed mb-8">
                  {t("choose.card2.desc")}
                </p>
              </div>
              <div className="w-12 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
            </div>

            {/* Card 3 */}
            <div
              onMouseEnter={() => setWhyChooseHover3(p => p + 1)}
              className="group flex flex-col justify-between p-8 rounded-2xl border border-zinc-200 hover:border-primary bg-white hover:bg-secondary/15 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-bronze/10 rounded-xl border border-bronze/30 text-bronze group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
                    <TrendingUp className="w-6 h-6 text-bronze group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-sans text-4xl font-extrabold text-black tracking-tight flex items-center h-[36px] md:h-[40px]">
                    <AnimatedCounter hoverTrigger={whyChooseHover3} value="10x" fontSize={36} mdFontSize={40} fontWeight={800} textColor="black" />
                  </span>
                </div>
                <h3 className="font-sans text-xl font-bold text-black mb-4">{t("choose.card3.title")}</h3>
                <p className="font-sans text-sm text-zinc-550 leading-relaxed mb-8">
                  {t("choose.card3.desc")}
                </p>
              </div>
              <div className="w-12 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* How ICS Works Section */}
      <section className="px-6 md:px-20 py-24 bg-white border-b border-zinc-200 overflow-hidden relative">
        {/* Subtle grid background for high-tech premium feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center mb-16">
            <span className="font-sans text-[10px] tracking-[0.2em] text-zinc-400 font-bold uppercase border border-zinc-200 px-4 py-1.5 rounded-lg bg-white select-none shadow-xs mb-6">
              {t("process.badge")}
            </span>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight mb-6">
              {t("process.title")}
            </h2>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed">
              {t("process.desc")}
            </p>
          </div>

          {/* Segmented Pipeline Bar */}
          <div className="relative max-w-6xl mx-auto bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden mt-16">
            {/* Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-zinc-200 relative z-10 bg-transparent">
              {/* Step 1 */}
              <div className="p-6 md:p-8 flex flex-col justify-between min-h-[220px] hover:bg-zinc-50/50 transition-colors duration-300 group">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-2xl font-black text-zinc-900">01</span>
                    <span className="inline-block px-2 py-0.5 bg-zinc-50 border border-zinc-150 rounded text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                      {t("process.step1.duration")}
                    </span>
                  </div>
                  <h3 className="font-sans text-base md:text-lg font-bold text-zinc-900 leading-tight mb-3">{t("process.step1.title")}</h3>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    {t("process.step1.desc")}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-6 md:p-8 flex flex-col justify-between min-h-[220px] hover:bg-zinc-50/50 transition-colors duration-300 group">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-2xl font-black text-zinc-900">02</span>
                    <span className="inline-block px-2 py-0.5 bg-zinc-50 border border-zinc-150 rounded text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                      {t("process.step2.duration")}
                    </span>
                  </div>
                  <h3 className="font-sans text-base md:text-lg font-bold text-zinc-900 leading-tight mb-3">{t("process.step2.title")}</h3>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    {t("process.step2.desc")}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-6 md:p-8 flex flex-col justify-between min-h-[220px] hover:bg-zinc-50/50 transition-colors duration-300 group">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-2xl font-black text-zinc-900">03</span>
                    <span className="inline-block px-2 py-0.5 bg-zinc-50 border border-zinc-150 rounded text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                      {t("process.step3.duration")}
                    </span>
                  </div>
                  <h3 className="font-sans text-base md:text-lg font-bold text-zinc-900 leading-tight mb-3">{t("process.step3.title")}</h3>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    {t("process.step3.desc")}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-6 md:p-8 flex flex-col justify-between min-h-[220px] hover:bg-zinc-50/50 transition-colors duration-300 group">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-2xl font-black text-zinc-900">04</span>
                    <span className="inline-block px-2 py-0.5 bg-zinc-50 border border-zinc-150 rounded text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                      {t("process.step4.duration")}
                    </span>
                  </div>
                  <h3 className="font-sans text-base md:text-lg font-bold text-zinc-900 leading-tight mb-3">{t("process.step4.title")}</h3>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    {t("process.step4.desc")}
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="p-6 md:p-8 flex flex-col justify-between min-h-[220px] hover:bg-zinc-50/50 transition-colors duration-300 group">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-2xl font-black text-zinc-900">05</span>
                    <span className="inline-block px-2.5 py-0.5 bg-zinc-50 border border-zinc-150 rounded text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                      {t("process.step5.duration")}
                    </span>
                  </div>
                  <h3 className="font-sans text-base md:text-lg font-bold text-zinc-900 leading-tight mb-3">{t("process.step5.title")}</h3>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    {t("process.step5.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="px-6 md:px-20 py-24 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-black mb-12 tracking-tight">
            {t("cta.title")}
          </h2>

          <form onSubmit={handleAuditSubmit} className="max-w-xl mx-auto border border-zinc-200 rounded-xl p-2 bg-zinc-50 flex flex-col sm:flex-row gap-2 mb-8">
            <input
              required
              className="flex-grow border-0 focus:ring-0 focus:outline-none font-sans text-xs tracking-wider uppercase px-4 py-3 placeholder:text-zinc-300 text-black bg-transparent"
              placeholder={t("cta.placeholder")}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ClickSpark sparkColor="#fff" sparkRadius={24} sparkCount={8} duration={350}>
              <button
                type="submit"
                className="bg-black text-white px-8 py-3.5 text-xs font-bold hover:bg-zinc-800 rounded-lg transition-all uppercase tracking-widest whitespace-nowrap active:scale-95 duration-100 cursor-pointer"
              >
                {t("cta.initialize")}
              </button>
            </ClickSpark>
          </form>

          {isSubmitted && (
            <div className="flex items-center justify-center gap-2 text-zinc-800 text-xs font-bold tracking-wider uppercase mb-6 animate-bounce">
              <CheckCircle size={14} className="text-black" />
              {t("cta.success")}
            </div>
          )}

          <p className="font-sans text-[10px] text-zinc-400 font-semibold uppercase tracking-[0.2em]">
            {t("cta.restricted")}
          </p>
        </div>
      </section>
    </div>
  );
}
