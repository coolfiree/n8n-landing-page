import Link from "next/link";
import Image from "next/image";
import { blogListingMetadata, blogPosts } from "@/lib/blogPosts";
import type { Metadata } from "next";

export const metadata: Metadata = blogListingMetadata;

export default function BlogIndexPage() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-section-alt transition-colors duration-300">
      <div className="container-main px-4 sm:px-6">
        <header className="mb-10 sm:mb-12 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-label">
              <span>Blog</span>
            </div>
            <h1 className="section-title">Automation & AI insights</h1>
            <p className="section-subtitle max-w-2xl">
              Case studies, playbooks, and guides on workflow automation, n8n, AI
              chatbots, and business process automation for lean teams.
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group h-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 shadow-sm hover:border-primary-200 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mb-3">
                  <span className="inline-flex items-center gap-2">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <span>{post.readTime}</span>
                  </span>
                  {post.tags?.[0] && (
                    <span className="uppercase tracking-wide text-[11px] text-gray-500 dark:text-gray-500">
                      {post.tags[0]}
                    </span>
                  )}
                </div>

                <Link href={`/blog/${post.slug}`} className="flex-1 flex flex-col">
                  <h2 className="text-lg font-semibold text-black dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-800 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </Link>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 text-gray-700 dark:text-gray-300">
                    {post.category}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read article
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
