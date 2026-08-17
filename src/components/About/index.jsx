"use client";

import { useEffect, useMemo, useRef } from "react";
import ContainerHeader from "../Common/ContainerHeader";
import css from "./about.module.scss";

const About = () => {
  const aboutBlocks = useMemo(
    () => [
      {
        slug: "core-banking-system",
        heading: (
          <>
            AI-Powered <span> Next-Generation </span> Core Banking Platform
          </>
        ),
        description:
          "Redefine banking with an AI-enabled core banking platform designed to simplify operations, empower employees, and enhance customer experiences through intelligent automation and advanced analytics.",
        bullets: [
          "AI-powered management dashboards, chatbot assistance, and natural language reporting.",
          "Drag-and-drop AI report builder with integrated Data Lake for instant business insights.",
          "Multi-language support, customizable user experience, and enterprise-grade security.",
          "Security-first architecture with end-to-end encryption, role-based access control, multi-factor authentication, comprehensive audit trails, and regulatory compliance."
        ],
        images: {
          main: "images/about/CoreBanking-Parts.gif",
          bg: "images/about/ConnectingLine.gif",
        },
      },
      // {
      //   slug: "upi-imps",
      //   heading: (
      //     <>
      //       UPI, IMPS & ATM <span>Switching Solution</span>
      //     </>
      //   ),
      //   description:
      //     "Support high-volume, real-time transactions across multiple payment channels. Ensure uninterrupted processing with systems designed to handle increasing demand without delays or failures.",
      //   bullets: [
      //     "Real-time processing across multiple payment networks",
      //     "Designed to handle high transaction volumes without disruption",
      //     "Reliable performance during peak usage periods",
      //   ],
      //   images: {
      //     main: "images/about/07-UPI, IMPS & ATM Switching-Object.gif",
      //     bg: "images/about/07-UPI, IMPS & ATM Switching-Line.gif",
      //   },
      // },
      // {
      //   slug: "card-payment-management-system",
      //   heading: (
      //     <>
      //       <span>Card & Payment</span> Management System
      //     </>
      //   ),
      //   description:
      //     "Manage the complete lifecycle of card and payment services with precision. From issuance to transaction handling, gain full control with systems designed for security and operational clarity.",
      //   bullets: [
      //     "Complete control over card lifecycle and transaction processing",
      //     "Secure handling of debit, credit, and prepaid card operations",
      //     "Clear visibility into payment flows and system activity",
      //   ],
      //   images: {
      //     main: "images/about/about2-objects.gif",
      //     bg: "images/about/about2-line.gif",
      //   },
      // },
      // {
      //   slug: "financial-rick-and-complaince",
      //   heading: (
      //     <>
      //       <span>Financial Risk & Compliance</span> Platform
      //     </>
      //   ),
      //   description:
      //     "Stay aligned with evolving regulatory requirements through structured compliance systems. Identify risks early, maintain transparency, and reduce exposure to operational and financial uncertainties.",
      //   bullets: [
      //     "Continuous monitoring of risks and regulatory requirements",
      //     "Systems aligned with current financial compliance standards",
      //     "Improved reporting accuracy and operational transparency",
      //   ],
      //   images: {
      //     main: "images/about/IDSSPL-04-Financial-Risk-Object.gif",
      //     bg: "images/about/IDSSPL-04-Financial-Risk-Line.gif",
      //   },
      // },
      // {
      //   slug: "reconciliation-and-settlement-engines",
      //   heading: (
      //     <>
      //       <span>Reconciliation & Settlement</span> Engine
      //     </>
      //   ),
      //   description:
      //     "Automate transaction matching and settlement processes to eliminate manual errors. Improve accuracy, reduce delays, and gain better visibility across financial operations.",
      //   bullets: [
      //     "Automated matching of transactions across systems",
      //     "Faster settlement with reduced manual effort",
      //     "Early detection of mismatches and inconsistencies",
      //   ],
      //   images: {
      //     main: "images/about/05-Reconciliation-Object.gif",
      //     bg: "images/about/05-Reconciliation-Line.gif",
      //   },
      // },
      // {
      //   slug: "secure-networking-infrastructure",
      //   heading: (
      //     <>
      //       Secure <span>Networking</span> & Infrastructure
      //     </>
      //   ),
      //   description:
      //     "Establish a reliable and protected technology environment that supports critical financial operations. Ensure data integrity, network security, and system stability at every level.",
      //   bullets: [
      //     "Strong network protection for critical financial data",
      //     "Stable systems that support uninterrupted operations",
      //     "Built-in safeguards to maintain system integrity",
      //   ],
      //   images: {
      //     main: "images/about/06-Secure-Networking-n-Infrastructure-Object-High.gif",
      //     bg: "images/about/06-Secure-Networking-n-Infrastructure-Line-High.gif",
      //   },
      // },
    ],
    [],
  );

  const wrapRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current) return;

    let lenis;
    let tickerFn;
    let gsapForCleanup;
    let ctx;

    const init = async () => {
      const gsapMod = await import("gsap");
      const gsap = gsapMod.default || gsapMod;
      gsapForCleanup = gsap;
      const ScrollTriggerMod = await import("gsap/ScrollTrigger");
      const ScrollTrigger = ScrollTriggerMod.ScrollTrigger || ScrollTriggerMod;
      gsap.registerPlugin(ScrollTrigger);

      const LenisMod = await import("lenis");
      const Lenis = LenisMod.default || LenisMod;

      lenis = new Lenis({
        lerp: 0.2,
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);

      tickerFn = (time) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);

      const sections = Array.from(
        wrapRef.current.querySelectorAll("[data-sticky-section='true']"),
      );

      const imgs = Array.from(
        wrapRef.current.querySelectorAll("[data-sticky-img='true']"),
      );
      await Promise.all(
        imgs.map(
          (img) =>
            img.decode?.().catch(() => {}) ??
            new Promise((resolve) => {
              if (img.complete) return resolve();
              img.addEventListener("load", resolve, { once: true });
              img.addEventListener("error", resolve, { once: true });
            }),
        ),
      );

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        const stickyTl = (el, position, tiltMedia) => {
          const isLast = position === sections.length - 1;
          const media = el.querySelector("[data-sticky-media='true']");
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          });

          tl.to(
            el,
            {
              ease: "none",
              startAt: { filter: "brightness(100%) contrast(100%)" },
              filter: isLast ? "none" : "brightness(60%) contrast(135%)",
              yPercent: isLast ? 0 : -15,
            },
            0,
          );

          if (tiltMedia && media) {
            tl.to(
              media,
              {
                ease: "power1.in",
                yPercent: -40,
                rotation: -20,
                transformOrigin: "50% 50%",
              },
              0,
            );
          }
        };

        mm.add("(min-width: 992px)", () => {
          sections.forEach((el, position) => stickyTl(el, position, true));
        });

        mm.add("(max-width: 991.98px)", () => {
          sections.forEach((el, position) => stickyTl(el, position, false));
        });
      }, wrapRef);

      ScrollTrigger.refresh();
    };

    init();

    return () => {
      if (ctx) ctx.revert();
      if (tickerFn && gsapForCleanup) gsapForCleanup.ticker.remove(tickerFn);
      if (gsapForCleanup) gsapForCleanup.ticker.lagSmoothing(500, 33);
      if (lenis) lenis.destroy();
    };
  }, []);

  const renderBlock = (block, idx) => (
    <section
      key={idx}
      className={css.stickySection}
      data-sticky-section="true"
      style={{ zIndex: idx + 1 }}
    >
      <div className={css.contentBox}>
        <div className={css.content}>
          <h3>{block.heading}</h3>
          <p>{block.description}</p>
          <ul>
            {block.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {/* <Link href={`/${block.slug}`} className={css.link}>Learn More </Link> */}
        </div>

        <div className={css.media} data-sticky-media="true">
          <img
            src={block.images.main}
            alt="About illustration"
            className={css.image1}
            data-sticky-img="true"
            loading="lazy"
          />
          {block.images.bg ? (
            <img
              src={block.images.bg}
              alt="About illustration"
              className={css.image2}
              loading="lazy"
            />
          ) : null}
        </div>
      </div>
    </section>
  );

  return (
    <section className={css.aboutContainer} id="solutions">
      <ContainerHeader
        title={"Powering the Future of "}
        highlight={"Financial Technology"}
        description={
          "Delivering secure and innovative technology solutions for banks and financial institutions."
        }
      />

      <div className={css.wrap} ref={wrapRef}>
        {aboutBlocks.map((block, idx) => renderBlock(block, idx))}
        <div className={css.spacer} aria-hidden="true" />
      </div>
    </section>
  );
};

export default About;
