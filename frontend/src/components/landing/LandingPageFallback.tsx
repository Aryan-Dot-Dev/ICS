/**
 * Landing page skeleton shown while the landing chunk lazy-loads.
 *
 * Extracted from App.tsx (routing shell) so the router only routes —
 * presentational marketing markup lives here.
 */
export function LandingPageFallback() {
  return (
    <div className="w-full">
      <section className="px-6 py-2 overflow-hidden rounded-xl bg-white min-h-screen flex items-center relative">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl border border-zinc-200/50 pointer-events-none">
          <div className="absolute inset-0 bg-secondary/20 animate-pulse" />
          <div
            className="absolute inset-0 pointer-events-none opacity-45"
            style={{
              backgroundImage: `radial-gradient(oklch(0.55 0.03 38) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-16 z-10 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 items-center">
            <div className="col-span-1 lg:col-span-3 order-2 lg:order-1 flex justify-center items-center">
              <div className="w-full max-w-[160px] lg:max-w-none aspect-[205/139] bg-zinc-50 border border-zinc-100 rounded-2xl opacity-70 animate-pulse" />
            </div>

            <div className="col-span-2 lg:col-span-6 order-1 lg:order-2 text-center flex flex-col items-center justify-center">
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#ea580c] mb-4 block select-none">
                Introducing
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] text-center">
                AI Funding Search Engine for <span className="text-[#ea580c]">Businesses</span>
              </h1>
              <p className="mt-6 text-lg text-zinc-505 leading-relaxed text-center max-w-xl mx-auto">
                Check which Indian government schemes you may qualify for. Our AI engine matches your profile against a verified, source-linked scheme knowledge base.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 select-none opacity-50">
                <div className="flex items-center gap-1.5">
                  <span className="font-sans text-base md:text-lg font-bold text-zinc-900 leading-none">4.6</span>
                  <div className="flex items-center -space-x-0.5">
                    <div className="w-[18px] h-[18px] rounded bg-zinc-200 animate-pulse" />
                    <div className="w-[18px] h-[18px] rounded bg-zinc-200 animate-pulse" />
                    <div className="w-[18px] h-[18px] rounded bg-zinc-200 animate-pulse" />
                    <div className="w-[18px] h-[18px] rounded bg-zinc-200 animate-pulse" />
                    <div className="w-[18px] h-[18px] rounded bg-zinc-200 animate-pulse" />
                  </div>
                </div>
                <div className="w-[1px] h-4 bg-zinc-200 hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-zinc-200 animate-pulse border-2 border-white" />
                    <div className="w-7 h-7 rounded-full bg-zinc-200 animate-pulse border-2 border-white" />
                    <div className="w-7 h-7 rounded-full bg-zinc-200 animate-pulse border-2 border-white" />
                    <div className="w-7 h-7 rounded-full bg-zinc-200 animate-pulse border-2 border-white" />
                  </div>
                  <span className="font-sans text-xs md:text-sm text-zinc-400 font-medium leading-none">
                    Based on trusted businesses
                  </span>
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <div className="bg-foreground/10 rounded-[14px] border border-zinc-200/50 p-0.5">
                  <div className="rounded-xl px-6 py-4 text-xs font-bold tracking-widest uppercase bg-black text-white opacity-80 animate-pulse">
                    Start for Free
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-3 order-3 lg:order-3 flex justify-center items-center">
              <div className="w-full max-w-[160px] lg:max-w-none aspect-[205/139] bg-zinc-50 border border-zinc-100 rounded-2xl opacity-70 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
