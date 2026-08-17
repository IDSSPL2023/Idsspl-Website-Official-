"use client";

import ContainerHeader from "@/components/Common/ContainerHeader";
import css from "./heroHome.module.scss";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buttonAnim = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 14,
    },
  },
};

const HomeHero = () => {
  return (
    <motion.section
      className={css.heroHomeContainer}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={fadeUp}>
        <ContainerHeader
          title={"Enabling"}
          highlight={"Secure. Scalable."}
          description={"Future-Ready Banking Technology."}
        />
      </motion.div>

      {/* Hero Media */}
      <motion.div
        className={css.media}
        variants={fadeUp}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src="images/hero.gif" alt="hero" loading="lazy"/>
      </motion.div>

      {/* Buttons */}
      <motion.div className={css.buttons}>
        <motion.a
          variants={buttonAnim}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className={css.btn1}
          href="#solutions"
        >
          Explore Our Solution
        </motion.a>

        <motion.a
          variants={buttonAnim}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className={css.btn2}
          href="/contact-us"
        >
          Request Demo
        </motion.a>
      </motion.div>

      {/* Gradient */}
      {/* <motion.div
        className={css.gradient}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      /> */}
    </motion.section>
  );
};

export default HomeHero;