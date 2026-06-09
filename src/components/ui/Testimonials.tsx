import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn, Testimonial } from "./testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "Completely transparent from Day 1. They delivered exactly what they promised.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=80&h=80&q=80",
    name: "Priya Sharma",
    role: "Operations Manager, Jaipur",
  },
  {
    text: "When our first application got rejected, they found alternatives and helped us reapply. Rare dedication.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&h=80&q=80",
    name: "Rajesh Nair",
    role: "Founder, TechBridge Solutions",
  },
  {
    text: "Found 4 women-specific schemes I qualified for. Fast, professional and always available.",
    image: "https://images.unsplash.com/photo-1611432579699-484f7990b127?auto=format&fit=crop&w=80&h=80&q=80",
    name: "Ananya Deshmukh",
    role: "Director, GreenLeaf Exports",
  },
  {
    text: "ICS AI tool showed me 6 schemes I never knew existed. Thank you!",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=80&h=80&q=80",
    name: "Vikram Patel",
    role: "CEO, Patel Agritech Pvt Ltd",
  },
  {
    text: "Tried applying myself for 3 months and failed. ICS got it approved in 3 weeks.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&h=80&q=80",
    name: "Meera Iyer",
    role: "Co-Founder, UrbanCraft Studio",
  },
  {
    text: "No false promises, just honest guidance. That trust is rare in this space.",
    image: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?auto=format&fit=crop&w=80&h=80&q=80",
    name: "Kavita Reddy",
    role: "Managing Partner, Reddy & Associates",
  },
  {
    text: "Found 4 schemes for my startup in minutes. MUDRA loan approved in 7 weeks.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&h=80&q=80",
    name: "Arjun Mehta",
    role: "Founder, QuickServe Logistics",
  },
  {
    text: "Government portals were a nightmare for me. ICS handled everything and kept me updated every 3 days.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&h=80&q=80",
    name: "Sneha Kulkarni",
    role: "Owner, Kulkarni Textiles",
  },
  {
    text: "Government websites confused me for months. ICS matched me to 5 schemes in 10 mins and updated me twice a week till disbursal. Finally felt in control.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
    name: "Rohan Gupta",
    role: "MD, Gupta Manufacturing",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="bg-transparent py-24 border-t border-zinc-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center"
        >

          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight mb-6">
            What our clients say
          </h2>
          <p className="font-sans text-sm text-zinc-500 leading-relaxed opacity-75 max-w-md">
            See how startups, MSMEs, and business founders have benefited from our funding guidance, scheme support, and strategic consultancy services.
          </p>
        </motion.div>

        {/* Scrolling testimonial columns with dynamic fading mask */}
        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={22} className="w-full max-w-xs" />
          <TestimonialsColumn testimonials={secondColumn} duration={26} className="hidden md:block w-full max-w-xs" />
          <TestimonialsColumn testimonials={thirdColumn} duration={24} className="hidden lg:block w-full max-w-xs" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
