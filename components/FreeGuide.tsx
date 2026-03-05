"use client";

/* ========================================
   FREE GUIDE / LEAD MAGNET SECTION
   ======================================== */

export default function FreeGuide() {
  return (
    <section className="py-16 md:py-24 bg-gradient-section relative overflow-hidden transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 dark:bg-primary-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-10" />
      
      <div className="container-main relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-primary-100 dark:border-primary-800 shadow-sm">
              <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Free resource</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-gray-100 leading-tight">
              Top 5 workflows every small business should automate in 2025
            </h2>

            <p className="text-lg text-gray-800 dark:text-gray-400 leading-relaxed">
              A practical guide with real examples of customer support bots, booking flows, 
              payment reminders, and automated reports. No fluff, just actionable blueprints.
            </p>

            {/* What's inside */}
            <div className="space-y-3 pt-2">
              {[
                "Customer support automation blueprint",
                "Booking & scheduling workflow",
                "Payment reminder sequences",
                "Daily reporting automations",
                "Lead capture & nurture flows",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#" className="btn-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Get the guide</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium group">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Send it to me on WhatsApp instead</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Guide Mockup */}
          <div className="relative">
            <div className="relative max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              {/* Main Guide Card */}
              <div className="relative glass-card rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                {/* Header */}
                <div className="bg-linear-to-br from-primary-600 to-purple-600 p-8 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white/80">2025 Edition</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">
                    Automation Playbook
                  </h3>
                  <p className="text-sm text-white/70 mt-2">
                    5 workflows for small businesses
                  </p>
                </div>

                {/* Content Preview */}
                <div className="p-6 space-y-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-semibold text-sm shrink-0">
                        {num}
                      </div>
                      <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full" />
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        V
                      </div>
                      <span className="text-xs text-gray-800 dark:text-gray-400">by Vishnu</span>
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-500">Free Download</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200/50 dark:bg-primary-800/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200/50 dark:bg-purple-800/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}