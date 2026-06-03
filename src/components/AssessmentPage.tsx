import React, { useState, useEffect, useTransition } from "react";
import { CheckCircle, Copy, Check, X, ShieldAlert, Award, FileSpreadsheet, PlayCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import ClickSpark from "./ui/ClickSpark";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import illustration from "../notion_illustration.png";


export function AssessmentPage() {
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

  // Recommendation states
  const [recommendations, setRecommendations] = useState<any[] | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [showPayload, setShowPayload] = useState(false);
  const [requestPayload, setRequestPayload] = useState<string | null>(null);

  // Load results from sessionStorage if redirected from auto-popup submit
  useEffect(() => {
    const cachedResults = sessionStorage.getItem("infou_assessment_results");
    if (cachedResults) {
      try {
        const payloadData = JSON.parse(cachedResults);
        if (payloadData.recommendations) {
          setRecommendations(payloadData.recommendations || []);
          setGeneratedPayload(JSON.stringify(payloadData.recommendations, null, 2));
          if (payloadData.originalFormData) {
            setFormData(payloadData.originalFormData);
          }
        } else {
          setRecommendations(payloadData || []);
          setGeneratedPayload(JSON.stringify(payloadData, null, 2));
        }
        setIsSuccess(true);
        // Clear immediately so a page reload resets if desired
        sessionStorage.removeItem("infou_assessment_results");
      } catch (err) {
        console.error("Failed to parse cached recommendations", err);
      }
    }
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setApiError(null);

    const payload = {
      timestamp: new Date().toISOString(),
      source: "manual_click",
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

    const reqJson = JSON.stringify(payload, null, 2);
    setRequestPayload(reqJson);

    try {
      const response = await fetch("/api/recommend-schemes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: reqJson
      });

      if (!response.ok) {
        let errorMsg = `HTTP Error ${response.status}`;
        try {
          const errData = await response.json();
          if (errData && errData.detail) {
            errorMsg = errData.detail;
          }
        } catch (_) {}
        throw new Error(errorMsg);
      }

      const resData = await response.json();
      setRecommendations(resData.recommendations || []);
      setGeneratedPayload(JSON.stringify(resData, null, 2));
      setIsSuccess(true);
    } catch (error: any) {
      console.error("[INFOU PAGE RECOMMEND FAILED]", error);
      setApiError(error.message || "Unable to establish connection to the local funding advisory database.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="font-sans text-xl font-extrabold text-black mb-1">
            Free Advisory Diagnostic
          </h2>
          <p className="text-zinc-400 font-sans text-xs leading-relaxed">
            Provide your corporate details below to run our policy matching matrix.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2 text-left">
            <Label htmlFor="name" className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-zinc-400">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="e.g. Vikram Sharma"
              value={formData.name}
              onChange={handleInputChange}
              className={`h-12 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg text-sm ${
                errors.name ? "border-red-500 focus-visible:ring-red-100" : ""
              }`}
            />
            {errors.name && <span className="text-[10px] font-semibold text-red-500">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="space-y-2 text-left">
            <Label htmlFor="email" className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-zinc-400">
              Corporate Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="e.g. v.sharma@company.in"
              value={formData.email}
              onChange={handleInputChange}
              className={`h-12 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg text-sm ${
                errors.email ? "border-red-500 focus-visible:ring-red-100" : ""
              }`}
            />
            {errors.email && <span className="text-[10px] font-semibold text-red-500">{errors.email}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="space-y-2 text-left">
            <Label htmlFor="phone" className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-zinc-400">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={handleInputChange}
              className={`h-12 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg text-sm ${
                errors.phone ? "border-red-500 focus-visible:ring-red-100" : ""
              }`}
            />
            {errors.phone && <span className="text-[10px] font-semibold text-red-500">{errors.phone}</span>}
          </div>

          {/* Business Name */}
          <div className="space-y-2 text-left">
            <Label htmlFor="businessName" className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-zinc-400">
              Business Name
            </Label>
            <Input
              id="businessName"
              name="businessName"
              placeholder="e.g. Infotech Systems Ltd"
              value={formData.businessName}
              onChange={handleInputChange}
              className={`h-12 border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg text-sm ${
                errors.businessName ? "border-red-500 focus-visible:ring-red-100" : ""
              }`}
            />
            {errors.businessName && (
              <span className="text-[10px] font-semibold text-red-500">{errors.businessName}</span>
            )}
          </div>
        </div>

        {/* Business Type Selector */}
        <div className="space-y-2 text-left">
          <Label htmlFor="businessType" className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-zinc-400">
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
              className={`w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-black shadow-xs outline-none focus:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 h-12 cursor-pointer ${
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
        <div className="space-y-2 text-left">
          <Label htmlFor="businessDescription" className="font-sans text-[10px] font-extrabold tracking-widest uppercase text-zinc-400">
            Business & Funding Goals Description
          </Label>
          <Textarea
            id="businessDescription"
            name="businessDescription"
            rows={4}
            placeholder="Outline your primary operations, expansion roadmap, and what funding schemes you seek."
            value={formData.businessDescription}
            onChange={handleInputChange}
            className={`rounded-lg border-zinc-200 focus-visible:ring-black/20 focus-visible:border-black rounded-lg text-sm min-h-[120px] resize-none ${
              errors.businessDescription ? "border-red-500 focus-visible:ring-red-100" : ""
            }`}
          />
          {errors.businessDescription && (
            <span className="text-[10px] font-semibold text-red-500">{errors.businessDescription}</span>
          )}
        </div>

        {/* Submit button */}
        <div className="pt-4">
          <ClickSpark sparkColor="#fff" sparkRadius={20} sparkCount={8} duration={400} className="w-full" style={{ display: "block", width: "100%" }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-4 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-zinc-800 transition-all duration-100 cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Running Advisory Matrix...
                </>
              ) : (
                "Compile Eligibility Diagnostic"
              )}
            </button>
          </ClickSpark>
        </div>
      </form>
    );
  };

  const renderResults = () => {
    return (
      <div className="space-y-8 animate-in fade-in-0 duration-200">
        {/* Header Info */}
        <div className="border-b border-zinc-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 block mb-1 font-sans">
              Diagnostic Analysis Complete
            </span>
            <h3 className="font-sans text-2xl font-extrabold text-black tracking-tight">
              Matched Sovereign Funding Schemes
            </h3>
            <p className="text-zinc-500 font-sans text-sm mt-1 leading-relaxed max-w-xl">
              Our policy matrix has mapped your business profile against 130+ central and state policies to identify key allocations.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-emerald-50 text-emerald-700 border border-emerald-250 rounded-full px-4 py-2 flex items-center gap-2 text-xs font-bold font-sans">
              <CheckCircle size={14} className="text-emerald-600" />
              {recommendations?.length || 0} Matches Found
            </div>
          </div>
        </div>

        {/* Recommendations List */}
        {isSubmitting ? (
          <div className="flex flex-col items-center justify-center py-16 space-y-4">
            <span className="w-8 h-8 border-4 border-zinc-250 border-t-black rounded-full animate-spin" />
            <p className="text-zinc-400 font-sans text-xs">Re-evaluating sovereign policy matching matrix...</p>
          </div>
        ) : recommendations && recommendations.length > 0 ? (
          <div className="space-y-6">
            {recommendations.map((rec: any, idx: number) => (
              <div key={idx} className="bg-white border border-zinc-200 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-sm hover:border-black hover:shadow-md transition-all duration-300 text-left">
                <div className="space-y-3">
                  {/* Ministry and confidence level */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-150 pb-2">
                    <span className="text-[9px] font-extrabold tracking-widest text-zinc-400 uppercase max-w-[70%] truncate font-sans" title={rec.ministry}>
                      {rec.ministry || "Ministry of Commerce & Industry"}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[8px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                        rec.confidence === "high" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                        rec.confidence === "medium" ? "bg-amber-50 text-amber-700 border border-amber-200" :
                        "bg-zinc-100 text-zinc-700 border border-zinc-200"
                      }`}>
                        {rec.confidence} Match
                      </span>
                      {rec.relevanceScore && (
                        <span className="text-[10px] font-extrabold text-black font-sans bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded-md">
                          {(rec.relevanceScore * 100).toFixed(0)}% Match
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Scheme Name */}
                  <h4 className="font-sans text-base font-extrabold text-black tracking-tight leading-tight">
                    {rec.schemeName}
                  </h4>

                  {/* Scheme Description */}
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    {rec.schemeDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-zinc-200 rounded-xl text-zinc-400 text-xs font-sans">
            No matching schemes were found for your business profile at this time.
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-zinc-50 pt-32 pb-24 flex items-start justify-center">
      <div className="w-full px-6 transition-all duration-500 ease-in-out max-w-7xl">
        {apiError ? (
          <div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 text-left shadow-xs">
            <div className="space-y-6 animate-in fade-in-0 duration-200">
              <div className="flex flex-col items-center justify-center text-center py-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 border border-red-100 flex items-center justify-center rounded-full mb-3 shadow-xs">
                  <X size={24} strokeWidth={2} />
                </div>
                <h3 className="font-sans text-lg font-extrabold text-black uppercase tracking-wider">
                  Advisory Database Offline
                </h3>
                <p className="text-zinc-500 font-sans text-xs max-w-sm mt-1 leading-relaxed">
                  The recommendations service returned the following diagnostic warning:
                </p>
                <div className="bg-red-50/50 border border-red-200 text-red-800 rounded-xl px-4 py-3.5 text-xs leading-relaxed max-w-lg mt-4 font-sans w-full text-center">
                  {apiError}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase text-center">
                  Packaged Request Schema (Ready to wire)
                </p>
                {requestPayload && (
                  <div className="relative group text-left max-w-xl mx-auto">
                    <div className="absolute right-3 top-3 z-25">
                      <button
                        onClick={() => copyToClipboard(requestPayload)}
                        className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all flex items-center gap-1 text-[10px] font-mono cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check size={12} className="text-emerald-400" />
                            <span className="text-emerald-400">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>COPY Request JSON</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="w-full text-[10px] font-mono tracking-widest text-zinc-600 bg-zinc-950 px-4 py-2 border-t border-x border-zinc-850 rounded-t-xl select-none">
                      API REQUEST SCHEME SPEC v1.0
                    </div>
                    <pre className="bg-zinc-950 text-zinc-300 p-4 rounded-b-xl text-[10px] overflow-x-auto font-mono border border-zinc-850 max-h-52 overflow-y-auto w-full">
                      <code>{requestPayload}</code>
                    </pre>
                  </div>
                )}
              </div>

              <div className="pt-4 flex justify-center">
                <ClickSpark sparkColor="#000" sparkRadius={20} sparkCount={8} duration={350}>
                  <button
                    onClick={() => {
                      setApiError(null);
                      setIsSuccess(false);
                    }}
                    className="border border-zinc-200 text-black px-10 py-4 text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-zinc-50 transition-colors active:scale-95 duration-100 cursor-pointer"
                  >
                    Retry Diagnostics Form
                  </button>
                </ClickSpark>
              </div>
            </div>
          </div>
        ) : !isSuccess ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-in fade-in-0 duration-200">
            {/* Left column: Title, subtitle, and Notion illustration */}
            <div className="lg:col-span-5 text-left flex flex-col justify-center space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 block mb-2 font-sans">
                  Sovereign Funding Diagnostic
                </span>
                <h1 className="font-sans text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight">
                  Find Your Eligible Government Schemes
                </h1>
                <p className="text-zinc-500 font-sans text-sm mt-3 leading-relaxed">
                  Assess your corporate structure and expansion goals against 130+ central and state policies to claim dynamic capital allocations in minutes.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <img
                  src={illustration}
                  alt="Government Schemes Diagnostics Illustration"
                  className="w-full max-w-[340px] md:max-w-[380px] h-auto object-contain opacity-95 select-none pointer-events-none"
                />
              </div>
            </div>
            {/* Right column: Form Card */}
            <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-2xl p-8 md:p-10 shadow-xs">
              {renderForm()}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-in fade-in-0 duration-200">
            {/* Left sticky column: Form */}
            <div className="lg:col-span-5 bg-white border border-zinc-200 rounded-2xl p-8 shadow-xs h-fit lg:sticky lg:top-32">
              {renderForm()}
            </div>
            {/* Right column: Matched schemes */}
            <div className="lg:col-span-7">
              {renderResults()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
