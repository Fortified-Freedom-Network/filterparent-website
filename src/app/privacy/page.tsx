import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — FilterParent",
  description:
    "FilterParent Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-navy-deep/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white"
          >
            <Image
              src="/images/logo.png"
              alt="FilterParent logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            Filter<span className="text-olive">Parent</span>
          </Link>
          <Link
            href="/#waitlist"
            className="rounded-lg bg-olive px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-olive-dark"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-[720px] px-6 pb-24 pt-32">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-olive transition-colors hover:text-olive-dark"
        >
          &larr; Back to home
        </Link>

        <article className="legal-content">
          <h1>FilterParent — Privacy Policy</h1>
          <p><strong>Last Updated:</strong> March 31, 2026</p>

          <h2>1. Introduction</h2>
          <p>
            FilterParent is a service of{" "}
            <strong>Fortified Freedom Network</strong> (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; &ldquo;our&rdquo;). We built FilterParent to
            protect people in high-conflict separated relationships from
            emotional harm while preserving evidence. We take your privacy and
            data security extremely seriously — especially because the
            information you trust us with is deeply personal and sensitive.
          </p>
          <p>
            This Privacy Policy explains what information we collect, how we use
            it, how we protect it, and what rights you have. It applies to the
            FilterParent Progressive Web App at app.filterparent.com and all
            related services.
          </p>
          <p>
            <strong>If you are in immediate danger, call 911.</strong>{" "}
            FilterParent is not a safety device or emergency service.
          </p>

          <h2>2. Information We Collect</h2>

          <h3>2.1 Account Information</h3>
          <p>When you create an account, we collect:</p>
          <ul>
            <li>
              <strong>Email address</strong> — used for account login,
              notifications, and communication from us
            </li>
            <li>
              <strong>Account preferences</strong> — your chosen settings for
              summary level, notification preferences, and contact
              configurations
            </li>
          </ul>

          <h3>2.2 Messages Received Through Twilio</h3>
          <p>
            When someone sends a text message to your FilterParent phone number,
            we receive and store:
          </p>
          <ul>
            <li>
              <strong>The original message content</strong> — stored encrypted
              and hashed for evidence integrity
            </li>
            <li>
              <strong>Message metadata</strong> — sender phone number, recipient
              number, Twilio message SID (a unique identifier), timestamp,
              delivery status
            </li>
            <li>
              <strong>Cryptographic hash</strong> — a SHA-256 hash generated at
              the time of receipt to verify the message has not been altered
            </li>
          </ul>
          <p>
            We store original messages in their unmodified form. We never edit,
            alter, or delete original message content once received.
          </p>

          <h3>2.3 AI-Generated Analysis</h3>
          <p>For each incoming message, our AI system generates:</p>
          <ul>
            <li>
              <strong>Safe summaries</strong> — neutral, filtered versions of
              the message at your chosen summary level
            </li>
            <li>
              <strong>Emotional intensity scores</strong> — a 1–5 rating of the
              message&rsquo;s emotional content
            </li>
            <li>
              <strong>Pattern analysis</strong> — identification of
              communication patterns such as manipulation tactics, escalation
              trends, and behavioral flags
            </li>
            <li>
              <strong>AI model and prompt version metadata</strong> — records of
              which AI version was used for each analysis, for reproducibility
            </li>
          </ul>
          <p>
            AI-generated content is stored separately from original messages and
            is clearly labeled as AI-generated.
          </p>

          <h3>2.4 Payment Information</h3>
          <ul>
            <li>
              Payments are processed by <strong>Stripe</strong>. We do not
              receive, store, or have access to your full credit card number,
              CVV, or other sensitive payment card data.
            </li>
            <li>
              We receive from Stripe: confirmation of payment, subscription
              status, and a truncated card identifier (e.g., last four digits)
              for your reference.
            </li>
          </ul>

          <h3>2.5 Usage Data</h3>
          <p>We collect basic analytics to improve the Service:</p>
          <ul>
            <li>
              App usage patterns (which features you use, session duration)
            </li>
            <li>Device type and browser information</li>
            <li>Error and performance logs</li>
          </ul>
          <p>
            We do <strong>not</strong> collect:
          </p>
          <ul>
            <li>GPS location or geolocation data</li>
            <li>Contacts from your phone</li>
            <li>Data from other apps on your device</li>
            <li>Browsing history outside of FilterParent</li>
          </ul>

          <h3>2.6 Push Notification Tokens</h3>
          <p>
            If you enable push notifications, we store a device token to send
            you alerts (e.g., new message received, high-severity message
            flagged). You can disable notifications at any time in your device
            settings.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>
              <strong>Provide the Service</strong> — receive messages, generate
              AI summaries, store evidence, enable replies
            </li>
            <li>
              <strong>Protect you</strong> — flag escalating or threatening
              language patterns, generate pattern reports
            </li>
            <li>
              <strong>Maintain your account</strong> — process payments, send
              account-related communications
            </li>
            <li>
              <strong>Improve the Service</strong> — analyze aggregate,
              anonymized usage patterns to improve features and AI accuracy
            </li>
            <li>
              <strong>Comply with the law</strong> — respond to valid legal
              process (subpoenas, court orders) when required
            </li>
            <li>
              <strong>Communicate with you</strong> — send service updates,
              security alerts, and (with your consent) product announcements
            </li>
          </ul>
          <p>
            We will <strong>never</strong>:
          </p>
          <ul>
            <li>Sell your personal information to anyone</li>
            <li>
              Use your message content for advertising or marketing purposes
            </li>
            <li>
              Share your data with the sender of messages processed through
              FilterParent
            </li>
            <li>Use your data to train AI models (see Section 5 below)</li>
          </ul>

          <h2>4. How We Protect Your Information</h2>
          <p>
            Given the sensitive nature of the data we handle, we implement
            strong security measures:
          </p>

          <h3>Encryption</h3>
          <ul>
            <li>
              <strong>In transit:</strong> All data transmitted between your
              device and our servers is encrypted using TLS (Transport Layer
              Security)
            </li>
            <li>
              <strong>At rest:</strong> Stored messages and analysis data are
              encrypted using industry-standard encryption
            </li>
          </ul>

          <h3>Evidence Integrity</h3>
          <ul>
            <li>
              Original messages are hashed (SHA-256) at the time of receipt
            </li>
            <li>
              Messages are stored in immutable format — they cannot be modified
              after receipt
            </li>
            <li>Audit logs track all access to stored message data</li>
            <li>
              Timestamps are generated server-side using synchronized clocks,
              not device clocks
            </li>
          </ul>

          <h3>Access Controls</h3>
          <ul>
            <li>
              Role-based access controls limit who within our organization can
              access user data
            </li>
            <li>
              Access to message content requires elevated authorization and is
              logged
            </li>
            <li>
              We follow the principle of least privilege — staff access only the
              data necessary for their role
            </li>
          </ul>

          <h3>Security Practices</h3>
          <ul>
            <li>Regular security assessments and monitoring</li>
            <li>
              Secure credential management (no plaintext storage of secrets)
            </li>
            <li>Incident response procedures in place</li>
          </ul>
          <p>
            <strong>No system is 100% secure.</strong> While we implement
            industry-standard protections, we cannot guarantee absolute
            security. We will notify you promptly and in accordance with
            applicable law if a security incident affects your data.
          </p>

          <h2>5. AI Processing Disclosure</h2>
          <p>
            FilterParent uses <strong>Anthropic&rsquo;s Claude API</strong> to
            analyze incoming messages and generate summaries.
          </p>
          <p>
            Here is what you should know about how AI processing works:
          </p>
          <ul>
            <li>
              <strong>What is sent to the API:</strong> The text content of
              incoming messages is sent to Anthropic&rsquo;s Claude API for
              analysis.
            </li>
            <li>
              <strong>What Anthropic does with your data:</strong> Under
              Anthropic&rsquo;s API terms, data submitted through the API is{" "}
              <strong>not retained</strong> by Anthropic after processing and is{" "}
              <strong>not used to train AI models</strong>. The data is
              processed and the result is returned to us — Anthropic does not
              keep a copy.
            </li>
            <li>
              <strong>Data Processing Agreement:</strong> We maintain a data
              processing agreement (DPA) with Anthropic that contractually
              requires them to handle your data in accordance with our privacy
              commitments.
            </li>
            <li>
              <strong>No human review by Anthropic:</strong> Your messages are
              processed by AI, not reviewed by Anthropic employees.
            </li>
            <li>
              <strong>AI limitations:</strong> AI analysis is a tool to help
              you, not a perfect system. Summaries may occasionally miss
              nuances, mischaracterize tone, or fail to detect certain patterns.
              Always review original messages for important decisions.
            </li>
          </ul>

          <h2>6. Third-Party Services</h2>
          <p>
            We use the following third-party services to operate FilterParent.
            Each receives only the data necessary for their function:
          </p>

          <h3>Twilio (Messaging)</h3>
          <ul>
            <li>
              <strong>What they receive:</strong> Message content, sender and
              recipient phone numbers, message metadata
            </li>
            <li>
              <strong>Purpose:</strong> Twilio provides the phone number
              infrastructure that receives and sends text messages
            </li>
            <li>
              <strong>Their data handling:</strong> Twilio stores message records
              in accordance with their privacy policy and responds to valid
              legal process. Twilio is a PCI-DSS and SOC 2 compliant
              telecommunications provider.
            </li>
          </ul>

          <h3>Anthropic (AI Processing)</h3>
          <ul>
            <li>
              <strong>What they receive:</strong> Message text content for
              analysis
            </li>
            <li>
              <strong>Purpose:</strong> AI-powered message summarization,
              emotional intensity scoring, and pattern detection
            </li>
            <li>
              <strong>Their data handling:</strong> API inputs are not retained
              after processing and are not used for model training. Governed by
              our data processing agreement.
            </li>
          </ul>

          <h3>Stripe (Payments)</h3>
          <ul>
            <li>
              <strong>What they receive:</strong> Your payment card information,
              billing address, email
            </li>
            <li>
              <strong>Purpose:</strong> Subscription billing and payment
              processing
            </li>
            <li>
              <strong>Their data handling:</strong> Stripe is PCI-DSS Level 1
              compliant (the highest level). They store and process payment data
              under their own privacy policy. We never see or store your full
              card number.
            </li>
          </ul>
          <p>
            We select third-party partners who maintain strong security and
            privacy practices. However, we are not responsible for the privacy
            practices of third parties. We encourage you to review their privacy
            policies.
          </p>

          <h2>7. Data Retention</h2>

          <h3>While Your Account Is Active</h3>
          <ul>
            <li>
              <strong>Original messages and AI analysis</strong> are retained for
              as long as your account is active
            </li>
            <li>
              <strong>Payment records</strong> are retained as required for tax
              and accounting purposes
            </li>
            <li>
              <strong>Usage analytics</strong> are retained in anonymized form
            </li>
          </ul>

          <h3>After Account Deletion</h3>
          <ul>
            <li>
              When you delete your account, we will permanently delete your
              personal data within <strong>30 days</strong>
            </li>
            <li>
              This includes: account information, stored messages, AI analysis,
              and notification tokens
            </li>
            <li>
              <strong>Exception:</strong> We may retain limited data as required
              by law (e.g., billing records for tax purposes) or to comply with
              a valid legal hold
            </li>
            <li>
              Before deleting your account, we strongly recommend exporting your
              evidence data — once deleted, it cannot be recovered
            </li>
          </ul>

          <h3>Evidence Export Before Deletion</h3>
          <ul>
            <li>
              You can export your stored messages and analysis at any time
              through your account settings
            </li>
            <li>
              Exports include original messages, AI summaries, metadata, and
              hash verification data in a format designed for legal use
            </li>
          </ul>

          <h2>8. Your Rights</h2>
          <p>You have the following rights regarding your data:</p>

          <h3>Access</h3>
          <p>
            You can access all data associated with your account at any time
            through the app, including original messages, AI summaries, and
            pattern reports.
          </p>

          <h3>Export</h3>
          <p>
            You can export your data in a portable format at any time. Evidence
            exports include all metadata and verification information needed for
            potential legal use.
          </p>

          <h3>Deletion</h3>
          <p>
            You can request deletion of your account and all associated data at
            any time. Contact us at hello@fortifiedfreedom.org or use the
            account deletion feature in settings.
          </p>

          <h3>Correction</h3>
          <p>
            You can update your account information (email, preferences,
            settings) at any time through the app.
          </p>

          <h3>Opt-Out of Communications</h3>
          <p>
            You can opt out of non-essential communications (product
            announcements) at any time. You will continue to receive essential
            account and security notifications.
          </p>

          <h2>9. Children&rsquo;s Privacy</h2>
          <p>
            FilterParent is intended for users who are{" "}
            <strong>18 years of age or older</strong>. We do not knowingly
            collect personal information from children under 13 in compliance
            with the Children&rsquo;s Online Privacy Protection Act (COPPA).
          </p>
          <p>
            If we become aware that we have collected personal information from
            a child under 13, we will promptly delete that information. If you
            believe a child under 13 has provided us with personal information,
            please contact us at hello@fortifiedfreedom.org.
          </p>

          <h2>10. State-Specific Disclosures</h2>

          <h3>10.1 California Residents (CCPA/CPRA)</h3>
          <p>
            If you are a California resident, you have additional rights under
            the California Consumer Privacy Act (CCPA) and California Privacy
            Rights Act (CPRA):
          </p>
          <p>
            <strong>Your Rights:</strong>
          </p>
          <ul>
            <li>
              <strong>Right to Know:</strong> You can request details about the
              categories and specific pieces of personal information we have
              collected about you
            </li>
            <li>
              <strong>Right to Delete:</strong> You can request deletion of your
              personal information, subject to certain exceptions
            </li>
            <li>
              <strong>Right to Correct:</strong> You can request correction of
              inaccurate personal information
            </li>
            <li>
              <strong>Right to Opt-Out of Sale:</strong> We do{" "}
              <strong>not sell</strong> your personal information. We have never
              sold personal information and have no plans to do so.
            </li>
            <li>
              <strong>
                Right to Limit Use of Sensitive Personal Information:
              </strong>{" "}
              You can limit how we use sensitive personal information. Messages
              processed through FilterParent may constitute sensitive personal
              information under the CPRA.
            </li>
            <li>
              <strong>Right to Non-Discrimination:</strong> We will not
              discriminate against you for exercising your privacy rights
            </li>
          </ul>
          <p>
            <strong>Categories of Information We Collect:</strong>
          </p>
          <ul>
            <li>Identifiers (email address)</li>
            <li>
              Electronic communications (messages received through Twilio)
            </li>
            <li>Commercial information (subscription and payment history)</li>
            <li>Internet/electronic network activity (usage analytics)</li>
          </ul>
          <p>
            <strong>How to Exercise Your Rights:</strong> Email
            hello@fortifiedfreedom.org with your request. We will verify your
            identity and respond within 45 days as required by law.
          </p>

          <h3>10.2 Other State Privacy Laws</h3>
          <p>
            We are committed to complying with state privacy laws across the
            United States, including but not limited to:
          </p>
          <ul>
            <li>
              <strong>Colorado Privacy Act (CPA):</strong> Colorado residents
              may exercise rights to access, correct, delete, and opt out of
              certain data processing.
            </li>
            <li>
              <strong>Connecticut Data Privacy Act (CTDPA):</strong> Connecticut
              residents have similar rights to access, correct, delete, and opt
              out.
            </li>
            <li>
              <strong>
                Virginia Consumer Data Protection Act (VCDPA):
              </strong>{" "}
              Virginia residents may exercise rights to access, correct, delete,
              and opt out of targeted advertising and profiling.
            </li>
            <li>
              <strong>Utah Consumer Privacy Act (UCPA):</strong> Utah residents
              have rights to access and delete their personal data.
            </li>
          </ul>
          <p>
            <strong>For all state privacy requests,</strong> email
            hello@fortifiedfreedom.org. We will respond within the timeframes
            required by your state&rsquo;s law.
          </p>
          <p>
            <strong>We do not engage in:</strong>
          </p>
          <ul>
            <li>Sale of personal information</li>
            <li>Targeted advertising based on your data</li>
            <li>
              Profiling that produces legal or similarly significant effects
            </li>
          </ul>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make
            material changes:
          </p>
          <ul>
            <li>
              We will update the &ldquo;Last Updated&rdquo; date at the top
            </li>
            <li>
              We will notify you by email or through the Service at least 14
              days before the changes take effect
            </li>
            <li>
              We will make the previous version available for your review
            </li>
          </ul>
          <p>
            Your continued use of FilterParent after the effective date of a
            revised policy constitutes acceptance of the changes. If you do not
            agree, you may delete your account before the changes take effect.
          </p>

          <h2>12. Contact Information</h2>
          <p>
            If you have questions about this Privacy Policy or want to exercise
            your privacy rights, contact us:
          </p>
          <p>
            <strong>Fortified Freedom Network</strong>
            <br />
            Email: hello@fortifiedfreedom.org
          </p>
          <p>
            For privacy-specific requests, please include &ldquo;Privacy
            Request&rdquo; in your email subject line so we can route your
            request appropriately.
          </p>

          <hr />

          <p>
            <strong>National Domestic Violence Hotline:</strong> 1-800-799-7233
            (available 24/7)
          </p>
        </article>
      </main>
    </>
  );
}
