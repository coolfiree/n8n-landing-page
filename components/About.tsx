"use client";

/* ========================================
   ABOUT SECTION
   Portrait + Bio layout
   ======================================== */

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-section-alt transition-colors duration-300">
      <div className="container-main px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left - Portrait */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Main Photo Container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl">
                {/* Placeholder for photo - abstract profile visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Abstract avatar */}
                    <div className="w-48 h-48 rounded-full bg-linear-to-br from-primary-100 to-purple-100 dark:from-primary-900/50 dark:to-purple-900/50 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-linear-to-br from-primary-200 to-purple-200 dark:from-primary-800/50 dark:to-purple-800/50 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-linear-to-br from-primary-400 to-purple-400 flex items-center justify-center text-white text-5xl font-bold">
                          V
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative grid overlay */}
                <div className="absolute inset-0 bg-grid opacity-20" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 animate-float">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-black dark:text-gray-100">50+</p>
                    <p className="text-xs text-gray-800 dark:text-gray-400">Projects delivered</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-primary-500/10 -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-purple-500/10 -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="section-label">
              <span>About me</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-gray-100 leading-tight">
              Hi, I&apos;m Vishnu. I simplify complex workflows with{" "}
              <span className="gradient-text">AI and automation</span>.
            </h2>

            <div className="space-y-4 text-gray-800 dark:text-gray-400 leading-relaxed">
              <p>
                I&apos;m an automation developer who loves turning messy, manual processes 
                into clean, reliable workflows. I design systems that handle repetitive 
                tasks, improve customer experience, and reduce chaos in your operations.
              </p>
              <p>
                I focus on practical AI, n8n workflows, and measurable business outcomes. 
                No over-engineered solutions — just automations that work and save you time.
              </p>
            </div>

            {/* Focus Points */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-black dark:text-gray-100 mb-4">What I focus on</p>
              <div className="space-y-3">
                {[
                  "Practical automation that delivers ROI",
                  "AI assistants with guardrails and fallbacks",
                  "Clear documentation & smooth handover",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 dark:text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6">
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}