import React, { useState } from "react";
import { Award, ShieldCheck, Zap, HeartHandshake, Heart, Info, Briefcase, Sparkles } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  age: string;
  role: string;
  tagline: string;
  bio: string;
  image: string;
  icon: React.ReactNode;
  verified: boolean;
  interests: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

const team: TeamMember[] = [
  {
    id: "founder",
    name: "Sudhanshu Sharma",
    age: "",
    role: "Founder & Chief Architect",
    tagline: "",
    bio: "Sovereign funding strategy advisor with 15+ years of experience optimizing over ₹42B+ in growth funds.",
    image: "https://imgh.in/host/w0f7f5",
    icon: <Award className="w-4 h-4" />,
    verified: true,
    interests: ["Policy Architecture", "Growth Funds", "Sovereign Strategy"],
    stats: [
      { label: "Experience", value: "15+ Yrs" },
      { label: "Firms Guided", value: "450+" },
    ],
  },
  {
    id: "strategy",
    name: "Aryan Sharma",
    age: "",
    role: "Chief Technology Officer, Ex-Nestle",
    tagline: "",
    bio: "Ex-investment banker specializing in cross-border capital matching and private-equity policy compliance.",
    image: "https://imgh.in/host/rgjhxd",
    icon: <Zap className="w-4 h-4" />,
    verified: true,
    interests: ["FDI Channels", "Private Equity", "Cross-Border M&A"],
    stats: [
      { label: "FDI Channels", value: "12+" },
      { label: "M&A Audits", value: "80+" },
    ],
  },
  {
    id: "compliance",
    name: "Yatharth Chopra",
    age: "",
    role: "Backend Engineer",
    tagline: "",
    bio: "Former regulatory officer specializing in central capital subsidies and public scheme allocation audits.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&h=800&fit=crop",
    icon: <ShieldCheck className="w-4 h-4" />,
    verified: true,
    interests: ["Regulatory Compliance", "Capital Subsidies", "Audit Systems"],
    stats: [
      { label: "Audits Lead", value: "300+" },
      { label: "Capital Mapped", value: "₹15B+" },
    ],
  },
  {
    id: "cto",
    name: "Adarsh Sharma",
    age: "",
    role: "Senior Advisor",
    tagline: "",
    bio: "Architect of our AI search and classification engine, parsing state and national scheme directives.",
    image: "https://imgh.in/host/r01dgz",
    icon: <HeartHandshake className="w-4 h-4" />,
    verified: true,
    interests: ["AI/ML", "Search Engineering", "Policy Parsing"],
    stats: [
      { label: "Directives Indexed", value: "10k+" },
      { label: "Accuracy", value: "99.8%" },
    ],
  },
];

function ProfileCard({ member, index }: { member: TeamMember; index: number }) {
  const [liked, setLiked] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleCtaClick = () => {
    window.dispatchEvent(
      new CustomEvent("open-assessment", { detail: { source: "manual_click" } })
    );
  };

  return (
    <div
      className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer select-none"
      style={{
        aspectRatio: "3/4.2",
        transform: `rotate(${index % 2 === 0 ? "-1" : "1"}deg)`,
        transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease",
      }}
      // onClick={handleCtaClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "rotate(0deg) scale(1.03)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = `rotate(${index % 2 === 0 ? "-1" : "1"}deg) scale(1)`;
      }}
    >
      {/* Full-card background image */}
      <div className="absolute inset-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />


      {/* Card content overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        {/* Info panel - slides up on toggle */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${showInfo ? "max-h-48 opacity-100 mb-4" : "max-h-0 opacity-0"
            }`}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
            <p className="text-white/90 text-xs leading-relaxed mb-3">{member.bio}</p>
            <div className="flex flex-wrap gap-1.5">
              {member.interests.map((interest, i) => (
                <span
                  key={i}
                  className="text-[10px] font-semibold bg-white/15 text-white/90 px-2.5 py-1 rounded-full border border-white/10"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Name & Role */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="text-white text-xl font-extrabold tracking-tight leading-tight">
              {member.name}
            </h3>
            <span className="text-white/60 text-sm font-medium">{member.age}</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium">
            <Briefcase className="w-3 h-3" />
            {member.role}
          </div>
          <p className="text-white/50 text-[11px] mt-1 italic">{member.tagline}</p>
        </div>
      </div>

      {/* Nope / Like gradient hints on hover sides */}
      <div className="absolute inset-y-0 left-0 w-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-rose-500/10 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none" />
    </div>
  );
}

export function FounderCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-4 py-8 z-10 relative">
      {team.map((member, index) => (
        <ProfileCard key={member.id} member={member} index={index} />
      ))}
    </div>
  );
}
