import React, { useState, useEffect } from "react";
import { X, CheckCircle, Copy, Check } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import ClickSpark from "./ui/ClickSpark";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: "manual_click" | "random_popup";
  onSubmitSuccess?: (payload: any) => void;
}

export function AssessmentModal({ isOpen, onClose, source, onSubmitSuccess }: AssessmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    businessDescription: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedPayload, setGeneratedPayload] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        businessType: "",
        businessDescription: ""
      });
      setErrors({});
      setIsSuccess(false);
      setGeneratedPayload(null);
      setIsCopied(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Corporate email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (!/^[+0-9\s-]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid contact number";
    }

    if (!formData.businessName.trim()) newErrors.businessName = "Business/Company name is required";
    if (!formData.businessType) newErrors.businessType = "Please select a business vertical";
    if (!formData.businessDescription.trim()) newErrors.businessDescription = "Business summary is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API payload packaging
    setTimeout(() => {
      const payload = {
        timestamp: new Date().toISOString(),
        source: source,
        formId: `audit_${Math.random().toString(36).substring(2, 11)}`,
        data: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          businessName: formData.businessName.trim(),
          businessType: formData.businessType,
          businessDescription: formData.businessDescription.trim()
        }
      };

      console.log("[INFOU API PAYLOAD PREPARED]", payload);
      setGeneratedPayload(JSON.stringify(payload, null, 2));
      setIsSubmitting(false);
      setIsSuccess(true);

      if (onSubmitSuccess) {
        onSubmitSuccess(payload);
      }
    }, 800);
  };

  const copyToClipboard = () => {
    if (generatedPayload) {
      navigator.clipboard.writeText(generatedPayload);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in-0 duration-200">
      {/* Click outside to close (disabled for form integrity, close button is explicit) */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[90vh] z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header Banner */}
        <div className="border-b border-zinc-150 px-6 py-5 flex items-center justify-between bg-zinc-50">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase block mb-1">
              Sovereign Diagnostics
            </span>
            <h2 className="font-sans text-lg font-extrabold text-black">
              {isSuccess ? "Assessment Payload Ready" : "Start Free Assessment"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-zinc-200 text-zinc-400 hover:text-black hover:bg-zinc-100 transition-colors"
            title="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content Area */}
        <div 
          className="overflow-y-auto overflow-x-hidden px-6 md:px-8 pt-6 md:pt-8 pb-12 md:pb-16 flex-grow"
          style={{ scrollbarGutter: "stable" }}
        >
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-zinc-500 font-sans text-xs leading-relaxed">
                Provide your corporate parameters below to compile the eligibility schema required for state and central institutional funding channels.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5 text-left">
                  <Label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="e.g. Vikram Sharma"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`rounded-lg border-zinc-200 focus-visible:ring-black/20 ${
                      errors.name ? "border-red-500 focus-visible:ring-red-100" : ""
                    }`}
                  />
                  {errors.name && <span className="text-[10px] font-semibold text-red-500">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1.5 text-left">
                  <Label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
                    Corporate Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e.g. v.sharma@company.in"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`rounded-lg border-zinc-200 focus-visible:ring-black/20 ${
                      errors.email ? "border-red-500 focus-visible:ring-red-100" : ""
                    }`}
                  />
                  {errors.email && <span className="text-[10px] font-semibold text-red-500">{errors.email}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1.5 text-left">
                  <Label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`rounded-lg border-zinc-200 focus-visible:ring-black/20 ${
                      errors.phone ? "border-red-500 focus-visible:ring-red-100" : ""
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] font-semibold text-red-500">{errors.phone}</span>}
                </div>

                {/* Business Name */}
                <div className="space-y-1.5 text-left">
                  <Label htmlFor="businessName" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
                    Business Name
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    placeholder="e.g. Infotech Systems Ltd"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className={`rounded-lg border-zinc-200 focus-visible:ring-black/20 ${
                      errors.businessName ? "border-red-500 focus-visible:ring-red-100" : ""
                    }`}
                  />
                  {errors.businessName && (
                    <span className="text-[10px] font-semibold text-red-500">{errors.businessName}</span>
                  )}
                </div>
              </div>

              {/* Business Type Selector */}
              <div className="space-y-1.5 text-left">
                <Label htmlFor="businessType" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
                  Business Vertical
                </Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(val) => {
                    setFormData((prev) => ({ ...prev, businessType: val }));
                    if (errors.businessType) {
                      setErrors((prev) => {
                        const next = { ...prev };
                        delete next.businessType;
                        return next;
                      });
                    }
                  }}
                >
                  <SelectTrigger
                    id="businessType"
                    className={`w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-black shadow-xs outline-none focus:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 h-10 cursor-pointer ${
                      errors.businessType ? "border-red-500" : ""
                    }`}
                  >
                    <SelectValue placeholder="Select business sector" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-zinc-250 text-black">
                    <SelectItem value="Technology">Technology & SaaS</SelectItem>
                    <SelectItem value="Manufacturing">Heavy Manufacturing & PLI</SelectItem>
                    <SelectItem value="Renewable Energy">Renewable Energy & Infrastructure</SelectItem>
                    <SelectItem value="Healthcare">Healthcare & Biotech</SelectItem>
                    <SelectItem value="Agriculture">Agri-tech & Rural Development</SelectItem>
                    <SelectItem value="Services">Professional Services & Consulting</SelectItem>
                    <SelectItem value="Other">Other Enterprise Sector</SelectItem>
                  </SelectContent>
                </Select>
                {errors.businessType && (
                  <span className="text-[10px] font-semibold text-red-500 block">{errors.businessType}</span>
                )}
              </div>

              {/* Business Description */}
              <div className="space-y-1.5 text-left">
                <Label htmlFor="businessDescription" className="text-[11px] font-bold uppercase tracking-wider text-zinc-700">
                  Business & Funding Goals Description
                </Label>
                <Textarea
                  id="businessDescription"
                  name="businessDescription"
                  rows={3}
                  placeholder="Outline your primary operations, expansion roadmap, and what funding schemes you seek (e.g. central capital subsidy, technology development grants)."
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  className={`rounded-lg border-zinc-200 focus-visible:ring-black/20 ${
                    errors.businessDescription ? "border-red-500 focus-visible:ring-red-100" : ""
                  }`}
                />
                {errors.businessDescription && (
                  <span className="text-[10px] font-semibold text-red-500">{errors.businessDescription}</span>
                )}
              </div>

              {/* Submit button */}
              <ClickSpark sparkColor="#fff" sparkRadius={20} sparkCount={8} duration={400} className="w-full" style={{ display: "block", width: "100%" }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-3.5 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-zinc-800 transition-colors active:scale-99 duration-100 cursor-pointer flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Compiling Diagnostic...
                    </>
                  ) : (
                    "Compile Eligibility Diagnostic"
                  )}
                </button>
              </ClickSpark>
            </form>
          ) : (
            <div className="text-center py-4 space-y-5 animate-in fade-in-0 duration-200">
              <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-zinc-100 text-black border border-zinc-200 flex items-center justify-center rounded-full mb-3">
                  <CheckCircle size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-sans text-base font-bold text-black uppercase tracking-wider">
                  Diagnostic Form Serialized
                </h3>
                <p className="text-zinc-500 font-sans text-xs max-w-sm mt-1 leading-relaxed">
                  Your assessment parameters have been successfully validated and packaged. Below is the ready-to-wire API JSON payload.
                </p>
              </div>

              {/* JSON codeblock display */}
              <div className="relative group text-left max-w-lg mx-auto">
                <div className="absolute right-3 top-3 z-25 flex items-center gap-1.5">
                  <button
                    onClick={copyToClipboard}
                    className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all flex items-center gap-1 text-[10px] font-mono cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {isCopied ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-400">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>COPY JSON</span>
                      </>
                    )}
                  </button>
                </div>
                
                <div className="w-full text-[10px] font-mono tracking-widest text-zinc-600 bg-zinc-950 px-4 py-2 border-t border-x border-zinc-850 rounded-t-xl select-none flex justify-between items-center">
                  <span>API PAYLOAD SPEC v1.0</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                    READY
                  </span>
                </div>
                <pre className="bg-zinc-950 text-zinc-300 p-4 rounded-b-xl text-xs overflow-x-auto font-mono border border-zinc-850 max-h-60 overflow-y-auto selection:bg-zinc-800 selection:text-white">
                  <code>{generatedPayload}</code>
                </pre>
              </div>

              <div className="pt-2">
                <ClickSpark sparkColor="#fff" sparkRadius={20} sparkCount={8} duration={400}>
                  <button
                    onClick={onClose}
                    className="bg-black text-white px-8 py-3 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-zinc-800 transition-colors active:scale-95 duration-100 cursor-pointer"
                  >
                    Close System View
                  </button>
                </ClickSpark>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
