/**
 * Home Page
 * 
 * This site showcases Vishnu's work as an AI automation & chatbot developer.
 * Sections:
 * 1. Hero
 * 2. Services
 * 3. Case Studies
 * 4. Testimonials
 * 5. Tools / Logos
 * 6. About
 * 7. Process
 * 8. Free Guide
 * 9. Blog Preview
 * 10. Contact
 * 
 * Design Goals:
 * - Clean, minimal, modern.
 * - TailwindCSS for styling.
 * - Section-based layout.
 * - Chatbot widget floating on bottom-right.
 */

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Process from "@/components/Process";
import FreeGuide from "@/components/FreeGuide";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
// import ChatWidget from "@/components/ChatWidget";
import Chat from "@/components/Chat";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Tools />
      <About />
      <Process />
      <FreeGuide />
      <BlogPreview />
      <Contact />

      {/* Floating chatbot widget */}
      {/* <ChatWidget /> */}
      <Chat webhookUrl="https://n8n.101x.dev/webhook/46c19b6f-f5ca-4c8d-825a-98991fefa656" />
    </main>
  );
}
