"use client";

/* ========================================
   CASE STUDIES SECTION
   Wide cards with outcomes
   ======================================== */

const caseStudies = [
  {
    tag: "WhatsApp AI Agent",
    tagColor: "green",
    clientType: "Real Estate Agency",
    stat: "3× more qualified leads",
    title: "WhatsApp AI agent that qualifies real estate leads 24/7",
    tools: ["n8n", "WhatsApp Business API", "GPT-4o", "HubSpot CRM"],
    outcomes: [
      "3× more qualified leads per month",
      "80% reduction in manual follow-up",
      "Zero leads lost outside business hours",
    ],
    description:
      "A real estate agency was losing high-intent leads who messaged on WhatsApp at night or on weekends. I built a GPT-4o-powered agentic workflow on n8n that engages every new WhatsApp enquiry instantly, asks BANT qualification questions in natural conversation, scores the lead, and pushes a full summary into HubSpot — tagging hot leads and auto-scheduling a callback with the right agent. Unqualified enquiries are filtered and archived so the sales team only ever touches warm prospects.",
  },
  {
    tag: "Booking Automation",
    tagColor: "purple",
    clientType: "Consulting & Coaching Business",
    stat: "70% less admin overhead",
    title: "End-to-end automated booking and payment system with n8n + Razorpay",
    tools: ["n8n", "Razorpay", "Google Calendar", "Twilio SMS"],
    outcomes: [
      "70% reduction in manual admin work",
      "Zero double-bookings since launch",
      "24/7 self-serve appointment scheduling",
    ],
    description:
      "A busy consulting business was managing bookings through email and WhatsApp, leading to double-bookings and missed payments. I designed a fully automated n8n workflow where clients pick a real-time available slot, pay securely via Razorpay, and receive an instant confirmation with a Google Calendar invite and SMS reminder via Twilio — all without a single manual step. The workflow also handles rescheduling, cancellations, and post-session follow-ups automatically.",
  },
  {
    tag: "E-commerce Chatbot",
    tagColor: "green",
    clientType: "Shopify D2C Brand",
    stat: "62% fewer support tickets",
    title: "AI support chatbot that resolves Shopify order queries instantly",
    tools: ["n8n", "OpenAI GPT-4o", "Shopify API", "Intercom"],
    outcomes: [
      "62% fewer tickets reaching human agents",
      "Instant order status and return initiation",
      "Smart escalation for complex issues",
    ],
    description:
      "A fast-growing D2C Shopify brand was drowning in repetitive support tickets — order status, ETAs, refund status, and return requests. I built an AI-powered support agent connected to the Shopify API via n8n. The chatbot pulls live order data, handles returns end-to-end, answers product FAQs using a vector-indexed knowledge base, and escalates seamlessly to a human agent in Intercom when sentiment drops or the query is too complex. Resolution time dropped from hours to seconds.",
  },
  {
    tag: "Agentic Lead Nurture",
    tagColor: "primary",
    clientType: "B2B SaaS Company",
    stat: "41% lift in demo conversions",
    title: "AI-powered agentic lead nurture workflow for a B2B SaaS product",
    tools: ["n8n", "OpenAI", "Instantly.ai", "Airtable", "Clearbit"],
    outcomes: [
      "41% increase in demo-to-close rate",
      "Hyper-personalised outreach at scale",
      "Saved 20+ hours of SDR time per week",
    ],
    description:
      "A B2B SaaS company had a strong inbound pipeline but poor follow-up cadence — leads were going cold because SDRs were overwhelmed. I built an agentic n8n workflow that enriches every new sign-up with Clearbit data, scores them using a custom LLM prompt, generates a hyper-personalised first email referencing their company and role, and sequences follow-ups automatically via Instantly.ai. Hot leads that click or reply are immediately flagged in Airtable and assigned to the right SDR.",
  },
  {
    tag: "Payment Recovery",
    tagColor: "purple",
    clientType: "Subscription SaaS",
    stat: "$14k recovered in first month",
    title: "Automated failed payment recovery agent for subscription revenue",
    tools: ["n8n", "Stripe Webhooks", "OpenAI", "Gmail API", "Slack"],
    outcomes: [
      "$14,000 recovered in the first 30 days",
      "44% recovery rate on failed payments",
      "Zero manual intervention required",
    ],
    description:
      "A subscription SaaS was silently churning paying customers every month because failed card payments went unnoticed until renewal. I built an n8n workflow that listens for Stripe `payment_intent.payment_failed` webhook events, instantly sends a warm, personalised retry email via Gmail with a direct payment update link, follows up at 24-hour and 72-hour intervals with different messaging, and notifies the team in Slack when a churned customer is recovered. A payment-failed customer is now 3× more likely to stay subscribed than before.",
  },
  {
    tag: "Competitor Intelligence",
    tagColor: "primary",
    clientType: "Growth-Stage Startup",
    stat: "15+ hours saved weekly",
    title: "Fully automated competitor and market intelligence pipeline using n8n and LLMs",
    tools: ["n8n", "OpenAI GPT-4o", "Apify", "Notion", "Slack"],
    outcomes: [
      "Daily summarised competitor reports, fully automated",
      "Real-time pricing and feature-change alerts",
      "Saved 15+ hours of manual research per week",
    ],
    description:
      "A growth-stage startup's marketing and product teams were spending several hours each week manually checking competitor websites, G2 reviews, and Twitter for market signals. I built an automated n8n pipeline that uses Apify to scrape competitor pricing pages, product changelogs, and review platforms on a daily schedule. GPT-4o then synthesises the raw data into a structured briefing — highlighting new features, pricing shifts, customer complaints, and positioning changes — and posts it to a dedicated Slack channel and a Notion database, ready for the team each morning.",
  },
];

const tagColors = {
  primary: "bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border-primary-100 dark:border-primary-500/20",
  purple: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-500/20",
  green: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-500/20",
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-12 sm:py-16 md:py-20 bg-gradient-section-alt transition-colors duration-300 relative">
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10" />
      <div className="container-main relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="section-label">
            <span className="text-xs sm:text-sm">Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-3 sm:mb-4">Selected Case Studies</h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 max-w-2xl">
            Real workflows. Real results. From WhatsApp AI agents and agentic lead nurture to Shopify support bots and automated payment recovery — here&apos;s what I&apos;ve built.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-4 sm:space-y-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="glass-card group p-5 sm:p-6 md:p-8 cursor-pointer hover:border-primary-200 dark:hover:border-gray-700 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6 lg:gap-10">
                {/* Content */}
                <div className="flex-1 space-y-3 sm:space-y-4">
                  {/* Tag + client type */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`inline-flex items-center px-2.5 sm:px-3 py-1 text-xs font-medium rounded-full border ${tagColors[study.tagColor as keyof typeof tagColors]}`}>
                      {study.tag}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      {study.clientType}
                    </span>
                  </div>

                  {/* Hero stat */}
                  <p className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 leading-none">
                    {study.stat}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-800 dark:text-gray-400 leading-relaxed max-w-2xl">
                    {study.description}
                  </p>

                  {/* Outcomes */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                    {study.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-300"
                      >
                        <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools used */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {study.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center px-2 py-0.5 text-[11px] font-medium rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thumbnail / Visual */}
                <div className="lg:w-80 shrink-0">
                  <div className="relative aspect-4/3 bg-linear-to-br from-gray-50 dark:from-gray-800 to-gray-100 dark:to-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden group-hover:border-gray-200 dark:group-hover:border-gray-700 transition-colors">
                    {/* Abstract workflow visual */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-center">
                      <div className="space-y-3">
                        {/* Flow nodes */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                            <div className="w-4 h-4 rounded bg-primary-500/20" />
                          </div>
                          <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 rounded" />
                          <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                            <div className="w-4 h-4 rounded bg-purple-500/20" />
                          </div>
                        </div>
                        <div className="flex items-center gap-3 pl-6">
                          <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                            <div className="w-4 h-4 rounded bg-green-500/20" />
                          </div>
                          <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 rounded" />
                          <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                            <div className="w-4 h-4 rounded bg-orange-500/20" />
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                            <div className="w-4 h-4 rounded bg-blue-500/20" />
                          </div>
                          <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 rounded" />
                          <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary-50 dark:group-hover:bg-primary-500/10 group-hover:border-primary-100 dark:group-hover:border-primary-500/20 transition-colors">
                    <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}