import React, { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import ClickSpark from "./ui/ClickSpark";
import { useLanguage } from "../lib/i18n";

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { t } = useLanguage();

  const categories = ["ALL", "POLICY", "GUIDES", "ANALYSIS", "CASE STUDIES"];

  const posts = [
    {
      id: 1,
      category: "ANALYSIS",
      readTime: `12 ${t("blog.readTime")}`,
      title: "The Shift in Institutional Allocation Strategies for 2025",
      excerpt: "An in-depth examination of how global consultancy firms are restructuring their private equity portfolios in response to emerging regulatory frameworks across the European Union and North America.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      category: "GUIDES",
      readTime: `6 ${t("blog.readTime")}`,
      title: "Navigating Compliance in Cross-Border Funding",
      excerpt: "A practical step-by-step guide for institutional leaders on maintaining transparency while managing diverse global investment portfolios.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
      featured: false
    },
    {
      id: 3,
      category: "POLICY",
      readTime: `8 ${t("blog.readTime")}`,
      title: "New Fiscal Reforms and Their Impact on Growth",
      excerpt: "Evaluating the legislative changes proposed in the latest treasury summit and what they mean for medium-term capital availability.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      featured: false
    },
    {
      id: 4,
      category: "CASE STUDIES",
      readTime: `15 ${t("blog.readTime")}`,
      title: "Scaling the Institutional Advisory Board",
      excerpt: "How a Tier-1 financial group successfully restructured its internal advisory workflows to increase operational efficiency by 40%.",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80",
      featured: false
    }
  ];

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setEmailError("Email address is required");
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 5000);
    setEmail("");
  };

  const filteredPosts = posts.filter(post => {
    if (activeCategory === "ALL") return true;
    // Map category name slightly to handle plural categories (e.g. GUIDES vs GUIDE)
    return post.category.toUpperCase() === activeCategory.toUpperCase() ||
      post.category.toUpperCase().replace("S", "") === activeCategory.toUpperCase() ||
      activeCategory.toUpperCase().replace("S", "") === post.category.toUpperCase();
  });

  const featuredPost = filteredPosts.find(p => p.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(p => p.id !== (featuredPost?.id || -1));

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-6 md:px-20 pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col md:flex-row gap-12 md:gap-16 items-end max-w-7xl mx-auto text-left">
        <div className="flex-1">
          <h1 className="font-sans text-4xl md:text-6xl font-extrabold tracking-tight text-black max-w-3xl leading-[1.1]">
            {t("blog.title")}
          </h1>
        </div>
        <div className="w-full md:w-1/3 text-zinc-500 font-sans text-base leading-relaxed">
          {t("blog.desc")}
        </div>
      </section>

      {/* Category Filter */}
      <div className="px-6 md:px-20 max-w-7xl mx-auto">
        <div className="h-px bg-zinc-200 w-full" />
        <div className="flex flex-wrap gap-8 py-6 items-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-xs font-bold tracking-widest uppercase transition-all pb-1.5 border-b-2 cursor-pointer ${activeCategory === cat
                  ? "text-black border-black"
                  : "text-zinc-400 border-transparent hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="h-px bg-zinc-200 w-full" />
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <section className="px-6 md:px-20 py-16 max-w-7xl mx-auto">
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group cursor-pointer text-left">
            <div className="relative aspect-video overflow-hidden bg-zinc-100 border border-zinc-200 rounded-2xl">
              <img
                alt={featuredPost.title}
                width={600}
                height={338}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 grayscale"
                loading="lazy"
                src={featuredPost.image}
              />
              <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-sans text-[9px] font-bold tracking-widest uppercase rounded-lg">
                Featured
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-sans text-xs font-bold text-black border border-black rounded-lg px-2.5 py-0.5">
                  {featuredPost.category}
                </span>
                <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
                <span className="font-sans text-xs font-bold text-zinc-400">
                  {featuredPost.readTime}
                </span>
              </div>
              <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-black mb-6 leading-snug group-hover:underline underline-offset-4 decoration-1">
                {featuredPost.title}
              </h2>
              <p className="font-sans text-sm text-zinc-500 mb-8 leading-relaxed max-w-xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-2 group-hover:translate-x-1.5 transition-transform duration-200">
                <span className="font-sans text-xs font-bold tracking-widest text-black">READ ARTICLE</span>
                <ArrowRight size={14} className="text-black" />
              </div>
            </div>
          </article>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="px-6 md:px-20 pb-24 max-w-7xl mx-auto">
        <div className="h-px bg-zinc-200 mb-16 w-full" />

        {regularPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => (
              <div key={post.id} className="flex flex-col group cursor-pointer text-left">
                <div className="aspect-[4/3] bg-zinc-100 mb-6 overflow-hidden border border-zinc-200 rounded-2xl">
                  <img
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                    src={post.image}
                  />
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-sans text-[10px] font-bold tracking-wider text-black border border-black rounded-lg px-2 py-0.5">
                    {post.category}
                  </span>
                  <span className="font-sans text-[10px] font-bold text-zinc-400">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-sans text-lg font-bold text-black mb-3 leading-snug group-hover:text-zinc-600 transition-colors">
                  {post.title}
                </h3>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>
        ) : (
          regularPosts.length === 0 && !featuredPost && (
            <div className="text-center py-12 text-zinc-400 font-sans">
              No publications match the selected criteria. Check back shortly.
            </div>
          )
        )}
      </section>

      {/* Newsletter Block */}
      <section className="bg-black text-white py-24 text-left">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 mb-6">
            Intellectual Capital
          </p>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-white mb-12 tracking-tight">
            Stay at the forefront of the industry.
          </h2>

          <form onSubmit={handleSubscribeSubmit} className={`flex flex-col sm:flex-row gap-2 max-w-2xl border bg-zinc-950 p-2 rounded-xl transition-colors ${emailError ? "border-red-500" : "border-zinc-800"}`} noValidate>
            <input
              required
              className="flex-1 bg-transparent border-0 focus:ring-0 focus:outline-none px-4 py-3 text-white placeholder:text-zinc-700 font-sans text-sm tracking-wider uppercase"
              placeholder="Email address"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
            />
            <ClickSpark sparkColor="#000" sparkRadius={24} sparkCount={8} duration={350}>
              <button
                type="submit"
                className="bg-white text-black px-8 py-3.5 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-zinc-100 transition-colors active:scale-95 duration-100 cursor-pointer whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </ClickSpark>
          </form>

          {emailError && (
            <div className="text-red-500 text-xs font-bold tracking-wider uppercase mt-2 animate-fadeIn">
              {emailError}
            </div>
          )}

          {isSubscribed && (
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-wider uppercase mt-4 animate-fadeIn">
              <CheckCircle size={14} />
              Subscription Confirmed. Pure intelligence inbound.
            </div>
          )}

          <p className="mt-6 text-zinc-500 font-sans text-xs uppercase tracking-wider">
            Weekly curated insights. No noise. Pure intelligence.
          </p>
        </div>
      </section>
    </div>
  );
}
