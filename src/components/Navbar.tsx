import React, { useState, useTransition, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { RoutePath, navigateTo, navigateToDelayed } from "../lib/router";
import ClickSpark from "./ui/ClickSpark";

interface NavbarProps {
  currentRoute: RoutePath;
}

export function Navbar({ currentRoute }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, startTransition] = useTransition();

  // Detect scroll state to trigger capsule style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (route: RoutePath) => {
    setIsMobileMenuOpen(false);
    startTransition(() => {
      navigateToDelayed(route, 300);
    });
  };

  const navLinks: { label: string; route: RoutePath }[] = [
    { label: "Services", route: "services" },
    { label: "About", route: "about" },
    { label: "Blog", route: "blog" },
    { label: "Contact", route: "contact" },
  ];

  // Dynamically calculate border radius to look perfect as a floating capsule
  const headerRadius = isMobileMenuOpen ? "rounded-2xl" : "rounded-full";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-in-out ${
        isScrolled ? "pt-4" : "pt-0"
      }`}
    >
      <div
        className={`w-full pointer-events-auto transition-all duration-500 ease-in-out ${
          isScrolled
            ? `w-[90%] max-w-6xl ${headerRadius} border border-zinc-200/80 bg-white/80 backdrop-blur-md shadow-lg shadow-zinc-200/25 py-2 md:py-3 px-6 md:px-12`
            : "w-full max-w-full rounded-none border border-transparent bg-transparent py-4 md:py-5 px-6 md:px-20"
        }`}
      >
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto">
        {/* Brand Logo */}
        <ClickSpark sparkColor="#000" sparkRadius={20} sparkCount={8} duration={300}>
          <div 
            onClick={() => handleNavClick("landing")}
            className="font-sans text-xl md:text-2xl font-extrabold tracking-tighter text-black cursor-pointer select-none hover:opacity-80 transition-opacity uppercase"
          >
            Infou Consultancy
          </div>
        </ClickSpark>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, route }) => {
            const isActive = currentRoute === route;
            return (
              <ClickSpark key={route} sparkColor="#000" sparkRadius={18} sparkCount={6} duration={300}>
                <button
                  onClick={() => handleNavClick(route)}
                  className={`font-sans text-sm tracking-wide uppercase transition-all duration-200 cursor-pointer pb-0.5 border-b-2 ${
                    isActive
                      ? "text-black border-black font-semibold"
                      : "text-zinc-500 border-transparent hover:text-black hover:border-zinc-300"
                  }`}
                >
                  {label}
                </button>
              </ClickSpark>
            );
          })}
        </div>

        {/* Action Items */}
        <div className="hidden md:flex items-center gap-6">
          <ClickSpark sparkColor="#fff" sparkRadius={20} sparkCount={8} duration={400}>
            <a
              href="tel:+18005550199"
              className="bg-black text-white px-6 py-2.5 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-zinc-800 transition-all active:scale-95 duration-100 flex items-center gap-2"
            >
              <Phone size={12} />
              +1 (800) 555-0199
            </a>
          </ClickSpark>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center gap-4">
          <ClickSpark sparkColor="#000" sparkRadius={20} sparkCount={8} duration={350}>
            <a
              href="tel:+18005550199"
              className="p-2 border border-zinc-200 rounded-full hover:bg-zinc-50 text-black transition-colors flex items-center justify-center"
              title="Call Us"
            >
              <Phone size={16} />
            </a>
          </ClickSpark>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-black hover:bg-zinc-100 rounded-full transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden border-t border-zinc-100 bg-white/95 backdrop-blur-md animate-in slide-in-from-top-4 duration-200 mt-2 ${isScrolled ? "rounded-b-2xl pb-4" : ""}`}>
          <div className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map(({ label, route }) => {
              const isActive = currentRoute === route;
              return (
                <ClickSpark key={route} sparkColor="#000" sparkRadius={18} sparkCount={6} duration={300} className="w-full" style={{ display: "block", width: "100%" }}>
                  <button
                    key={route}
                    onClick={() => handleNavClick(route)}
                    className={`text-left font-sans text-base tracking-wide uppercase transition-all pb-1 border-b w-full ${
                      isActive
                        ? "text-black border-black font-bold"
                        : "text-zinc-500 border-zinc-100 hover:text-black"
                    }`}
                  >
                    {label}
                  </button>
                </ClickSpark>
              );
            })}
            <div className="h-px bg-zinc-100 my-1" />
            <div className="flex flex-col gap-3">
              <ClickSpark sparkColor="#fff" sparkRadius={20} sparkCount={8} duration={400} className="w-full" style={{ display: "block", width: "100%" }}>
                <a
                  href="tel:+18005550199"
                  className="bg-black text-white text-center py-3.5 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-zinc-800 transition-all active:scale-95 duration-100 flex items-center justify-center gap-2"
                >
                  <Phone size={14} />
                  +1 (800) 555-0199
                </a>
              </ClickSpark>
            </div>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}
