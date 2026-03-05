"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import BookingModal from "./BookingModal";

/* ========================================
   HERO SECTION
   World-class design with animations
   ======================================== */

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Handle scroll for navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}>
        <div className={`transition-all duration-500 ${
          isScrolled 
            ? 'max-w-5xl mx-auto px-6' 
            : 'container-main'
        }`}>
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled 
              ? 'h-14 px-6 rounded-2xl backdrop-blur-2xl bg-gray-100/90 dark:bg-gray-800/90 shadow-2xl shadow-gray-800/20 dark:shadow-white/25' 
              : 'h-16 md:h-20'
          }`}>
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-primary-600 to-primary-500 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <span className="text-white font-bold text-sm">VM</span>
              </div>
              <span className="font-semibold text-black dark:text-white hidden sm:block">Vishnu</span>
            </a>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {["Services", "Case Studies", "Process", "Blog", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 relative group"
                >
                  <span className="relative z-10 group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.9)] dark:group-hover:drop-shadow-[0_0_12px_rgba(129,140,248,0.9)] transition-all duration-300">
                    {item}
                  </span>
                </a>
              ))}
            </div>

            {/* Right side: Theme Toggle + CTA + Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <button
                onClick={() => setBookingOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-4 lg:px-6 py-2.5 rounded-full bg-white dark:bg-white text-black font-semibold hover:bg-gray-100 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group text-sm"
              >
                <span className="hidden lg:inline">Book a Call</span>
                <span className="lg:hidden">Book</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-[4.5rem] left-0 right-0 z-40 animate-fade-in">
            <div className="mx-4 sm:mx-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-4 space-y-1">
                {["Services", "Case Studies", "Process", "Blog", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 rounded-xl transition-all"
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => { closeMobileMenu(); setBookingOpen(true); }}
                  className="sm:hidden block w-full mt-2 px-4 py-3 text-center text-base font-semibold bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all"
                >
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-24 sm:pt-20 pb-12 sm:pb-0 overflow-hidden dark:bg-gray-950 bg-gradient-hero transition-colors duration-300">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20" />
        <div className="absolute top-1/4 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container-main relative z-10 px-4 sm:px-6">
          
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] sm:leading-[1.1] tracking-tight text-balance text-black dark:text-white pt-4 sm:pt-8 lg:pt-12 pb-4 sm:pb-7.5 md:pt-20">
                I build{" "}
                <span className="gradient-text-animated">AI Agents, n8n Automations</span>
                {" "}and <span className="gradient-text-animated">Chatbots</span> 
          </h1>    

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center pb-8 lg:pb-12">
            {/* Left Column - Text Content */}
            <div className={`space-y-6 sm:space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                <span className="text-sm font-medium text-primary-800 dark:text-primary-300">Available for new projects</span>
              </div>

              {/* Headline */}
              {/*<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-balance text-black dark:text-white">
                I build{" "}
                <span className="gradient-text-animated">AI Agents, Automations</span>
                {" "}and <span className="gradient-text-animated">Chatbots</span> 
              </h1>*/}

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 max-w-xl leading-relaxed">
                From Custom Chatbots, Shopify e-commerce workflows to WhatsApp booking systems, I design & implement 
                reliable automations, <span className="gradient-text-animated">n8n workflows</span> that save's time & resources, reduce manual efforts, and improve customer experience.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#contact" className="btn-primary group px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                  <span className="hidden sm:inline">What Can I Automate</span>
                  <span className="sm:hidden">Start Automation</span>
                </a>
                <a href="https://wa.me/+918618598547" className="btn-primary group px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Chat with my agent</span>
                  <svg className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Powered By */}
              <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-500 uppercase tracking-wider mb-4">Powered by</p>
                <div className="flex flex-wrap items-center gap-6">
                  {["n8n", "Supabase", "Razorpay", "Shopify", "WhatsApp API"].map((tool) => (
                    <span key={tool} className="text-sm font-medium text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className={`relative ${isVisible ? 'animate-slide-in-right delay-300' : 'opacity-0'}`}>
              <div className="relative">
                {/* Main Card */}
                <div className="relative glass-card-hero rounded-3xl p-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black dark:text-white text-sm">Workflow Automation</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Active • 24/7</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">Live</span>
                    </div>
                  </div>

                  {/* Workflow Nodes */}
                  <div className="space-y-4">
                    {/* Node 1 */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-linear-to-r from-orange-400 to-primary-500 animate-shimmer" />
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/20 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Node 2 */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div className="flex-1 h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-linear-to-r from-green-400 to-emerald-500 animate-shimmer" style={{ animationDelay: '0.5s' }} />
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-black dark:text-white">2.4k</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Tasks today</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">99.9%</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Uptime</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">48ms</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Avg response</p>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Time saved</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-gray-100">+20hrs/week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle">
          <button
            type="button"
            aria-label="Scroll down to explore content"
            className="group flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer focus:outline-none"
            onClick={() => {
              // Try to find services section by ID first, then by next section
              const servicesSection = document.getElementById('services') || document.querySelector('main section:first-child');
              
              if (servicesSection) {
                const targetPosition = servicesSection.getBoundingClientRect().top + window.scrollY - 80; // Subtract navbar height
                window.scrollTo({
                  top: targetPosition,
                  behavior: "smooth"
                });
              } else {
                // Fallback: scroll by viewport height
                window.scrollTo({
                  top: window.innerHeight - 80,
                  behavior: "smooth"
                });
              }
            }}
          >
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
              Scroll to explore
            </span>
            <svg 
              className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-all group-hover:translate-y-0.5 group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
