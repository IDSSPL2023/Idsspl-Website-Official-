"use client";

import { motion } from "framer-motion";
import css from "./heroCoreBanking.module.scss";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageRight = {
  hidden: {
    opacity: 0,
    x: 80,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gradientFloat = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroCoreBanking = ({ heading, description, bullets, buttons, image }) => {
  return (
    <motion.div
      className={css.hero}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* LEFT CONTENT */}

      <motion.div className={css.content}>
        <motion.h1 variants={itemUp}>
          {heading.prefix} <span>{heading.highlight}</span> {heading.suffix}
        </motion.h1>

        <motion.p variants={itemUp}>
          {description}
        </motion.p>

        {bullets && bullets.length > 0 && (
          <motion.ul variants={itemUp}>
            {bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </motion.ul>
        )}

        <motion.div className={css.buttons} variants={container}>
          <motion.a
            className={css.button1}
            variants={itemUp}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href={buttons.primary.href}
          >
            {buttons.primary.label}
          </motion.a>

          <motion.a
            className={css.button2}
            variants={itemUp}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href={buttons.secondary.href}
          >
            {buttons.secondary.label}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}

      <motion.figure className={css.figure} variants={imageRight}>
        <img src={image.src} alt={image.alt} loading="lazy"/>
      </motion.figure>

      {/* FLOATING GRADIENT */}

      <motion.div
        className={css.gradient}
        variants={gradientFloat}
        animate="animate"
      />
    </motion.div>
  );
};

export default HeroCoreBanking;
