"use client";

import { motion } from "framer-motion";
import ContainerHeader from "@/components/Common/ContainerHeader";
import css from "./features.module.scss";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const leftItem = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const rightItem = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageAnim = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Features = ({ header, features }) => {

  return (
    <motion.section
      className={css.features}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-100px",
      }}
    >
      {/* Header */}

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7 },
          },
        }}
      >
        <ContainerHeader
          title={header.title}
          highlight={header.highlight}
          description={header.description}
        />
      </motion.div>

      {/* Features List */}

      <motion.ul
        className={css.list}
        variants={container}
      >
        {features.map((item, index) => {
          const animation =
            index % 2 === 0 ? leftItem : rightItem;

          return (
            <motion.li
              key={index}
              className={css.item}
              variants={animation}
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.figure
                className={css.image}
                variants={imageAnim}
              >
                <img
                  src={item.img}
                  alt=""
                  loading="lazy"
                />
              </motion.figure>

              <motion.div
                className={css.content}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7 },
                  },
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.section>
  );
};

export default Features;