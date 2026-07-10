import React from "react";
import LegalLayout from "@/components/om/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="PRIVACY POLICY" lastUpdated="JULY 10, 2026">
      <p>
        Operation Mobilization ("OM," "we," "us," or "our") respects your privacy. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you visit our website or engage with our ministry.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">1. Information We Collect</h2>
      <p>
        We may collect personal information you voluntarily provide, such as your name, email address, phone number,
        mailing address, and donation details. We may also automatically collect technical data such as IP address,
        browser type, and usage patterns through cookies and similar technologies.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">2. How We Use Your Information</h2>
      <p>
        We use your information to process donations, send communications, respond to inquiries, facilitate missionary
        applications, provide pastoral care, and improve our services. We do not sell your personal information.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">3. Sharing of Information</h2>
      <p>
        We may share your information with trusted third-party service providers who assist us in operating our ministry
        (e.g., payment processors, email platforms), and when required by law. All such parties are bound by
        confidentiality obligations.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">4. Data Security</h2>
      <p>
        We implement reasonable technical and organizational measures to protect your information. However, no method of
        transmission over the internet is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">5. Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal information. To exercise these rights,
        contact us using the information below.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">6. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact OM International at our headquarters or through
        our official communication channels.
      </p>
    </LegalLayout>
  );
}