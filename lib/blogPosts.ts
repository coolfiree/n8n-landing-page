import type { Metadata } from "next";

export type BlogPost = {
  slug: string;
  title: string;
  category: "Case Study" | "Playbook" | "Guide";
  categoryColor: "primary" | "purple" | "green";
  excerpt: string;
  readTime: string;
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "automated-booking-system",
    category: "Case Study",
    categoryColor: "primary",
    title: "How I built a fully automated booking system with n8n + Razorpay",
    excerpt:
      "A deep dive into automating appointment scheduling, payment collection, and calendar management for a consulting business.",
    readTime: "8 min read",
    publishedAt: "2026-02-01T00:00:00.000Z",
    tags: [
      "workflow automation",
      "n8n",
      "razorpay",
      "booking system",
      "small business",
    ],
    metaTitle:
      "Automated Booking System Case Study: n8n + Razorpay Workflow Automation",
    metaDescription:
      "Step-by-step case study on building a fully automated booking and payment system using n8n, Razorpay, and calendar integrations for a lean consulting business.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "ai-chatbot-decision-framework",
    category: "Playbook",
    categoryColor: "purple",
    title: "Should your business use an AI chatbot?",
    excerpt:
      "A practical framework to decide if an AI chatbot makes sense for your customer support, and how to get started.",
    readTime: "5 min read",
    publishedAt: "2026-02-10T00:00:00.000Z",
    tags: [
      "ai chatbot",
      "customer support",
      "automation",
      "small business",
      "cx",
    ],
    metaTitle:
      "Should Your Business Use an AI Chatbot? A Practical Decision Framework",
    metaDescription:
      "Learn when an AI customer support chatbot actually makes sense, which metrics to watch, and how to roll one out without ruining your customer experience.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "7-processes-to-automate",
    category: "Guide",
    categoryColor: "green",
    title: "7 processes you're still doing manually — and how to automate them",
    excerpt:
      "Common repetitive tasks that most small businesses haven't automated yet, with simple solutions for each.",
    readTime: "6 min read",
    publishedAt: "2026-02-20T00:00:00.000Z",
    tags: [
      "business process automation",
      "workflow automation",
      "sops",
      "n8n",
    ],
    metaTitle:
      "7 Business Processes You Should Automate First (With Simple Workflow Ideas)",
    metaDescription:
      "A practical list of seven high-leverage processes most teams still run manually, plus concrete automation ideas you can ship in days, not months.",
    image: "https://images.unsplash.com/photo-1518433278988-d7240369c0f7?auto=format&fit=crop&q=80&w=800",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export const blogListingMetadata: Metadata = {
  title: "Automation & AI Blog | Playbooks, Case Studies, and Guides",
  description:
    "Deep-dive case studies and practical guides on workflow automation, n8n, AI chatbots, and business process automation for lean teams.",
};
