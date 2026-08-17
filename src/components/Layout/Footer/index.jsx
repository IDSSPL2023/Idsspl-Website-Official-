"use client";

import { useState } from "react";
import css from "./footer.module.scss";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import LeadSuccessPopup from "@/components/Popups/LeadSuccessPopup";
import { facebook, instagram, linkedIn, twitter } from "@/constants/socials";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
    }),

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await fetch("https://formspree.io/f/xvzvrgbl", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: values.email,
          }),
        });

        if (response.ok) {
          console.log("Newsletter Email:", values.email);

          // Show success popup
          setShowPopup(true);

          // Reset form
          resetForm();
        } else {
          const data = await response.json();
          console.error("Formspree error:", data);
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert("Network error. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <footer className={css.footer}>
      {/* Top CTA */}
      <div className={css.footerTop}>
        <div className={css.readyToGetStarted}>
          <div className={css.content}>
            <h2>Ready to get started?</h2>
            <p>
              If your current systems are slowing you down or limiting your
              operations, it may be time to take a closer look at your
              technology foundation.
            </p>
            <p>
              Connect with our team to explore how IDSSPL can support your
              banking and financial systems with reliable, well-structured
              solutions.
            </p>
          </div>

          <Link href="/contact-us" className={css.ctaButton}>
            Contact us
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className={css.footerMain}>
        <div className={css.container}>
          {/* Brand */}
          <div className={css.brand}>
            <div className={css.brandInfo}>
              <figure>
                <img src="/images/logoFooter.svg" alt="logo" loading="lazy"/>
              </figure>

              <p>
                Providing reliable and future-ready technology solutions to
                transform banking, payments, and financial operations.
              </p>
            </div>

            <div className={css.socials}>
              <Link href={`${twitter}`} target="_blank">
                <img loading="lazy" src="/icons/socials/x.svg" alt="Twitter" />
              </Link>

              <Link href={`${facebook}`} target="_blank">
                <img
                  loading="lazy"
                  src="/icons/socials/facebook.svg"
                  alt="Facebook"
                />
              </Link>

              <Link href={`${instagram}`} target="_blank">
                <img
                  loading="lazy"
                  src="/icons/socials/insta.svg"
                  alt="Instagram"
                />
              </Link>

              <Link href={`${linkedIn}`} target="_blank">
                <img
                  loading="lazy"
                  src="/icons/socials/linkdin.svg"
                  alt="LinkedIn"
                />
              </Link>
            </div>
          </div>

          {/* Company */}
          <nav className={css.content} aria-label="Company links">
            <h4>Company</h4>

            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">About us</Link>
              </li>

              <li>
                <Link href="/leadership">Leadership</Link>
              </li>

              <li>
                <Link href="/">Resources</Link>
              </li>

              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav className={css.content} aria-label="Services links">
            <h4>Services</h4>

            <ul>
              <li>
                <Link href="/core-banking-system">Core & Digital Banking Platforms</Link>
              </li>

              <li style={{ display: "none" }}>
                <Link href="/upi-imps">UPI, IMPS & ATM Switching Solutions</Link>
              </li>

              <li style={{ display: "none" }}>
                <Link href="/card-payment-management-system">Card & Payment Management Systems</Link>
              </li>

              <li style={{ display: "none" }}>
                <Link href="/financial-rick-and-complaince">Financial Risk & Compliance Platforms</Link>
              </li>

              <li style={{ display: "none" }}>
                <Link href="/reconciliation-and-settlement-engines">Reconciliation & Settlement Engines</Link>
              </li>

              <li style={{ display: "none" }}>
                <Link href="/secure-networking-infrastructure">Secure Networking & Infrastructure</Link>
              </li>
            </ul>
          </nav>

          {/* Policies */}
          <nav className={css.content} aria-label="Policies links">
            <h4>Policies</h4>

            <ul>
              <li>
                <Link href="/privacy-policy" target="_blank">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms-conditions" target="_blank">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div className={css.content}>
            <h4>Subscribe to Newsletter</h4>

            <form
              className={css.newsForm}
              onSubmit={formik.handleSubmit}
              noValidate
            >
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                aria-label="Email address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
                className={
                  formik.touched.email && formik.errors.email
                    ? css.errorInput
                    : ""
                }
              />

              <button type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Submitting..." : "Join"}
              </button>
            </form>

            {/* Validation Error */}
            {formik.touched.email && formik.errors.email && (
              <p className={css.errorText}>{formik.errors.email}</p>
            )}
          </div>
        </div>

        <hr className={css.divider} />

        <div className={css.copyright}>
          © Copyright 2026, All Rights Reserved by IDSSPL technologies private
          limited
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && <LeadSuccessPopup onClose={() => setShowPopup(false)} />}
    </footer>
  );
};

export default Footer;
