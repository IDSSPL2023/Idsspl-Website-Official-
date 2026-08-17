"use client";

import FAQs from "../Home/FAQs";
import css from "./aboutPageComponent.module.scss";
import MissionVision from "./MissionVision";
import WhyChoose from "./WhyChoose";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AboutPageComponent = () => {
  return (
    <main className={css.main}>
      <motion.section
        className={css.hero}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Badge */}

        <motion.span className={css.heroBadge} variants={fadeUp}>
          About Us
        </motion.span>

        {/* Image */}

        <motion.figure
          className={css.heroFigure}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <img src="/images/aboutHero.png" alt="" loading="lazy"/>
        </motion.figure>

        {/* Content */}

        <motion.div className={css.content} variants={containerVariants}>
          <motion.h1 className={css.heroTitle} variants={fadeUp}>
            Building dependable technology for{" "}
            <span>modern banking and financial systems</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
            IDSSPL is a technology-focused company delivering advanced banking
            systems and digital financial infrastructure for banks, fintech
            companies, and financial institutions.
          </motion.p>

          <motion.p className={css.heroLeadMore} variants={fadeUp}>
            With strong expertise in core banking platforms, payment switching
            systems, and secure financial technologies, we help organizations
            strengthen their operations and deliver reliable digital banking
            services.
          </motion.p>
          <motion.p className={css.heroLeadMore} variants={fadeUp}>
            Our approach combines technical precision with a deep understanding
            of financial systems and regulatory environments ensuring every
            solution is built to perform under real-world conditions.
          </motion.p>
        </motion.div>
      </motion.section>

      <WhyChoose />

      <MissionVision />

      <FAQs />
    </main>
  );
};

export default AboutPageComponent;
