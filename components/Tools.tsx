"use client";

/* ========================================
   TOOLS / LOGOS SECTION
   Pill-style badges
   ======================================== */

const tools = [
  { name: "n8n", icon: "⚡" },
  { name: "Supabase", icon: "🗄️" },
  { name: "Razorpay", icon: "💳" },
  { name: "Shopify", icon: "🛒" },
  { name: "WhatsApp API", icon: "💬" },
  { name: "Telegram", icon: "✈️" },
  { name: "Notion", icon: "📝" },
  { name: "Google Workspace", icon: "📊" },
  { name: "OpenAI", icon: "🤖" },
  { name: "Slack", icon: "💼" },
];

export default function Tools() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-section transition-colors duration-300">
      <div className="container-main px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-gray-100 mb-2">Tools I work with</h3>
          <p className="text-sm sm:text-base text-gray-800 dark:text-gray-400">I integrate AI with tools you already use.</p>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card hover:border-primary-200 dark:hover:border-primary-500/30 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all duration-200 cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                {tool.icon}
              </span>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-300 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}