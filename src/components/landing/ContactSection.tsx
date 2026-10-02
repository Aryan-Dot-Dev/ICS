import { useState } from "react";
import { CheckCircle, PhoneCall, Mail } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import ClickSpark from "../ui/ClickSpark";
import { submitCallbackLead } from "../../lib/leadCapture";
import { trackMetaPixelEvent } from "../../lib/metaPixel";
import { createLogger } from "../../lib/logger";

const log = createLogger("ContactSection");

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  description: string;
}

const EMPTY_CONTACT_FORM: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  description: "",
};

/** Field-level validation for the callback form. */
function validateContactField(name: string, value: string): string {
  if (name === "name") {
    if (!value.trim()) return "Full name is required";
    if (value.trim().length < 2) return "Name must be at least 2 characters";
  }
  if (name === "email") {
    if (!value.trim()) return "Email address is required";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      return "Please enter a valid email address";
    }
  }
  if (name === "phone") {
    if (!value.trim()) return "Phone number is required";
    if (!/^[+0-9\s-]{8,20}$/.test(value)) return "Please enter a valid phone number (8-20 digits)";
  }
  if (name === "company" && !value.trim()) return "Company name is required";
  if (name === "description" && !value.trim()) return "Business summary is required";
  return "";
}

function validateContactForm(form: ContactFormValues): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const field of ["name", "email", "phone", "company", "description"] as const) {
    const msg = validateContactField(field, form[field]);
    if (msg) errors[field] = msg;
  }
  return errors;
}

/**
 * Landing-page "Contact Us" section: contact channels + callback request
 * form. Owns its own form state, validation and lead submission — extracted
 * from LandingPage so the page composes sections instead of embedding a
 * stateful form.
 */
export function ContactSection() {
  const [contactData, setContactData] = useState<ContactFormValues>(EMPTY_CONTACT_FORM);
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
    const errorMsg = validateContactField(name, value);
    setContactErrors((prev) => {
      const next = { ...prev };
      if (errorMsg) next[name] = errorMsg;
      else delete next[name];
      return next;
    });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateContactForm(contactData);
    setContactErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      // Contact lead capture is fire-and-forget and must never block the
      // success state (single implementation lives in lib/leadCapture).
      submitCallbackLead({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        company: contactData.company,
        description: contactData.description,
      });

      setIsContactSubmitted(true);

      // Fire Meta Pixel Contact event
      trackMetaPixelEvent("Contact", {
        content_name: "Request Callback Form",
        company: contactData.company.trim(),
      });

      setTimeout(() => {
        setIsContactSubmitted(false);
        setContactData(EMPTY_CONTACT_FORM);
        setContactErrors({});
      }, 10000);
    } catch (error) {
      log.error("callback lead submission failed", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact-section" className="px-6 md:px-12 lg:px-20 py-16 lg:py-24 bg-zinc-50 border-t border-zinc-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
            Speak with funding advisors today
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Contact Channels */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:gap-6">
            {/* Phone */}
            <div className="flex-1 bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col justify-between min-h-[160px] hover:border-black transition-colors duration-300 group cursor-pointer text-left">
              <div>
                <PhoneCall size={28} strokeWidth={1.5} className="text-black mb-4" />
                <h3 className="font-sans text-base font-bold text-black mb-1">Call Direct</h3>
                <p className="font-sans text-xs text-zinc-500">Immediate priority line for urgent institutional inquiries.</p>
              </div>
              <p className="font-sans text-base font-extrabold text-black mt-4 tracking-wide">
                +91 8447198483
              </p>
            </div>

            {/* Email */}
            <div className="flex-1 bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col justify-between min-h-[160px] hover:border-black transition-colors duration-300 group cursor-pointer text-left">
              <div>
                <Mail size={28} strokeWidth={1.5} className="text-black mb-4" />
                <h3 className="font-sans text-base font-bold text-black mb-1">Email Advisors</h3>
                <p className="font-sans text-xs text-zinc-500">Submit detailed documentation or formal funding requests.</p>
              </div>
              <p className="font-sans text-base font-extrabold text-black mt-4 underline decoration-1 underline-offset-4 tracking-wide">
                support@infou.in
              </p>
            </div>
          </div>

          {/* Right Column: Callback Request Form */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 text-left h-fit shadow-sm">
            <div className="mb-6">
              <h3 className="font-sans text-xl font-bold text-black mb-2">
                Request a Callback
              </h3>
              <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                Our senior evaluation analysts review all callback inquiries within 4 hours during market trading cycles.
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="contact-name" className="font-sans text-[9px] font-bold tracking-widest uppercase text-zinc-500 select-none">
                    Full Name
                  </Label>
                  <Input
                    required
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={contactData.name}
                    onChange={handleContactChange}
                    className={`font-sans text-xs placeholder:text-zinc-300 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg h-10 ${contactErrors.name ? "border-red-500 focus-visible:ring-red-100" : ""}`}
                  />
                  {contactErrors.name && (
                    <span className="text-[10px] font-semibold text-red-500 block mt-0.5">
                      {contactErrors.name}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="contact-email" className="font-sans text-[9px] font-bold tracking-widest uppercase text-zinc-500 select-none">
                    Email Address
                  </Label>
                  <Input
                    required
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={contactData.email}
                    onChange={handleContactChange}
                    className={`font-sans text-xs placeholder:text-zinc-300 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg h-10 ${contactErrors.email ? "border-red-500 focus-visible:ring-red-100" : ""}`}
                  />
                  {contactErrors.email && (
                    <span className="text-[10px] font-semibold text-red-500 block mt-0.5">
                      {contactErrors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="contact-phone" className="font-sans text-[9px] font-bold tracking-widest uppercase text-zinc-500 select-none">
                    Phone Number
                  </Label>
                  <Input
                    required
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 99999 99999"
                    value={contactData.phone}
                    onChange={handleContactChange}
                    className={`font-sans text-xs placeholder:text-zinc-300 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg h-10 ${contactErrors.phone ? "border-red-500 focus-visible:ring-red-100" : ""}`}
                  />
                  {contactErrors.phone && (
                    <span className="text-[10px] font-semibold text-red-500 block mt-0.5">
                      {contactErrors.phone}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="contact-company" className="font-sans text-[9px] font-bold tracking-widest uppercase text-zinc-500 select-none">
                    Company Name
                  </Label>
                  <Input
                    required
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Institutional Ltd."
                    value={contactData.company}
                    onChange={handleContactChange}
                    className={`font-sans text-xs placeholder:text-zinc-300 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg h-10 ${contactErrors.company ? "border-red-500 focus-visible:ring-red-100" : ""}`}
                  />
                  {contactErrors.company && (
                    <span className="text-[10px] font-semibold text-red-500 block mt-0.5">
                      {contactErrors.company}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="contact-description" className="font-sans text-[9px] font-bold tracking-widest uppercase text-zinc-500 select-none">
                  Business & Funding Requirements
                </Label>
                <Textarea
                  required
                  id="contact-description"
                  name="description"
                  placeholder="Briefly describe your current business stage and funding requirements..."
                  rows={3}
                  value={contactData.description}
                  onChange={handleContactChange}
                  className={`font-sans text-xs placeholder:text-zinc-300 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg min-h-[100px] resize-none ${contactErrors.description ? "border-red-500 focus-visible:ring-red-100" : ""}`}
                />
                {contactErrors.description && (
                  <span className="text-[10px] font-semibold text-red-500 block mt-0.5">
                    {contactErrors.description}
                  </span>
                )}
              </div>

              <div className="pt-2">
                <ClickSpark sparkColor="#ea580c" sparkRadius={20} sparkCount={8} duration={400} className="w-full" style={{ display: "block", width: "100%" }}>
                  <Button
                    type="submit"
                    className="w-full bg-[#ea580c] text-white hover:bg-[#ea580c]/90 transition-colors h-11 text-xs font-bold tracking-widest uppercase rounded-lg select-none active:scale-[0.99] duration-105 cursor-pointer flex items-center justify-center"
                  >
                    Send Request
                  </Button>
                </ClickSpark>
              </div>

              {isContactSubmitted && (
                <div className="flex items-center justify-center gap-2 text-zinc-800 text-[10px] font-bold tracking-wider uppercase bg-zinc-50 border border-zinc-200 py-3 rounded-lg">
                  <CheckCircle size={12} className="text-black shrink-0" />
                  Request Sent. An advisor will contact you shortly.
                </div>
              )}

              <p className="font-sans text-[10px] text-zinc-500 text-center italic mt-2">
                By submitting, you agree to our sovereign data encryption and privacy standards.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
