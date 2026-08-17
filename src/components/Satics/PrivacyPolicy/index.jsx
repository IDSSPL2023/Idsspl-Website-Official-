"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import css from "../statics.module.scss";

const PrivacyPolicy = () => {
  const router = useRouter();

  return (
    <main className={css.main}>
      <div className={css.header}>
        {/* <div className={css.back} onClick={() => router.back()}>
          <ArrowLeft size={20} />
        </div> */}
        <h1>Privacy Policy</h1>
      </div>

      <div className={css.content}>
        <p className={css.meta}>
          <strong>Effective Date:</strong> 30th March 2026
        </p>

        <p>
          IDSSPL technologies Pvt. Ltd. respects your privacy and is committed to protecting the
          personal information you share with us. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when
          you visit our website or interact with our services.
        </p>

        <p>
          By accessing or using our website, you agree to the practices
          described in this policy.
        </p>

        <h2>1. Information We Collect</h2>

        <p>We may collect the following types of information:</p>

        <p>
          <strong>Personal Information</strong>
        </p>

        <p>
          When you interact with our website, request information, or contact
          us, we may collect personal details such as:
        </p>

        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Job title</li>
        </ul>

        <p>
          <strong>Technical Information</strong>
        </p>

        <p>
          We may automatically collect certain technical information when you
          visit our website, including:
        </p>

        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Pages visited and browsing activity</li>
          <li>Cookies and tracking technologies</li>
        </ul>

        <h2>2. How We Use Your Information</h2>

        <p>The information we collect may be used for the following purposes:</p>

        <ul>
          <li>To respond to your inquiries or requests</li>
          <li>To provide information about our services and solutions</li>
          <li>To improve our website functionality and user experience</li>
          <li>To analyze website traffic and usage patterns</li>
          <li>
            To communicate updates, business information, or relevant service
            offerings
          </li>
        </ul>

        <h2>3. Cookies and Tracking Technologies</h2>

        <p>
          Our website may use cookies and similar tracking technologies to
          enhance user experience and analyze website traffic.
        </p>

        <p>Cookies help us:</p>

        <ul>
          <li>Understand user behavior</li>
          <li>Improve website performance</li>
          <li>Personalize website content</li>
        </ul>

        <p>
          You can modify your browser settings to decline cookies if you prefer.
        </p>

        <h2>4. Data Security</h2>

        <p>
          IDSSPL takes appropriate technical and organizational measures to
          protect your information from unauthorized access, misuse, loss, or
          disclosure.
        </p>

        <p>
          We implement industry-standard security practices to ensure the
          protection of data transmitted through our website.
        </p>

        <h2>5. Third-Party Disclosure</h2>

        <p>
          We do not sell, trade, or rent your personal information to third
          parties.
        </p>

        <p>
          However, we may share information with trusted partners or service
          providers who assist us in operating our website or delivering our
          services, provided they agree to maintain confidentiality and data
          security.
        </p>

        <h2>6. Third-Party Links</h2>

        <p>
          Our website may contain links to third-party websites. IDSSPL is not
          responsible for the privacy practices or content of those external
          websites. We encourage users to review the privacy policies of those
          websites.
        </p>

        <h2>7. Your Privacy Rights</h2>

        <p>
          You may request access, correction, or deletion of your personal
          information by contacting us directly. We will make reasonable efforts
          to respond to such requests in accordance with applicable laws.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>

        <p>
          IDSSPL may update this Privacy Policy from time to time to reflect
          changes in legal requirements or business practices. Any updates will
          be posted on this page with the revised effective date.
        </p>

        <h2>9. Contact Us</h2>

        <p>
          If you have any questions regarding this Privacy Policy or our data
          practices, please contact us:
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

export default PrivacyPolicy;