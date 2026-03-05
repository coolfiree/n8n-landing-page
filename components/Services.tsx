"use client";

import { useState } from "react";

/* ========================================
   SERVICES SECTION
   Tab-based service showcase inspired by modern design
   ======================================== */

const services = [
  {
    id: "chatbots",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    tabName: "AI Chatbots",
    title: "AI Customer Support Chatbots",
    fullDescription: "Shopify, website, and WhatsApp bots that answer FAQs, track orders, and escalate to humans when needed. Built with advanced AI to understand context and provide accurate responses.",
    color: "from-yellow-400 to-amber-500",
    iconBg: "bg-yellow-500/20",
  },
  {
    id: "automation",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    tabName: "Process Automation",
    title: "Business Process Automations",
    fullDescription: "Automated workflows that connect your tools and eliminate repetitive manual tasks. Save hours every week with intelligent automation solutions.",
    color: "from-blue-400 to-cyan-500",
    iconBg: "bg-blue-500/20",
  },
  {
    id: "booking",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    tabName: "Booking Systems",
    title: "Appointment & Booking Systems",
    fullDescription: "End-to-end flows: slot selection, payments, confirmations, and reminders — all automated. Seamless booking experience for your customers.",
    color: "from-purple-400 to-pink-500",
    iconBg: "bg-purple-500/20",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const service = services[activeService];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 relative overflow-hidden transition-colors duration-300 min-h-[80vh] sm:min-h-screen flex items-center">
      {/* Background with light/dark modes */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-zinc-900 dark:via-neutral-900 dark:to-stone-900" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }} />

      <div className="container-main relative z-10 px-4 sm:px-6">
        {/* Header with badge and title */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full backdrop-blur-xl bg-amber-100/80 dark:bg-yellow-500/10 border border-amber-300/50 dark:border-yellow-500/20 mb-3 sm:mb-4">
              <svg className="w-4 h-4 text-amber-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-amber-700 dark:text-yellow-300">Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
              Our Services.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
              Outcome-focused automations and AI assistants tailored to your business needs.
            </p>
          </div>
          
          <a href="#contact" className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group self-start lg:self-center text-sm sm:text-base">
            <span>Explore More</span>
          </a>
        </div>

        {/* Active Service Content */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              {/* Service Content Card - Glass Morphism */}
              <div className="relative group">
                {/* Animated glow border effect */}
                <div className={`absolute -inset-[1px] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 rounded-3xl`} />
                
                {/* Glass card */}
                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/80 dark:from-white/10 dark:to-white/5 border border-gray-200/50 dark:border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Subtle sparkle effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full animate-shimmer" style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                      backgroundSize: '200% 100%',
                      animationDuration: '3s'
                    }} />
                  </div>

                  {/* Service Tabs - Inside card at top */}
                  <div className="relative border-b border-gray-200/50 dark:border-white/10">
                    <div className="flex gap-2 p-4 sm:p-6 overflow-x-auto scrollbar-hide">
                      {services.map((svc, index) => (
                        <button
                          key={svc.id}
                          onClick={() => setActiveService(index)}
                          className={`relative px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 overflow-hidden whitespace-nowrap flex-shrink-0 ${
                            activeService === index
                              ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg scale-105'
                              : 'bg-gray-100/80 dark:bg-white/5 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-white/10 border border-gray-300/50 dark:border-white/10'
                          }`}
                        >
                          <span className="flex items-center gap-1.5 relative z-10">
                            <span className={`text-[10px] ${activeService === index ? 'opacity-100' : 'opacity-70'}`}>
                              {svc.icon}
                            </span>
                            {svc.tabName}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4 sm:space-y-6 p-6 sm:p-8">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight drop-shadow-lg">
                        {service.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                        {service.fullDescription}
                      </p>
                    </div>

                    <button className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base">
                      <span>Let's Chat</span>
                      <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
                      </svg>
                    </button>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-4 right-4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="hidden lg:block relative max-w-sm mx-auto lg:ml-auto lg:mr-0">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] backdrop-blur-xl bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-white/5 dark:to-white/10 border border-gray-200/50 dark:border-white/10 shadow-2xl">
                {/* Grid overlay effect */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="border border-white/5" />
                  ))}
                </div>
                
                {/* Gradient glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 mix-blend-overlay`} />
                
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${service.color} opacity-30 blur-3xl`} />
                  <div className={`absolute w-20 h-20 rounded-2xl backdrop-blur-xl ${service.iconBg} border border-white/20 flex items-center justify-center shadow-2xl`}>
                    <div className="scale-150 text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Animated particles */}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-yellow-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}