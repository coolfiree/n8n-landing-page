"use client";

/* ========================================
   TESTIMONIALS SECTION
   3-column grid with client quotes
   ======================================== */

const testimonials = [
  {
    quote: "Vishnu automated our entire booking process. What used to take hours is now fully hands-off. The system runs 24/7 without any issues.",
    name: "Priya Sharma",
    role: "Founder",
    company: "Astrology Consultancy",
    avatar: "PS",
  },
  {
    quote: "Our Shopify bot answers 80% of customer messages instantly. Best investment this year. Customer satisfaction has gone through the roof.",
    name: "Rahul Mehta",
    role: "Owner",
    company: "D2C Fashion Brand",
    avatar: "RM",
  },
  {
    quote: "Within a week, he set up automations that saved us 20+ hours a month. The ROI was immediate and the handover was seamless.",
    name: "Ananya Patel",
    role: "Operations Lead",
    company: "Wellness Studio",
    avatar: "AP",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-section relative overflow-hidden transition-colors duration-300">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-10" />
      
      <div className="container-main relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="section-label justify-center">
            <span className="text-xs sm:text-sm">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-3 sm:mb-4">What clients say</h2>
          <div className="w-12 h-1 bg-linear-to-r from-primary-500 to-purple-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-2xl p-8 hover:shadow-lg dark:hover:shadow-xl hover:border-primary-200 dark:hover:border-gray-700 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-primary-100 dark:text-primary-900 group-hover:text-primary-200 dark:group-hover:text-primary-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-gray-100">{testimonial.name}</p>
                  <p className="text-sm text-gray-800 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}