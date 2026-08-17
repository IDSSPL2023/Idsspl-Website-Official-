"use client";

import { useState } from "react";
import Link from "next/link";
import ContainerHeader from "../Common/ContainerHeader";
import css from "./contactUs.module.scss";
import { Mail, MapPin, Phone } from "lucide-react";
import { useFormik } from "formik";
import LeadSuccessPopup from "@/components/Popups/LeadSuccessPopup";

const contactData = [
  {
    icon: <Phone size={20} strokeWidth={2} aria-hidden />,
    value: "(0231) 2530950",
    href: "tel:(0231)2530950",
  },
  {
    icon: <Mail size={20} strokeWidth={2} aria-hidden />,
    value: "info@idsspl.com",
    href: "mailto:info@idsspl.com",
  },
  {
    icon: <MapPin size={22} strokeWidth={2} aria-hidden />,
    title: "Office Registered Address: ",
    value: "11, `Gurukrupa`, Friends Colony Kolhapur - 416005 (MH), India",
  },
  {
    icon: <MapPin size={22} strokeWidth={2} aria-hidden />,
    title: "Office Corporate Address: ",
    value:
      "IDSSPL Technologies Pvt. Ltd. 616, Corporate Avenue Sonawala Road, Opposite Atlanta Centre Goregaon (E), Mumbai Suburban Maharashtra, India - 400063",
  },
];

const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = "First name is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (values.phone && !/^[0-9]{10}$/.test(values.phone)) {
        errors.phone = "Enter valid 10 digit phone number";
      }

      if (!values.message) {
        errors.message = "Message is required";
      }

      return errors;
    },

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await fetch("https://formspree.io/f/xvzvrgbl", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone ? `+91${values.phone}` : "",
            message: values.message,

            // Recommended metadata
            formType: "Contact Us Form",
            source: "Website Contact Page",
          }),
        });

        if (response.ok) {
          console.log("Contact Form Data:", values);

          setShowPopup(true);
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
    <main className={css.main}>
      <ContainerHeader
        title="Contact Us"
        description="Get in touch with our team to learn more about our banking technology solutions."
      />

      <section className={css.formCard}>
        <form className={css.form} onSubmit={formik.handleSubmit} noValidate>
          <div className={css.flexBox}>
            <div className={css.formItem}>
              <label htmlFor="firstName">First Name</label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />

              {formik.touched.firstName && formik.errors.firstName && (
                <span className={css.fieldError}>
                  {formik.errors.firstName}
                </span>
              )}
            </div>

            <div className={css.formItem}>
              <label htmlFor="lastName">Last Name</label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
            </div>
          </div>

          <div className={css.flexBox}>
            <div className={css.formItem}>
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              {formik.touched.email && formik.errors.email && (
                <span className={css.fieldError}>{formik.errors.email}</span>
              )}
            </div>

            <div className={css.formItem}>
              <label htmlFor="phone">Phone Number</label>

              <div className={css.phoneField}>
                <span>+91</span>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
              </div>

              {formik.touched.phone && formik.errors.phone && (
                <span className={css.fieldError}>{formik.errors.phone}</span>
              )}
            </div>
          </div>

          <div className={css.formItem}>
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message.."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />

            {formik.touched.message && formik.errors.message && (
              <span className={css.fieldError}>{formik.errors.message}</span>
            )}
          </div>

          <div className={css.btnBox}>
            <img
              src="/images/letterSend.svg"
              alt=""
              className={css.sendLetter}
              aria-hidden
              loading="lazy"
            />

            <button
              type="submit"
              className={css.sendBtn}
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        <div className={css.info}>
          <div className={css.infoCard}>
            <h2>Contact Information</h2>

            <div className={css.contactInfo}>
              {contactData.map((item, i) =>
                item.href ? (
                  <Link key={i} href={item.href} className={css.item}>
                    {item.icon}
                    <span>{item.value}</span>
                  </Link>
                ) : (
                  <div key={i} className={css.item}>
                    {item.icon}

                    <div className={css.text}>
                      {item?.title && <h4>{item.title}</h4>}

                      <span>{item.value}</span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className={css.socials}>
            {[
              { name: "twitter", href: "https://twitter.com" },
              { name: "insta", href: "https://instagram.com" },
              { name: "linkdin", href: "https://linkedin.com" },
            ].map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={css.socialLink}
                aria-label={name}
              >
                <img src={`/icons/${name}Col.svg`} alt="" loading="lazy"/>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showPopup && <LeadSuccessPopup onClose={() => setShowPopup(false)} />}
    </main>
  );
};

export default ContactUs;
