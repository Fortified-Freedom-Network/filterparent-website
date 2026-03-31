import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — FilterParent",
  description:
    "FilterParent Terms of Service. Read our terms and conditions for using the FilterParent service.",
};

export default function TermsOfService() {
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
          <h1>FilterParent — Terms of Service</h1>
          <p><strong>Last Updated:</strong> March 31, 2026</p>

          <h2>1. Overview and Acceptance of Terms</h2>
          <p>
            Welcome to FilterParent, a service of Fortified Freedom Network
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By
            creating an account or using FilterParent (&ldquo;the
            Service&rdquo;), you agree to these Terms of Service
            (&ldquo;Terms&rdquo;). If you do not agree, do not use the Service.
          </p>
          <p>
            These Terms are a legal agreement between you and Fortified Freedom
            Network. Please read them carefully.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            FilterParent is an AI-powered messaging platform designed for
            individuals in high-conflict separated relationships. The Service:
          </p>
          <ul>
            <li>
              Provides a dedicated phone number (powered by Twilio) that
              receives text messages on your behalf
            </li>
            <li>
              Uses artificial intelligence (powered by Anthropic&rsquo;s Claude)
              to analyze incoming messages and generate safe, neutral summaries
            </li>
            <li>
              Stores original messages in an encrypted evidence vault with
              timestamps and authentication metadata
            </li>
            <li>Allows you to reply to messages through the platform</li>
            <li>Provides pattern analysis and documentation tools</li>
          </ul>
          <p>
            FilterParent is a Progressive Web App (PWA) accessible at
            app.filterparent.com.
          </p>

          <h2>3. Account Creation and Eligibility</h2>
          <p>To use FilterParent, you must:</p>
          <ul>
            <li>
              <strong>Be at least 18 years old.</strong> FilterParent is not
              available to minors.
            </li>
            <li>Create an account with a valid email address</li>
            <li>
              Provide accurate and complete registration information
            </li>
            <li>
              Be the intended recipient of the messages you route through
              FilterParent
            </li>
          </ul>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials. You agree to notify us immediately if you
            become aware of any unauthorized use of your account.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>By using FilterParent, you agree to:</p>
          <ul>
            <li>
              Use the Service only for messages where you are the intended
              recipient
            </li>
            <li>
              Provide accurate information during registration and maintain your
              account information
            </li>
            <li>
              Comply with all applicable federal, state, and local laws
            </li>
            <li>Not share your account credentials with others</li>
            <li>
              Review original messages when important decisions (legal, safety,
              logistical) depend on their content
            </li>
            <li>
              Understand that AI-generated summaries are aids, not replacements
              for reading the originals
            </li>
            <li>
              Take responsibility for understanding the communication recording
              and storage laws in your jurisdiction
            </li>
          </ul>

          <h2>5. Subscription and Billing</h2>

          <h3>Plans</h3>
          <p>FilterParent offers the following paid subscription tiers:</p>
          <ul>
            <li>
              <strong>Shield Pro:</strong> $9.99 per month
            </li>
            <li>
              <strong>Guardian Elite:</strong> $14.99 per month
            </li>
          </ul>

          <h3>Billing</h3>
          <ul>
            <li>
              All payments are processed securely through Stripe. We do not
              store your credit card information.
            </li>
            <li>
              Subscriptions are billed monthly and automatically renew at the
              end of each billing period unless cancelled.
            </li>
            <li>
              You authorize us to charge your selected payment method on a
              recurring basis.
            </li>
          </ul>

          <h3>Cancellation</h3>
          <ul>
            <li>
              You may cancel your subscription at any time through your account
              settings.
            </li>
            <li>
              Cancellation takes effect at the end of your current billing
              period. You will retain access to paid features until that date.
            </li>
            <li>No refunds are provided for partial billing periods.</li>
          </ul>

          <h3>Price Changes</h3>
          <ul>
            <li>
              We may change subscription prices with at least 30 days&rsquo;
              advance notice. Continued use of the Service after a price change
              constitutes acceptance of the new price.
            </li>
          </ul>

          <h2>6. Free Trial Terms</h2>
          <p>
            We may offer a free trial period for new users. During the free
            trial:
          </p>
          <ul>
            <li>
              You will have access to paid features for the duration of the
              trial
            </li>
            <li>
              You may be required to provide payment information to start a
              trial
            </li>
            <li>
              If you do not cancel before the trial ends, your subscription will
              automatically convert to a paid plan at the applicable rate
            </li>
            <li>
              Free trials are limited to one per person. We reserve the right to
              revoke trial access if we detect abuse of this offer.
            </li>
          </ul>

          <h2>7. AI Limitations and Disclaimers</h2>
          <p>
            FilterParent uses artificial intelligence to analyze messages and
            generate summaries.{" "}
            <strong>You should understand the following:</strong>
          </p>
          <ul>
            <li>
              <strong>AI is not perfect.</strong> Our system is designed to
              identify patterns of manipulation, hostility, and abuse, but it
              may occasionally mischaracterize a message, miss a nuance, or flag
              something incorrectly.
            </li>
            <li>
              <strong>
                Always check the originals for important communications.
              </strong>{" "}
              AI summaries are designed to reduce emotional harm, not to replace
              your judgment. For any communication involving safety, legal
              matters, scheduling, medical information, or financial decisions,
              review the original message in the evidence vault.
            </li>
            <li>
              <strong>AI analysis may evolve.</strong> We continually improve our
              AI models. The analysis methodology may change over time, which
              could affect how messages are summarized or scored.
            </li>
            <li>
              <strong>No guarantee of threat detection.</strong> While our system
              is designed to flag escalating or threatening language, it cannot
              guarantee detection of every threat. If you feel unsafe, contact
              emergency services immediately.
            </li>
          </ul>

          <h2>8. Not Legal Advice</h2>
          <p>
            <strong>
              FilterParent is a technology tool, not a legal service.
            </strong>{" "}
            Nothing provided by FilterParent — including AI analysis, pattern
            reports, abuse scoring, or evidence exports — constitutes legal
            advice. Our analysis is not a substitute for guidance from a
            licensed attorney.
          </p>
          <p>
            We strongly recommend consulting with a family law attorney or
            domestic violence advocate regarding your specific legal situation,
            evidence strategy, and rights.
          </p>

          <h2>9. Not a Safety Device</h2>
          <p>
            <strong>
              FilterParent is not a substitute for emergency services, law
              enforcement, or safety planning.
            </strong>{" "}
            If you are in immediate danger, call 911 or your local emergency
            number.
          </p>
          <p>
            FilterParent is designed for individuals who are physically
            separated from a high-conflict contact but still required to
            communicate with them. It is an emotional protection and
            documentation tool — not a physical safety device.
          </p>
          <p>
            We encourage all users to work with a domestic violence advocate to
            develop a comprehensive safety plan. The National Domestic Violence
            Hotline is available 24/7 at 1-800-799-7233.
          </p>

          <h2>10. Evidence Storage Disclaimer</h2>
          <p>
            FilterParent stores original messages in an encrypted format
            designed to support potential use as evidence. Our storage system
            includes timestamps, unique message identifiers, cryptographic
            hashes, and chain-of-custody metadata.
          </p>
          <p>
            <strong>
              However, we cannot guarantee that any court will accept
              FilterParent records as evidence.
            </strong>{" "}
            Admissibility of evidence is determined by individual courts and
            judges based on the rules of evidence in their jurisdiction. Factors
            outside our control — including local rules, judicial discretion,
            and opposing counsel&rsquo;s challenges — may affect whether records
            are admitted.
          </p>
          <p>
            We recommend discussing the use of FilterParent records with your
            attorney before relying on them for court proceedings.
          </p>

          <h2>11. Third-Party Services</h2>
          <p>
            FilterParent relies on the following third-party services to
            operate:
          </p>

          <h3>Twilio (Messaging Infrastructure)</h3>
          <p>
            Twilio provides the phone number and messaging infrastructure that
            receives and sends text messages on your behalf. Twilio processes
            message content to deliver it to our system. Twilio&rsquo;s handling
            of data is governed by their own terms and privacy policy.
          </p>

          <h3>Anthropic (AI Processing)</h3>
          <p>
            Messages are processed using Anthropic&rsquo;s Claude API to
            generate summaries and analysis. Under Anthropic&rsquo;s API terms,
            message content submitted through the API is{" "}
            <strong>not retained by Anthropic</strong> after processing and is{" "}
            <strong>not used to train AI models</strong>. We maintain a data
            processing agreement with Anthropic.
          </p>

          <h3>Stripe (Payment Processing)</h3>
          <p>
            Stripe handles all payment processing. We do not store, process, or
            have access to your full credit card number. Stripe&rsquo;s handling
            of payment data is governed by their own terms and PCI-DSS
            compliance standards.
          </p>
          <p>
            We are not responsible for the practices of third-party service
            providers, but we select partners who maintain strong data
            protection standards.
          </p>

          <h2>12. Data Security Commitment</h2>
          <p>
            We take the security of your data seriously. Our security measures
            include:
          </p>
          <ul>
            <li>Encryption of message data at rest and in transit</li>
            <li>
              Cryptographic hashing of stored messages for integrity
              verification
            </li>
            <li>
              Role-based access controls limiting who can access user data
            </li>
            <li>Regular security assessments</li>
            <li>No plaintext storage of sensitive credentials</li>
          </ul>
          <p>
            While we implement industry-standard security measures,{" "}
            <strong>
              no system is completely immune to security incidents.
            </strong>{" "}
            We will notify you in accordance with applicable law if a data
            breach affects your information.
          </p>

          <h2>13. Acceptable Use</h2>
          <p>
            You agree <strong>not</strong> to use FilterParent to:
          </p>
          <ul>
            <li>
              <strong>Harass, stalk, or surveil</strong> another person.
              FilterParent is a protective tool for message recipients, not a
              surveillance tool.
            </li>
            <li>
              Monitor communications of someone who has not authorized you to do
              so
            </li>
            <li>Intercept or access messages not addressed to you</li>
            <li>Use the Service in any way that violates applicable law</li>
            <li>
              Attempt to reverse-engineer, decompile, or disassemble any part of
              the Service
            </li>
            <li>Interfere with or disrupt the Service or its infrastructure</li>
            <li>
              Use automated systems (bots, scrapers) to access the Service
              without our written permission
            </li>
            <li>
              Create multiple accounts to abuse free trials or other offers
            </li>
            <li>
              Misrepresent the Service&rsquo;s AI analysis as professional
              legal, psychological, or safety advice to others
            </li>
            <li>
              Use evidence exports or reports to harass or intimidate another
              person
            </li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that violate
            these terms.
          </p>

          <h2>14. Intellectual Property</h2>
          <p>
            All content, features, and functionality of FilterParent — including
            but not limited to text, graphics, logos, software, AI models and
            prompts, and the overall design of the Service — are owned by
            Fortified Freedom Network and are protected by copyright, trademark,
            and other intellectual property laws.
          </p>
          <p>
            <strong>Your content:</strong> You retain ownership of messages you
            send through the Service. You grant us a limited license to process,
            store, and analyze your content solely to provide the Service to
            you.
          </p>
          <p>
            <strong>AI-generated content:</strong> Summaries, analysis, and
            reports generated by our AI system are provided to you as part of
            the Service. You may use these outputs for personal, legal, and
            documentation purposes.
          </p>

          <h2>15. Limitation of Liability</h2>
          <p>
            <strong>To the maximum extent permitted by law:</strong>
          </p>
          <ul>
            <li>
              FilterParent and Fortified Freedom Network shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages arising from your use of the Service.
            </li>
            <li>
              Our total liability for any claim arising from these Terms or your
              use of the Service shall not exceed the amount you paid us in the
              12 months preceding the claim.
            </li>
            <li>
              We are not liable for any harm resulting from: AI
              mischaracterization of messages, failure to detect a threat, data
              loss due to circumstances beyond our control, actions of
              third-party service providers, or your reliance on AI analysis
              without reviewing original messages.
            </li>
          </ul>
          <p>
            <strong>
              We are not liable for the actions of any person whose messages are
              processed through FilterParent.
            </strong>{" "}
            Our Service provides tools and information — it does not control the
            behavior of others.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties
            or limitation of liability. In those jurisdictions, our liability is
            limited to the greatest extent permitted by law.
          </p>

          <h2>16. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Fortified Freedom
            Network, its officers, directors, employees, and agents from any
            claims, damages, losses, liabilities, and expenses (including
            reasonable attorneys&rsquo; fees) arising from:
          </p>
          <ul>
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any applicable law</li>
            <li>
              Any dispute between you and any person whose messages are
              processed through FilterParent
            </li>
          </ul>

          <h2>17. Termination</h2>

          <h3>By You</h3>
          <p>
            You may close your account at any time through your account settings
            or by contacting us at hello@fortifiedfreedom.org.
          </p>

          <h3>By Us</h3>
          <p>We may suspend or terminate your account if:</p>
          <ul>
            <li>You violate these Terms</li>
            <li>
              You use the Service for purposes inconsistent with its intended
              use (e.g., surveillance or harassment)
            </li>
            <li>We are required to do so by law</li>
            <li>We discontinue the Service</li>
          </ul>

          <h3>Effect of Termination</h3>
          <p>Upon termination:</p>
          <ul>
            <li>Your access to the Service will end</li>
            <li>
              You may request an export of your stored data for up to 30 days
              after termination
            </li>
            <li>
              After 30 days, your data will be permanently deleted in accordance
              with our data retention policy
            </li>
            <li>Any outstanding subscription fees remain due</li>
          </ul>

          <h2>18. Dispute Resolution</h2>

          <h3>Informal Resolution First</h3>
          <p>
            Before filing any formal proceeding, you agree to contact us at
            hello@fortifiedfreedom.org and attempt to resolve the dispute
            informally for at least 30 days.
          </p>

          <h3>Binding Arbitration</h3>
          <p>
            If we cannot resolve a dispute informally, you and Fortified Freedom
            Network agree to resolve it through{" "}
            <strong>binding arbitration</strong> administered by the American
            Arbitration Association (AAA) under its Consumer Arbitration Rules.
            Arbitration will take place in Wisconsin or, at your election,
            remotely via video conference.
          </p>

          <h3>Exceptions</h3>
          <p>The following are not subject to arbitration:</p>
          <ul>
            <li>Claims that may be brought in small claims court</li>
            <li>Actions to protect intellectual property rights</li>
            <li>Claims related to your physical safety</li>
          </ul>

          <h3>Class Action Waiver</h3>
          <p>
            You agree to resolve disputes with us on an individual basis.{" "}
            <strong>
              You waive any right to participate in a class action, class
              arbitration, or representative proceeding.
            </strong>
          </p>

          <h3>Fee Assistance</h3>
          <p>
            If the cost of arbitration creates a hardship, we will consider
            covering filing fees on a case-by-case basis. Contact us to discuss.
          </p>

          <h2>19. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. When we make material
            changes:
          </p>
          <ul>
            <li>
              We will update the &ldquo;Last Updated&rdquo; date at the top of
              this document
            </li>
            <li>
              We will notify you by email or through the Service at least 14
              days before the changes take effect
            </li>
            <li>
              Your continued use of the Service after the effective date
              constitutes acceptance of the updated Terms
            </li>
          </ul>
          <p>
            If you do not agree to updated Terms, you may close your account
            before they take effect.
          </p>

          <h2>20. Contact Information</h2>
          <p>If you have questions about these Terms, contact us:</p>
          <p>
            <strong>Fortified Freedom Network</strong>
            <br />
            Email: hello@fortifiedfreedom.org
          </p>

          <h2>21. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the{" "}
            <strong>State of Wisconsin</strong>, without regard to its conflict
            of law provisions. Any legal proceedings not subject to arbitration
            shall be brought in the state or federal courts located in
            Wisconsin.
          </p>
        </article>
      </main>
    </>
  );
}
