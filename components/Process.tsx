"use client";

import { useState } from "react";

const steps = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery call",
    description: "A 20-minute session to understand your workflow, pain points, and goals. We map out what success looks like for your automation.",
    details: [
      "Identify bottlenecks and manual tasks",
      "Define clear success metrics",
      "Outline technical requirements",
      "Set realistic timelines"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-blue-500 to-primary-500"
  },
  {
    id: "prototype",
    number: "02",
    title: "Prototype",
    description: "Within 3-7 days, you get a working demo connected to test data. This proves the concept and lets you see the automation in action.",
    details: [
      "Functional proof-of-concept",
      "Connected to test environment",
      "Core workflow implemented",
      "Ready for your feedback"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "implementation",
    number: "03",
    title: "Implementation",
    description: "We integrate the automation with your live tools, add error handling, notification systems, and security guardrails.",
    details: [
      "Production-ready integration",
      "Error handling & fallbacks",
      "Security & permissions setup",
      "Performance optimization"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "handover",
    number: "04",
    title: "Handover & support",
    description: "You get complete documentation, a walkthrough session, and 30 days of support to ensure everything runs smoothly.",
    details: [
      "Complete technical documentation",
      "Live walkthrough session",
      "30 days post-launch support",
      "Training for your team"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-orange-500 to-red-500"
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden transition-colors duration-300">
      {/* Gradient Background - Inspired by Upstream */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-teal-900 dark:from-slate-950 dark:via-blue-950 dark:to-teal-950" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Grainy texture overlay */}
      <div className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }} />
      </div>
      
      <div className="container-main relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg mb-6 relative overflow-hidden group">
            {/* Sparkle effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-full h-full animate-shimmer" style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                backgroundSize: '200% 100%'
              }} />
            </div>
            <span className="text-sm font-semibold text-white relative z-10">Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_20px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_4px_30px_rgba(255,255,255,0.5)] transition-all duration-300">
            How we&apos;ll work together
          </h2>
          <p className="text-lg text-white/90 leading-relaxed drop-shadow-[0_1px_15px_rgba(255,255,255,0.2)]">
            A clear, simple process from idea to automation.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden ${
                activeStep === index
                  ? 'bg-linear-to-r ' + step.color + ' text-white shadow-lg scale-105'
                  : 'backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:shadow-lg'
              }`}
            >
              {/* Sparkle overlay for inactive pills */}
              {activeStep !== index && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 animate-shimmer" style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                    backgroundSize: '200% 100%'
                  }} />
                </div>
              )}
              <span className="flex items-center gap-2 relative z-10">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  activeStep === index 
                    ? 'bg-white/20' 
                    : 'bg-white/20'
                }`}>
                  {step.number}
                </span>
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`transition-all duration-500 ${
                  activeStep === index
                    ? 'opacity-100 translate-y-0 relative'
                    : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
                }`}
              >
                {/* Main Card */}
                <div className="relative rounded-3xl p-8 md:p-12 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl shadow-black/20 overflow-hidden group">
                  {/* Animated glow effect */}
                  <div className="absolute -inset-1 opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" style={{
                    background: `linear-gradient(45deg, ${step.color.includes('blue') ? '#3b82f6, transparent, #6366f1' : step.color.includes('purple') ? '#a855f7, transparent, #ec4899' : step.color.includes('emerald') ? '#10b981, transparent, #14b8a6' : '#f97316, transparent, #ef4444'})`
                  }} />
                  {/* Sparkle effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-full animate-shimmer" style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                      backgroundSize: '200% 100%',
                      animationDuration: '2s'
                    }} />
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                    {/* Left - Icon & Title */}
                    <div className="space-y-6">
                      <div className={`w-20 h-20 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center text-white shadow-xl`}>
                        {step.icon}
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-bold text-gray-500 dark:text-gray-500">STEP {step.number}</span>
                          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm">
                          {step.title}
                        </h3>
                        <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed drop-shadow-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Right - Details */}
                    <div className="space-y-4">
                      {step.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-colors group"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${step.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-gray-800 dark:text-gray-300 font-medium pt-1">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  {steps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeStep === idx
                          ? 'w-8 bg-linear-to-r ' + steps[idx].color
                          : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                      }`}
                      aria-label={`Go to step ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary px-8 py-4">
            <span>Start with a discovery call</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}