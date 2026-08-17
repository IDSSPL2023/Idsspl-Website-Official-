"use client";

import { motion } from "framer-motion";
import ContainerHeader from "@/components/Common/ContainerHeader";
import css from "./benifit.module.scss";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
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

const iconAnim = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Benifit = ({ header, benifits }) => {

  return (
    <motion.section
      className={css.benifit}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-100px",
      }}
    >
      <motion.div variants={item}>
        <ContainerHeader
          title={header.title}
          highlight={header.highlight}
          description={header.description}
        />
      </motion.div>

      <motion.ul
        className={css.benifitList}
        variants={container}
      >
        {benifits.map((benifit, index) => (
          <motion.li
            key={index}
            className={css.benifitItem}
            variants={item}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
          >
            <motion.figure
              className={css.icon}
              variants={iconAnim}
            >
              <img
                src={`/images/benifits/${benifit.icon}.svg`}
                alt=""
                loading="lazy"
              />
            </motion.figure>

            <motion.h3 variants={item}>
              {benifit.title}
            </motion.h3>

            <motion.p variants={item}>
              {benifit.description}
            </motion.p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default Benifit;