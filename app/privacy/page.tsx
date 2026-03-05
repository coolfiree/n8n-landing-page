import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container-main px-4 sm:px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container-main px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: March 5, 2025
          </p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                At Autumn8.tech (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we are committed to protecting your privacy and personal data. 
                This Privacy Policy explains how we collect, use, store, and protect your information when you use our n8n automation 
                services and workflow solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                By engaging our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.1 Information You Provide</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">We collect information that you voluntarily provide when using our services:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                <li><strong>Account Credentials:</strong> Login credentials for your n8n instance and related services</li>
                <li><strong>API Keys and Tokens:</strong> Third-party service credentials required for workflow automation</li>
                <li><strong>Workflow Data:</strong> Data processed through your automated workflows, including business data, customer information, and system interactions</li>
                <li><strong>Communication Data:</strong> Messages, feedback, and support requests you send to us</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.2 Information Automatically Collected</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Usage Data:</strong> Workflow execution logs, performance metrics, error reports</li>
                <li><strong>Technical Data:</strong> IP addresses, browser type, device information, server logs</li>
                <li><strong>Analytics Data:</strong> Website usage patterns and service interaction data</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Service Delivery:</strong> To create, configure, manage, and execute your n8n workflows and automations</li>
                <li><strong>Infrastructure Management:</strong> To host and maintain your n8n instance on our secure servers</li>
                <li><strong>Technical Support:</strong> To provide customer support, troubleshoot issues, and optimize workflow performance</li>
                <li><strong>Security:</strong> To protect your data, monitor for security threats, and ensure secure credential management</li>
                <li><strong>Service Improvement:</strong> To analyze usage patterns and enhance our service offerings</li>
                <li><strong>Communication:</strong> To send service updates, technical notifications, and respond to inquiries</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms of service</li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Data Storage and Security</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.1 Data Storage</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Your data is stored on secure servers maintained by us or trusted third-party cloud providers. 
                Each client&apos;s n8n instance and data are isolated in dedicated environments to prevent unauthorized access.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.2 Security Measures</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">We implement industry-standard security measures:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Encryption:</strong> Data in transit is encrypted using TLS/SSL protocols. Sensitive data at rest is encrypted using AES-256 encryption</li>
                <li><strong>Access Controls:</strong> Strict access controls and authentication mechanisms to prevent unauthorized access</li>
                <li><strong>Credential Isolation:</strong> API keys and credentials are stored securely using environment variables and encrypted vaults, isolated per client</li>
                <li><strong>Regular Backups:</strong> Automated backups to prevent data loss</li>
                <li><strong>Monitoring:</strong> 24/7 security monitoring and logging of system activities</li>
                <li><strong>Regular Updates:</strong> Timely security patches and software updates</li>
              </ul>
            </section>

            {/* Data Sharing and Third Parties */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Sharing and Third Parties</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">We do not sell your personal data. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Service Providers:</strong> With trusted third-party services (cloud hosting, payment processors) who assist in service delivery and are bound by confidentiality agreements</li>
                <li><strong>Third-Party Integrations:</strong> With external services you explicitly authorize through your workflows (e.g., CRM, email marketing platforms, databases)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate data protection measures</li>
                <li><strong>With Your Consent:</strong> Any other sharing will require your explicit consent</li>
              </ul>
            </section>

            {/* Data Retention and Deletion */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Data Retention and Deletion</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.1 Retention Period</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We retain your data for as long as your account is active or as needed to provide services. 
                Workflow execution logs and analytics data may be retained for up to 90 days for troubleshooting and optimization purposes.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.2 Service Termination and Data Deletion</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Upon termination of our agreement or at your request:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>We will provide you with a complete export of your workflows, credentials, and data within 14 days</li>
                <li>After successful data handover and your confirmation, we will permanently delete all your data from our systems within 30 days</li>
                <li>Backups containing your data will be deleted within 90 days following the retention policy</li>
                <li>Some data may be retained for legal or regulatory compliance purposes only</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                You can request immediate data deletion at any time by contacting us at <a href="mailto:vishnu@autumn8.tech" className="text-primary-600 dark:text-primary-400 hover:underline">vishnu@autumn8.tech</a>.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Right to Access:</strong> Request access to your personal data and workflow information</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Right to Restriction:</strong> Request limitation of data processing in certain circumstances</li>
                <li><strong>Right to Object:</strong> Object to processing of your data for specific purposes</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">We use cookies and similar tracking technologies to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Maintain your login session and preferences</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Improve user experience and service performance</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                You can control cookie preferences through your browser settings. Note that disabling cookies may affect service functionality.
              </p>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Your data may be transferred to and processed in countries other than your country of residence. 
                We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy 
                and applicable data protection laws, including GDPR for European clients.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our services are intended for businesses and individuals 18 years or older. We do not knowingly collect 
                personal information from children under 18. If you believe we have collected such information, please contact us immediately.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                We will notify you of any material changes by email or through our service. The &quot;Last Updated&quot; date at the 
                top will indicate when the policy was last revised. Your continued use of our services after such modifications 
                constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Data Breach Notification */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Data Breach Notification</h2>
              <p className="text-gray-700 dark:text-gray-300">
                In the unlikely event of a data breach that affects your personal data, we will notify you within 72 hours 
                of becoming aware of the breach, in compliance with applicable data protection laws. We will provide details 
                about the nature of the breach, potential consequences, and measures taken to address it.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> <a href="mailto:vishnu@autumn8.tech" className="text-primary-600 dark:text-primary-400 hover:underline">vishnu@autumn8.tech</a>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Website:</strong> <a href="https://autumn8.tech" className="text-primary-600 dark:text-primary-400 hover:underline">autumn8.tech</a>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Response Time:</strong> We aim to respond to all privacy inquiries within 48 hours
                </p>
              </div>
            </section>

            {/* GDPR Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. GDPR Compliance (For EU Clients)</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                For clients in the European Union, we comply with the General Data Protection Regulation (GDPR). 
                This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Lawful basis for processing your data (contract performance, legitimate interest, or consent)</li>
                <li>Data processing agreements with all third-party service providers</li>
                <li>Your right to lodge a complaint with a supervisory authority</li>
                <li>Data Protection Impact Assessments for high-risk processing activities</li>
                <li>Appointment of a Data Protection Officer where required</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container-main px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-linear-to-br from-primary-600 to-primary-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">VM</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">© 2025 Vishnu. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                Home
              </Link>
              <a href="mailto:vishnu@autumn8.tech" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
