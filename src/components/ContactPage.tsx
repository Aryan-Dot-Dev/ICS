import React, { useState } from "react";
import { PhoneCall, Mail, MapPin, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ClickSpark from "./ui/ClickSpark";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    description: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          description: ""
        });
      }, 5000);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-6 md:px-20 pt-32 pb-12 max-w-7xl mx-auto text-left md:pt-40 md:pb-16">
        <div className="max-w-4xl">
          <h1 className="font-sans text-4xl md:text-6xl font-extrabold text-black tracking-tight leading-[1.1] max-w-2xl">
            Speak with funding advisors today
          </h1>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="px-6 md:px-20 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            {/* Phone */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between min-h-[200px] hover:border-black transition-colors duration-300 group cursor-pointer text-left">
              <div>
                <PhoneCall size={32} strokeWidth={1.5} className="text-black mb-6" />
                <h3 className="font-sans text-lg font-bold text-black mb-2">Call Direct</h3>
                <p className="font-sans text-xs text-zinc-400">Immediate priority line for urgent institutional inquiries.</p>
              </div>
              <p className="font-sans text-lg font-extrabold text-black mt-6 tracking-wide">
                +1 (800) 555-0199
              </p>
            </div>

            {/* Email */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between min-h-[200px] hover:border-black transition-colors duration-300 group cursor-pointer text-left">
              <div>
                <Mail size={32} strokeWidth={1.5} className="text-black mb-6" />
                <h3 className="font-sans text-lg font-bold text-black mb-2">Email Advisors</h3>
                <p className="font-sans text-xs text-zinc-400">Submit detailed documentation or formal funding requests.</p>
              </div>
              <p className="font-sans text-lg font-extrabold text-black mt-6 underline decoration-1 underline-offset-4 tracking-wide">
                funding@infouconsultancy.com
              </p>
            </div>

            {/* Office */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between min-h-[200px] hover:border-black transition-colors duration-300 group cursor-pointer text-left">
              <div>
                <MapPin size={32} strokeWidth={1.5} className="text-black mb-6" />
                <h3 className="font-sans text-lg font-bold text-black mb-2">Visit Office</h3>
                <p className="font-sans text-xs text-zinc-400">Headquarters for scheduled advisory board meetings.</p>
              </div>
              <p className="font-sans text-sm text-zinc-500 mt-6 leading-relaxed">
                72nd Floor, Global Finance Center<br />
                Nariman Point, Mumbai, 400021
              </p>
            </div>
          </div>

          {/* Right Column: Callback Request Form */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 text-left h-fit">
            <div className="mb-10">
              <h2 className="font-sans text-2xl font-bold text-black mb-4">
                Request a Callback
              </h2>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                Our senior evaluation analysts review all callback inquiries within 4 hours during market trading cycles.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-sans text-[10px] font-bold tracking-widest uppercase text-zinc-400 select-none">
                    Full Name
                  </Label>
                  <Input
                    required
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="font-sans text-sm placeholder:text-zinc-300 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-sans text-[10px] font-bold tracking-widest uppercase text-zinc-400 select-none">
                    Work Email
                  </Label>
                  <Input
                    required
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="font-sans text-sm placeholder:text-zinc-300 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-sans text-[10px] font-bold tracking-widest uppercase text-zinc-400 select-none">
                    Phone Number
                  </Label>
                  <Input
                    required
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 99999 99999"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="font-sans text-sm placeholder:text-zinc-300 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="font-sans text-[10px] font-bold tracking-widest uppercase text-zinc-400 select-none">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Institutional Ltd."
                    value={formData.company}
                    onChange={handleInputChange}
                    className="font-sans text-sm placeholder:text-zinc-300 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="font-sans text-[10px] font-bold tracking-widest uppercase text-zinc-400 select-none">
                  Business Description & Funding Requirements
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Briefly describe your current business stage and funding requirements..."
                  rows={5}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="font-sans text-sm placeholder:text-zinc-300 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg min-h-[140px] resize-none"
                />
              </div>

              <div className="pt-4">
                <ClickSpark sparkColor="#fff" sparkRadius={20} sparkCount={8} duration={400} className="w-full" style={{ display: "block", width: "100%" }}>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/95 transition-colors h-14 text-xs font-bold tracking-widest uppercase rounded-lg select-none active:scale-[0.99] duration-100 cursor-pointer"
                  >
                    Send Request
                  </Button>
                </ClickSpark>
              </div>

              {isSubmitted && (
                <div className="flex items-center justify-center gap-2 text-zinc-800 text-xs font-bold tracking-wider uppercase bg-zinc-50 border border-zinc-200 py-3.5 rounded-lg animate-fadeIn">
                  <CheckCircle size={14} className="text-black shrink-0" />
                  Request Sent. An evaluation analyst will call shortly.
                </div>
              )}

              <p className="font-sans text-xs text-zinc-400 text-center italic mt-4">
                By submitting, you agree to our sovereign data encryption and privacy standards.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
