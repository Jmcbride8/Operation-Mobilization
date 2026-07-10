import React from "react";
import LegalLayout from "@/components/om/LegalLayout";

export default function CookiePolicy() {
  return (
    <LegalLayout title="COOKIE POLICY" lastUpdated="JULY 10, 2026">
      <p>
        This Cookie Policy explains how Operation Mobilization ("OM") uses cookies and similar technologies on our website.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">1. What Are Cookies</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They help us remember your
        preferences, analyze site traffic, and improve your browsing experience.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">2. Types of Cookies We Use</h2>
      <p>
        <span className="text-signal-white">Essential cookies</span> — necessary for the site to function properly.
      </p>
      <p>
        <span className="text-signal-white">Analytics cookies</span> — help us understand how visitors interact with the site.
      </p>
      <p>
        <span className="text-signal-white">Preference cookies</span> — remember your settings, such as theme or language.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">3. Managing Cookies</h2>
      <p>
        You can control or delete cookies through your browser settings. Disabling certain cookies may affect
        functionality of the site.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">4. Third-Party Services</h2>
      <p>
        We may use third-party services (e.g., analytics or payment processors) that set their own cookies. These
        parties have their own privacy policies governing their use of cookies.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">5. Contact Us</h2>
      <p>
        For questions about our use of cookies, please contact OM International through our official communication channels.
      </p>
    </LegalLayout>
  );
}