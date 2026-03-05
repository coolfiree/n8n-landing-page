import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"), // FIXME: Replace with deployed domain later
  title: {
    default: "Vishnu | AI Automation & Chatbot Developer",
    template: "%s | Vishnu | AI Automation"
  },
  description: "I build AI automations and chatbots that remove busywork from your business. From Shopify support bots to WhatsApp booking systems.",
  keywords: ["AI automation", "chatbot developer", "n8n", "workflow automation", "AI assistant", "business automation"],
  authors: [{ name: "Vishnu" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Vishnu | AI Automation & Chatbot Developer",
    description: "I build AI automations and chatbots that remove busywork from your business.",
    url: "https://yourdomain.com",
    siteName: "Vishnu Automations",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishnu | AI Automation & Chatbot Developer",
    description: "I build AI automations and chatbots that remove busywork from your business.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Vishnu Automations",
              "description": "AI automations and chatbots developer.",
              "url": "https://yourdomain.com",
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && systemDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 antialiased overflow-x-hidden transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
