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
    name: "Dr. Ananya Sharma",
    age: "15+ yrs exp",
    role: "Founder & Chief Architect",
    tagline: "Building sovereign funding strategies 🏛️",
    bio: "Sovereign funding strategy advisor with 15+ years of experience optimizing over ₹42B+ in growth funds.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=800&fit=crop",
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
    name: "Vikram Mehta",
    age: "12+ yrs exp",
    role: "Head of Strategy",
    tagline: "Cross-border capital matching expert 💼",
    bio: "Ex-investment banker specializing in cross-border capital matching and private-equity policy compliance.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&h=800&fit=crop",
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
    name: "Priya Nair",
    age: "10+ yrs exp",
    role: "Chief Compliance Officer",
    tagline: "Making regulatory complexity simple ⚖️",
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
    name: "Aditya Goel",
    age: "8+ yrs exp",
    role: "Chief Technology Officer",
    tagline: "Engineering AI for policy intelligence 🤖",
    bio: "Architect of our AI search and classification engine, parsing state and national scheme directives.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&h=800&fit=crop",
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
      onClick={handleCtaClick}
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

      {/* Top action buttons */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className={`w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
            liked
              ? "bg-rose-500 text-white scale-110 shadow-lg shadow-rose-500/30"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          <Heart className={`w-5 h-5 ${liked ? "fill-white" : ""}`} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowInfo(!showInfo);
          }}
          className={`w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
            showInfo
              ? "bg-blue-500 text-white"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          <Info className="w-5 h-5" />
        </button>
      </div>

      {/* Verified badge - top left */}
      {member.verified && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-blue-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
          <Sparkles className="w-3 h-3" />
          Verified
        </div>
      )}

      {/* Card content overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        {/* Info panel - slides up on toggle */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            showInfo ? "max-h-48 opacity-100 mb-4" : "max-h-0 opacity-0"
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

        {/* Stats row */}
        <div className="flex gap-2">
          {member.stats.map((stat, sIdx) => (
            <div
              key={sIdx}
              className="flex-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 text-center"
            >
              <span className="block text-[8px] font-bold uppercase tracking-widest text-white/50">
                {stat.label}
              </span>
              <span className="block text-sm font-black text-white tracking-tight mt-0.5">
                {stat.value}
              </span>
            </div>
          ))}
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
