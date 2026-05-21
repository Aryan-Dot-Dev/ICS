import React, { useTransition } from "react";
import { Search, BarChart3, FileText, Compass, ClipboardCheck, Send, Check } from "lucide-react";
import { navigateTo, navigateToDelayed } from "../lib/router";
import { SpotlightCard } from "./ui/SpotlightCard";
import ClickSpark from "./ui/ClickSpark";

export function ServicesPage() {
  const [, startTransition] = useTransition();

  const services = [
    {
      title: "Scheme Discovery",
      icon: Search,
      description: "Identifying high-value institutional grants and commercial opportunities tailored to your sector.",
      bullets: ["Global Database Access", "Real-time Opportunity Alerts"]
    },
    {
      title: "Eligibility Analysis",
      icon: BarChart3,
      description: "Rigorous assessment of organizational criteria against funding mandates to ensure viable applications.",
      bullets: ["Risk Profiling", "Financial Benchmark Mapping"]
    },
    {
      title: "Document Prep",
      icon: FileText,
      description: "Technical writing and documentary curation to meet the most exacting institutional standards.",
      bullets: ["Precision Technical Writing", "Digital Asset Archiving"]
    },
    {
      title: "Expert Advisory",
      icon: Compass,
      description: "Bespoke strategic counsel from former institutional evaluators and high-finance specialists.",
      bullets: ["Evaluation Simulation", "Strategic Pivot Consulting"]
    },
    {
      title: "Compliance Tracking",
      icon: ClipboardCheck,
      description: "Continuous monitoring of regulatory adherence throughout the funding lifecycle and beyond.",
      bullets: ["Audit Trail Automation", "Regulatory Reporting"]
    },
    {
      title: "Application Support",
      icon: Send,
      description: "End-to-end management of the submission process, ensuring flawless technical execution.",
      bullets: ["Multi-stage Management", "Rebuttal Strategy Prep"]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-6 md:px-20 pt-32 pb-16 md:pt-40 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
        <div className="lg:col-span-7 text-left">
          <h1 className="font-sans text-4xl md:text-6xl font-extrabold text-black mb-8 leading-[1.1] max-w-2xl">
            Comprehensive funding support for every business stage.
          </h1>
          <p className="font-sans text-base text-zinc-500 max-w-xl mb-12 leading-relaxed">
            Our institutional rigor ensures precision in navigating complex fiscal landscapes. We provide a sanctuary of clarity for enterprises seeking authoritative funding strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ClickSpark sparkColor="#fff" sparkRadius={20} sparkCount={8} duration={400}>
              <button
                onClick={() => startTransition(() => navigateToDelayed("contact", 400))}
                className="bg-black text-white px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-zinc-800 transition-colors active:scale-95 duration-100 cursor-pointer"
              >
                Inquire Now
              </button>
            </ClickSpark>
            <ClickSpark sparkColor="#000" sparkRadius={24} sparkCount={8} duration={350}>
              <button
                onClick={() => {
                  const element = document.getElementById("strategic-solutions");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-black text-black px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-zinc-50 transition-colors active:scale-95 duration-100 cursor-pointer"
              >
                View Methodology
              </button>
            </ClickSpark>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5 relative h-[500px] border border-zinc-200 rounded-2xl overflow-hidden">
          <img
            alt="Professional architectural setting"
            className="w-full h-full object-cover grayscale brightness-95"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="strategic-solutions" className="px-6 md:px-20 py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left">
            <h2 className="font-sans text-3xl font-extrabold text-black tracking-tight">
              Strategic Solutions
            </h2>
            <div className="h-1 w-20 bg-black mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(24, 24, 27, 0.05)"
                  className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col hover:border-black transition-all duration-300 group hover:-translate-y-1 hover:shadow-sm text-left"
                >
                  <div className="mb-6 text-black group-hover:scale-110 transition-transform duration-200 inline-block">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-sans text-lg font-bold text-black mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-zinc-500 mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-3.5 mt-auto border-t border-zinc-100 pt-6">
                    {item.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-600 transition-colors">
                        <Check size={12} className="text-black shrink-0" />
                        <span className="font-sans text-xs font-semibold">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-20 py-24 flex flex-col items-center text-center max-w-7xl mx-auto">
        <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-black mb-6 tracking-tight">
          Ready to find your funding?
        </h2>
        <p className="font-sans text-base text-zinc-500 max-w-2xl mb-10 leading-relaxed">
          Connect with our advisory board to initiate a preliminary audit of your funding potential. Let our institutional expertise guide your next phase of growth.
        </p>
        <ClickSpark sparkColor="#fff" sparkRadius={20} sparkCount={8} duration={400}>
          <button
            onClick={() => startTransition(() => navigateToDelayed("contact", 400))}
            className="bg-black text-white px-10 py-4.5 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-zinc-800 transition-colors active:scale-95 duration-100 cursor-pointer"
          >
            Initiate Consultation
          </button>
        </ClickSpark>

        {/* Sovereign advisory partners row */}
        <div className="mt-20 w-full max-w-4xl border-t border-zinc-200 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-30 grayscale items-center justify-items-center">
            <div className="font-sans font-black tracking-tighter text-black text-sm">FEDERAL_ARCHIVE</div>
            <div className="font-sans font-black tracking-tighter text-black text-sm">GLOBAL_RESERVE</div>
            <div className="font-sans font-black tracking-tighter text-black text-sm">CAPITAL_TRUST</div>
            <div className="font-sans font-black tracking-tighter text-black text-sm">ETHOS_PARTNERS</div>
          </div>
        </div>
      </section>
    </div>
  );
}
