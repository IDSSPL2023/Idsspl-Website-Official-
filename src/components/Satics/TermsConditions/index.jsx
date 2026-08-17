"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import css from "../statics.module.scss";

const TermsCondition = () => {
  const router = useRouter();

  return (
    <main className={css.main}>
      <div className={css.header}>
        {/* <div className={css.back} onClick={() => router.back()}>
          <ArrowLeft size={20} />
        </div> */}
        <h1>Terms & Conditions</h1>
      </div>

      <div className={css.content}>
        <p className={css.meta}>
          <strong>Effective Date:</strong> 30th March 2026
        </p>

        <p>
          Welcome to IDSSPL technologies Pvt. Ltd. By accessing or using our website and services, you
          agree to comply with and be bound by the following Terms &
          Conditions. If you do not agree with these terms, please do not use
          our website.
        </p>

        <h2>1. Use of Website</h2>

        <p>
          The content provided on this website is for general informational
          purposes only. By using this website, you agree to:
        </p>

        <ul>
          <li>Use the website only for lawful purposes</li>
          <li>
            Not engage in any activity that may harm, disrupt, or interfere
            with the website or its services
          </li>
          <li>
            Not attempt unauthorized access to any part of the website or
            related systems
          </li>
        </ul>

        <h2>2. Intellectual Property Rights</h2>

        <p>
          All content on this website, including text, graphics, logos, images,
          and software, is the property of IDSSPL or its licensors and is
          protected by applicable intellectual property laws.
        </p>

        <p>You may not:</p>

        <ul>
          <li>
            Copy, reproduce, distribute, or modify any content without prior
            written consent
          </li>
          <li>
            Use our branding or materials for commercial purposes without
            authorization
          </li>
        </ul>

        <h2>3. Services Disclaimer</h2>

        <p>
          IDSSPL provides technology solutions and services as described on the
          website. While we strive to ensure accuracy, we do not guarantee
          that:
        </p>

        <ul>
          <li>
            The information on the website is complete or up-to-date
          </li>
          <li>
            The services will meet all specific business requirements without
            customization
          </li>
        </ul>

        <p>
          All services are subject to separate agreements, proposals, or
          contracts.
        </p>

        <h2>4. Limitation of Liability</h2>

        <p>
          IDSSPL shall not be held liable for any direct, indirect, incidental,
          or consequential damages arising from:
        </p>

        <ul>
          <li>Use or inability to use the website</li>
          <li>Errors or omissions in website content</li>
          <li>
            Any unauthorized access to or use of our servers or data
          </li>
        </ul>

        <p>Use of the website is at your own risk.</p>

        <h2>5. Third-Party Links</h2>

        <p>
          Our website may contain links to third-party websites. These links
          are provided for convenience only. IDSSPL does not endorse or take
          responsibility for the content, policies, or practices of third-party
          websites.
        </p>

        <h2>6. User Submissions</h2>

        <p>
          If you submit any information through forms, emails, or other means:
        </p>

        <ul>
          <li>
            You agree that the information provided is accurate and lawful
          </li>
          <li>
            You grant IDSSPL the right to use such information for communication
            and service-related purposes
          </li>
        </ul>

        <h2>7. Privacy</h2>

        <p>
          Your use of the website is also governed by our Privacy Policy. By
          using the website, you consent to the collection and use of
          information as described in the Privacy Policy.
        </p>

        <h2>8. Termination of Use</h2>

        <p>
          We reserve the right to suspend or terminate access to our website at
          any time without prior notice if we believe you have violated these
          Terms & Conditions.
        </p>

        <h2>9. Changes to Terms</h2>

        <p>
          IDSSPL may update these Terms & Conditions from time to time. Any
          changes will be posted on this page with an updated effective date.
          Continued use of the website constitutes acceptance of the revised
          terms.
        </p>

        <h2>10. Governing Law</h2>

        <p>
          These Terms & Conditions shall be governed by and interpreted in
          accordance with the laws of India. Any disputes arising shall be
          subject to the jurisdiction of the courts in [Insert City].
        </p>

        <h2>11. Contact Us</h2>

        <p>
          If you have any questions regarding these Terms & Conditions, please
          contact us:
        </p>

        <p>
          IDSSPL technologies Pvt. Ltd.
          <br />
          Email: info@idsspl.com
          <br />
          Phone: (0231) 2530950
        </p>
      </div>
    </main>
  );
};

export default TermsCondition;