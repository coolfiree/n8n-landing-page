"use client";

import Link from "next/link";
import Image from "next/image";

/* ========================================

   BLOG PREVIEW SECTION
   3-column grid with blog cards
   ======================================== */

const blogPosts = [
  {
    category: "Case Study",
    categoryColor: "primary",
    title: "How I built a fully automated booking system with n8n + Razorpay",
    excerpt: "A deep dive into automating appointment scheduling, payment collection, and calendar management for a consulting business.",
    readTime: "8 min read",
    slug: "automated-booking-system",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Playbook",
    categoryColor: "purple",
    title: "Should your business use an AI chatbot?",
    excerpt: "A practical framework to decide if an AI chatbot makes sense for your customer support, and how to get started.",
    readTime: "5 min read",
    slug: "ai-chatbot-decision-framework",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Guide",
    categoryColor: "green",
    title: "7 processes you're still doing manually — and how to automate them",
    excerpt: "Common repetitive tasks that most small businesses haven't automated yet, with simple solutions for each.",
    readTime: "6 min read",
    slug: "7-processes-to-automate",
    image: "https://images.unsplash.com/photo-1518433278988-d7240369c0f7?auto=format&fit=crop&q=80&w=800",
  },
];

const categoryColors = {
  primary: "bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border-primary-100 dark:border-primary-800",
  purple: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800",
  green: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800",
};

export default function BlogPreview() {
  return (
    <section id="blog" className="py-12 sm:py-16 md:py-20 bg-gradient-section-alt transition-colors duration-300">
      <div className="container-main px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div>
            <div className="section-label">
              <span>Blog</span>
            </div>
            <h2 className="section-title">Insights & playbooks</h2>
            <p className="section-subtitle">
              Short, practical articles on automation and AI.
            </p>
          </div>
          <a href="/blog" className="link-arrow shrink-0">
            <span>View all articles</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="glass-card rounded-2xl overflow-hidden hover:border-primary-200 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Category */}
                  <span className={`inline-flex self-start items-center px-3 py-1 text-xs font-medium rounded-full border mb-4 ${categoryColors[post.categoryColor as keyof typeof categoryColors]}`}>
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-black dark:text-gray-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-800 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                    <span className="text-xs text-gray-500 dark:text-gray-500">{post.readTime}</span>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}