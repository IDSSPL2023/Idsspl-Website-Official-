"use client";

import Link from "next/link";
import css from "./header.module.scss";
import { useState, useRef, useEffect } from "react";

const services = [
  {
    title: "Core & Digital Banking System",
    subtitle: "Efficient Systems For Managing Modern Banking Operations",
    slug: "core-banking-system",
    hidden: false,
  },
  {
    title: "UPI, IMPS & ATM Switching Solution",
    subtitle: "Reliable Multi-Network Transaction Processing",
    slug: "upi-imps",
    hidden: true,
  },
  {
    title: "Card & Payment Management System",
    subtitle: "Control Over Card And Payment Operations",
    slug: "card-payment-management-system",
    hidden: true,
  },
  {
    title: "Financial Risk & Compliance Platform",
    subtitle: "Clear Control Over Risk And Compliance",
    slug: "financial-rick-and-complaince",
    hidden: true,
  },
  {
    title: "Reconciliation & Settlement Engine",
    subtitle: "Accurate Matching And Settlement Control",
    slug: "reconciliation-and-settlement-engines",
    hidden: true,
  },
  {
    title: "Secure Networking & Infrastructure",
    subtitle: "Stable And Secure System Foundation",
    slug: "secure-networking-infrastructure",
    hidden: true,
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const closeTimerRef = useRef(null);

  const hamburgerToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleServicesEnter = () => {
    clearTimeout(closeTimerRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu when link clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleServiceClick = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  return (
    <header className={css.header}>
      <Link href="/">
        <figure className={css.logo}>
          <img src="/images/logo.svg" alt="logo" loading="lazy" />
        </figure>
      </Link>

      <ul className={css.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/leadership">Leadership</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact</Link>
        </li>

        {/* Services with dropdown */}
        {/* <li
          ref={servicesRef}
          className={css.servicesNav}
          onMouseEnter={handleServicesEnter}
          onMouseLeave={handleServicesLeave}
        >
          <button
            className={`${css.servicesTrigger} ${servicesOpen ? css.active : ""}`}
            onClick={() => setServicesOpen((prev) => !prev)}
            aria-expanded={servicesOpen}
            aria-haspopup="true"
          >
            Services
            <svg
              className={`${css.chevron} ${servicesOpen ? css.rotated : ""}`}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 4L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          // Dropdown Panel 
          <div
            className={`${css.servicesDropdown} ${servicesOpen ? css.show : ""}`}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <div className={css.servicesGrid}>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className={css.serviceCard}
                  onClick={handleServiceClick}
                >
                  <span className={css.cardTitle}>{service.title}</span>
                  <span className={css.cardSubtitle}>{service.subtitle}</span>
                </Link>
              ))}
            </div>
          </div>
        </li> */}
                <li>
          <Link href="/core-banking-system">Core & Digital Banking System</Link>
        </li>

      </ul>

      <Link href="/contact-us" className={css.contactUs}>
        <figure className={css.icon}>
          <img src="/icons/userNavIcon.png" alt="contactUs" loading="lazy" />
        </figure>
        Connect With Us
      </Link>

      {/* Hamburger */}
      <button
        ref={hamburgerRef}
        className={`${css.hamburger} ${isOpen ? css.open : ""}`}
        onClick={hamburgerToggle}
      >
        <figure>
          <span></span>
          <span></span>
          <span></span>
        </figure>
      </button>

      {/* Mobile Menu */}
      <ul
        ref={menuRef}
        className={`${css.mobileMenu} ${isOpen ? css.show : ""}`}
      >
        <li>
          <Link href="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li>
          <Link href="/about" onClick={handleLinkClick}>About</Link>
        </li>
        <li>
          <Link href="/leadership" onClick={handleLinkClick}>Leadership</Link>
        </li>
        <li>
          <Link href="/contact-us" onClick={handleLinkClick}>Contact</Link>
        </li>
        <li>
          <Link href="/core-banking-system" onClick={handleLinkClick}>Core & Digital Banking System</Link>
        </li>
        {/* {services.map((service) => (
          <li key={service.slug}>
            <Link href={`/${service.slug}`} onClick={handleLinkClick}>
              {service.title}
            </Link>
          </li>
        ))} */}
      </ul>
    </header>
  );
};

export default Header;
