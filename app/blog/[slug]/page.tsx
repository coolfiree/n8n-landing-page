import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blogPosts";

type BlogPostPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export function generateStaticParams() {
	return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		return {
			title: "Article not found | Automation & AI Blog",
			description: "The article you are looking for does not exist.",
		};
	}

	const baseTitle = "Automation & AI Blog";

	return {
		title: post.metaTitle ?? `${post.title} | ${baseTitle}`,
		description: post.metaDescription,
		alternates: {
			canonical: `/blog/${post.slug}`,
		},
		openGraph: {
			title: post.metaTitle ?? post.title,
			description: post.metaDescription,
			type: "article",
			publishedTime: post.publishedAt,
			authors: ["Vishnu"],
			tags: post.tags,
			images: [
				{
					url: post.image,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.metaTitle ?? post.title,
			description: post.metaDescription,
			images: [post.image],
		},
	};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.metaDescription,
		datePublished: post.publishedAt,
		dateModified: post.updatedAt ?? post.publishedAt,
		author: {
			"@type": "Person",
			name: "Automation Consultant",
		},
	};

	return (
		<article className="py-12 sm:py-16 md:py-20 bg-gradient-section-alt transition-colors duration-300">
			<div className="container-main px-4 sm:px-6 max-w-3xl mx-auto">
				<header className="mb-8 sm:mb-10">
					<div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
						<span className="inline-flex items-center px-3 py-1 text-[11px] font-medium rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/40 text-gray-700 dark:text-gray-300">
							{post.category}
						</span>
						<span>
							{new Date(post.publishedAt).toLocaleDateString(undefined, {
								year: "numeric",
								month: "short",
								day: "2-digit",
							})}
						</span>
						<span className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700" />
						<span>{post.readTime}</span>
					</div>

					<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black dark:text-gray-50 mb-4">
						{post.title}
					</h1>

					{post.metaDescription && (
						<p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
							{post.metaDescription}
						</p>
					)}

					{post.tags?.length ? (
						<div className="mt-4 flex flex-wrap gap-2">
							{post.tags.map((tag) => (
								<span
									key={tag}
									className="inline-flex items-center px-2.5 py-1 text-[11px] font-medium rounded-full border border-gray-100 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 text-gray-700 dark:text-gray-300"
								>
									#{tag}
								</span>
							))}
						</div>
					) : null}
				</header>

				<div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-24">
					{renderPostContent(post.slug)}
				</div>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</div>
		</article>
	);
}

function renderPostContent(slug: string) {
	switch (slug) {
		case "automated-booking-system":
			return <AutomatedBookingSystemContent />;
		case "ai-chatbot-decision-framework":
			return <AIChatbotDecisionFrameworkContent />;
		case "7-processes-to-automate":
			return <SevenProcessesToAutomateContent />;
		default:
			return null;
	}
}

function AutomatedBookingSystemContent() {
	return (
		<>
			<p>
				If you run any kind of consulting, coaching, or boutique services
				business, you know how much time disappears into back-and-forth messages
				about availability, payments, and rescheduling. An automated booking
				system turns all of that into a clean workflow: prospects choose a slot,
				pay online, and your calendar updates itself.
			</p>

			<p>
				In this case study, we will walk through how to design a simple but
				robust booking workflow using workflow automation (with n8n as the
				orchestration layer) plus Razorpay for payments and a calendar like
				Google Calendar or Outlook. The same pattern works for demos, strategy
				calls, paid intensives, or recurring sessions.
			</p>

			<h2>Why manual booking workflows break as you grow</h2>

			<p>
				When bookings are handled manually, a single person becomes the
				workflow. That usually leads to:
			</p>
			<ul>
				<li>Slow response times, especially across time zones.</li>
				<li>Double-booked slots when two people confirm at the same time.</li>
				<li>
					Missed payments because invoicing and scheduling live in different
					tools.
				</li>
				<li>
					No clean data on where leads come from or which offers convert best.
				</li>
			</ul>

			<p>
				A well-designed workflow automation replaces that manual juggling with
				a deterministic, testable flow. Every booking goes through the same
				path, is logged centrally, and can be tweaked without rewriting your
				whole stack.
			</p>

			<h2>High-level architecture of the automated booking system</h2>

			<p>At a high level, the system has four building blocks:</p>
			<ol>
				<li>
					<strong>Booking form</strong> – a simple page where visitors pick a
					time, enter their details, and choose an offer.
				</li>
				<li>
					<strong>Payment step</strong> – Razorpay handles secure payments and
					sends reliable webhooks back to your workflow.
				</li>
				<li>
					<strong>Workflow engine</strong> – an n8n workflow glues everything
					together, validates data, and updates external systems.
				</li>
				<li>
					<strong>Calendar + CRM</strong> – your calendar, email tool, and
					simple CRM receive the final booking information.
				</li>
			</ol>

			<p>
				n8n sits in the middle as the orchestration layer. It receives form
				submissions, calls Razorpay APIs when needed, validates webhook events,
				and finally writes to Google Calendar, your email service, and any
				internal dashboards you care about.
			</p>

			<h2>Step-by-step: how the automated booking workflow runs</h2>

			<h3>1. Capture the booking request</h3>
			<p>
				The workflow starts when someone submits a booking form on your site.
				You capture:
			</p>
			<ul>
				<li>Name and email address.</li>
				<li>Chosen time slot and time zone.</li>
				<li>Offer type (free intro call, paid session, package, etc.).</li>
				<li>Optional context questions so the call is productive.</li>
			</ul>
			<p>
				The form sends this payload into n8n via a Webhook node or your
				favourite form provider&apos;s integration.
			</p>

			<h3>2. Lock the time slot</h3>
			<p>
				Before asking for payment, the workflow checks your calendar from n8n:
			</p>
			<ul>
				<li>
					If the slot is already taken (for example by an internal meeting),
					the workflow sends an apologetic email with a link to rebook.
				</li>
				<li>
					Otherwise, it tentatively blocks the slot with a
					&quot;Pending payment&quot; event.
				</li>
			</ul>

			<h3>3. Generate the Razorpay payment link</h3>
			<p>
				For paid offers, n8n calls Razorpay&apos;s API to create a payment link
				with:
			</p>
			<ul>
				<li>The correct amount and currency for the offer.</li>
				<li>The customer&apos;s email and name pre-filled.</li>
				<li>
					Metadata fields containing the chosen time slot and internal booking
					ID.
				</li>
			</ul>
			<p>
				The workflow then sends a transactional email that includes the payment
				link and a clear deadline (for example, 30 minutes) before the slot is
				released back into the pool.
			</p>

			<h3>4. Listen for Razorpay webhooks</h3>
			<p>
				Instead of polling, n8n exposes a secure webhook endpoint that receives
				Razorpay events. When a payment is captured, the workflow:
			</p>
			<ul>
				<li>Verifies the signature and amount.</li>
				<li>Matches the payment to the internal booking ID.</li>
				<li>Marks the calendar event as confirmed.</li>
				<li>
					Updates your CRM and sends a personalized confirmation email with
					join-link details.
				</li>
			</ul>

			<h3>5. Handle cancellations and reschedules</h3>
			<p>
				A resilient workflow also models what happens when plans change. For
				example, clicking a &quot;Reschedule&quot; link in the confirmation email can
				trigger another n8n workflow that:
			</p>
			<ul>
				<li>Lets the client pick a new time slot.</li>
				<li>Moves the calendar event accordingly.</li>
				<li>
					Logs the change so you can see how often clients move their
					appointments.
				</li>
			</ul>

			<h2>Results: what improves after booking automation</h2>

			<p>Teams typically see three quick wins from this kind of system:</p>
			<ul>
				<li>
					<strong>Higher show-up rates</strong> because clients receive clear,
					timely reminders and calendar invites.
				</li>
				<li>
					<strong>Cleaner data</strong> – every booking lives in a single
					source of truth that can feed dashboards and revenue forecasts.
				</li>
				<li>
					<strong>Recovered focus time</strong> – no more checking three tools
					to see who paid, who booked, and who needs a follow-up.
				</li>
			</ul>

			<p>
				The same workflow automation pattern extends beyond one-on-one calls.
				You can reuse it for paid workshops, group cohorts, or even internal
				training sessions – anywhere you need a predictable booking and payment
				flow that just works.
			</p>
		</>
	);
}

function AIChatbotDecisionFrameworkContent() {
	return (
		<>
			<p>
				Over the last few years, &quot;add an AI chatbot&quot; has become a default
				suggestion for improving customer support. But not every business
				actually benefits from an AI support bot, and deploying one too early
				can quietly damage your brand.
			</p>

			<p>
				This article gives you a practical decision framework for deciding
				whether an AI chatbot makes sense for your business right now, which
				use cases to start with, and how to roll it out without frustrating
				customers.
			</p>

			<h2>What an AI chatbot really is (in plain English)</h2>

			<p>
				A modern AI chatbot is typically powered by a large language model that
				can understand free-form questions and generate natural language
				answers. It&apos;s very different from older rule-based bots that followed
				a rigid decision tree.
			</p>

			<p>
				For customer support, the chatbot usually sits on your website or inside
				tools like WhatsApp, Instagram, or your web app. Behind the scenes, an
				automation layer routes messages, enriches them with customer data, and
				decides when to escalate to a human.
			</p>

			<h2>Five signs your business is ready for an AI chatbot</h2>

			<ol>
				<li>
					<strong>You receive a high volume of repetitive questions.</strong>
					<br />
					If 60–70% of chats are about pricing, shipping, refund status,
					onboarding steps, or basic troubleshooting, a chatbot can confidently
					handle those FAQs.
				</li>
				<li>
					<strong>Your support team works across time zones.</strong>
					<br />
					When customers appear while your team is offline, an AI chatbot can
					provide instant, accurate responses or at least collect the right
					context so humans can jump in later.
				</li>
				<li>
					<strong>You already have solid help docs or SOPs.</strong>
					<br />
					Chatbots work best when they can ground answers in existing knowledge
					bases, product docs, or internal playbooks.
				</li>
				<li>
					<strong>You can define &quot;good&quot; vs &quot;bad&quot; responses.</strong>
					<br />
					You know what a helpful answer looks like, what claims the bot should
					never make, and which topics require a human.
				</li>
				<li>
					<strong>You&apos;re tracking support metrics already.</strong>
					<br />
					Metrics like first response time, resolution time, CSAT, or NPS make
					it much easier to judge whether the chatbot is actually helping.
				</li>
			</ol>

			<h2>When AI chatbots are the wrong tool</h2>

			<p>
				There are also clear situations where an AI chatbot is not a good fit
				yet:
			</p>
			<ul>
				<li>
					Very low support volume – the cost and effort to maintain a bot
					outweigh the benefits.
				</li>
				<li>
					Highly sensitive or regulated topics where incorrect answers are
					unacceptable, such as complex medical or legal advice.
				</li>
				<li>
					Products that change weekly, but with no central documentation
					process.
				</li>
			</ul>

			<p>
				In these cases, start instead with better internal documentation,
				improved contact forms, and simple workflow automation before layering
				AI into the experience.
			</p>

			<h2>A simple rollout plan for your first AI support bot</h2>

			<h3>1. Choose a narrow, high-confidence use case</h3>
			<p>
				Rather than &quot;handle all support&quot;, pick one concrete job: answering
				pre-sales FAQs, guiding new users through setup, or checking order
				status based on an ID. This keeps quality high and risk low.
			</p>

			<h3>2. Ground the chatbot in your own content</h3>
			<p>
				Feed the model carefully curated content: help center articles, pricing
				pages, onboarding checklists, and internal SOPs. Avoid giving it messy
				or contradictory documents. Good retrieval is more important than a
				fancy UI.
			</p>

			<h3>3. Set clear guardrails and escalation rules</h3>
			<p>
				Design the automation around the chatbot to:
			</p>
			<ul>
				<li>Hand off to a human whenever the model is unsure.</li>
				<li>
					Log conversations so you can review where the bot struggled or
					hallucinated.
				</li>
				<li>
					Allow customers to &quot;talk to a person&quot; with a single click at any
					time.
				</li>
			</ul>

			<h3>4. Measure impact beyond just deflection</h3>
			<p>
				It&apos;s tempting to measure success only by &quot;ticket deflection&quot;, but
				the real question is whether the customer experience improved. Track:
			</p>
			<ul>
				<li>Customer satisfaction for bot-handled vs. human-handled tickets.</li>
				<li>Time-to-first-response across regions.</li>
				<li>
					Conversion rate changes on key pages after adding an AI chatbot
					widget.
				</li>
			</ul>

			<p>
				Used thoughtfully, an AI chatbot becomes part of a larger automation
				strategy: it handles repetitive, well-understood work so human agents
				can focus on complex, high-empathy situations where they create real
				value.
			</p>
		</>
	);
}

function SevenProcessesToAutomateContent() {
	return (
		<>
			<p>
				Most teams know they &quot;should automate more&quot;, but it is not obvious
				where to start. The highest ROI usually comes from workflows that are
				repetitive, rules-based, and close to revenue.
			</p>

			<p>
				Here are seven business processes that many teams still run manually,
				plus simple workflow automation ideas for each. You can implement them
				using tools like n8n as your automation engine.
			</p>

			<h2>1. Lead capture and qualification</h2>

			<p>
				When someone fills out a &quot;Contact&quot; or &quot;Book a demo&quot; form, that lead
				should never land in a shared inbox and disappear. A basic automation
				can:
			</p>
			<ul>
				<li>Push the lead into your CRM with source and UTM parameters.</li>
				<li>
					Score the lead based on company size, job title, or chosen budget
					range.
				</li>
				<li>
					Notify the right owner in Slack or email when a high-intent lead
					arrives.
				</li>
			</ul>

			<h2>2. Meeting scheduling and reminders</h2>

			<p>
				If you still send manual &quot;Does Tuesday work?&quot; emails, you are leaving
				money and time on the table. Automate scheduling so that:
			</p>
			<ul>
				<li>
					Prospects can pick a time from your real-time availability without
					back-and-forth.
				</li>
				<li>
					Confirmation and reminder emails go out automatically with calendar
					invites.
				</li>
				<li>
					No-show events trigger a follow-up sequence or a survey.
				</li>
			</ul>

			<h2>3. Invoicing and payment follow-up</h2>

			<p>
				Chasing late invoices is emotionally draining and easy to postpone.
				Workflow automation can turn it into a neutral system:
			</p>
			<ul>
				<li>
					When an invoice is created in your accounting tool, an automation
					schedules reminder messages for due date, +7 days, and +14 days.
				</li>
				<li>
					Paid invoices stop the sequence and update your revenue dashboard.
				</li>
				<li>
					Overdue invoices trigger an escalation to a founder or finance lead.
				</li>
			</ul>

			<h2>4. New client onboarding</h2>

			<p>
				Every new customer should go through a consistent, high-quality
				onboarding flow. Instead of manually sending documents and links each
				time, automate a sequence that:
			</p>
			<ul>
				<li>Sends a welcome email with expectations and next steps.</li>
				<li>
					Shares the right resources based on the product tier they purchased.
				</li>
				<li>
					Creates internal tasks for your team to complete onboarding steps on
					time.
				</li>
			</ul>

			<h2>5. Support ticket triage</h2>

			<p>
				Instead of having one noisy shared inbox, build an automated triage
				workflow:
			</p>
			<ul>
				<li>
					Route urgent tickets (like outages or payment issues) to a priority
					channel.
				</li>
				<li>
					Tag and group similar issues so trends become visible quickly.
				</li>
				<li>
					Trigger follow-ups if a ticket stays in &quot;pending&quot; for too long.
				</li>
			</ul>

			<h2>6. Failed payment recovery</h2>

			<p>
				For subscription or installment products, failed payments are
				inevitable but often recoverable. A workflow can:
			</p>
			<ul>
				<li>
					Listen for failed payment events from your payment processor.
				</li>
				<li>
					Immediately send a friendly email with a secure retry link.
				</li>
				<li>
					Create a task or CRM note if recovery fails after a certain number of
					attempts.
				</li>
			</ul>

			<h2>7. NPS and feedback collection</h2>

			<p>
				Regular feedback loops are crucial, but manual survey sends rarely
				happen on time. With automation you can:
			</p>
			<ul>
				<li>
					Trigger an NPS survey 30 days after a customer signs up or upgrades.
				</li>
				<li>
					Pipe responses into a central &quot;voice of customer&quot; database.
				</li>
				<li>
					Alert an account owner when a detractor score comes in, so they can
					follow up personally.
				</li>
			</ul>

			<p>
				You do not need to automate everything at once. Pick one of these seven
				workflows, map it clearly, and ship a simple version in a tool like
				n8n. Once it is stable, move on to the next. Over a few months, your
				team&apos;s manual busywork shrinks dramatically, while the quality and
				reliability of your processes quietly improves.
			</p>
		</>
	);
}

