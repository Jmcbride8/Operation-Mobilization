import React from "react";
import LegalLayout from "@/components/om/LegalLayout";

export default function TermsOfService() {
  return (
    <LegalLayout title="TERMS OF SERVICE" lastUpdated="JULY 10, 2026">
      <p>
        These Terms of Service ("Terms") govern your use of the Operation Mobilization website and related services.
        By accessing or using our site, you agree to be bound by these Terms.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">1. Use of Our Services</h2>
      <p>
        You may use our site for lawful purposes only. You agree not to use the site in any way that could damage,
        disable, overburden, or impair the site or interfere with another party's use.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">2. Donations</h2>
      <p>
        All donations are voluntary and non-refundable unless otherwise stated. OM reserves the right to allocate funds
        as needed to advance its mission, though we strive to honor donor designations whenever possible.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">3. Intellectual Property</h2>
      <p>
        All content on this site, including text, graphics, logos, and images, is the property of Operation Mobilization
        or its licensors and is protected by copyright and trademark laws. You may not reproduce or distribute content
        without prior written permission.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">4. Missionary Applications</h2>
      <p>
        Submission of an application to serve with OM does not guarantee acceptance. OM reserves the right to accept or
        decline applications at its sole discretion based on its internal criteria and ministry needs.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">5. Limitation of Liability</h2>
      <p>
        OM shall not be liable for any indirect, incidental, or consequential damages arising from your use of the site
        or participation in our programs. Your use of the site is at your own risk.
      </p>

      <h2 className="text-signal-white font-heading font-bold text-base tracking-wide pt-4">6. Changes to These Terms</h2>
      <p>
        We may update these Terms at any time. Continued use of the site after changes constitutes acceptance of the
        revised Terms.
      </p>
    </LegalLayout>
  );
}