"use client";

import { motion } from "framer-motion";
import ContainerHeader from "@/components/Common/ContainerHeader";
import css from "./benifitsForFinance.module.scss";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const leftItem = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const rightItem = {
  hidden: { opacity: 0, x: 80, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Layout: default (list left, image right) ─────────────────────────────────
const DefaultLayout = ({ benifits, image }) => (
  <div className={css.content}>
    <motion.ul className={css.list} variants={container}>
      {benifits.map((item, index) => (
        <motion.li
          key={index}
          className={`${css[item.color]} ${css.item}`}
          variants={leftItem}
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <motion.h3 variants={leftItem}>{item.title}</motion.h3>
          <motion.p variants={leftItem}>{item.description}</motion.p>
        </motion.li>
      ))}
    </motion.ul>

    <motion.figure className={css.figure} variants={rightItem}>
      <img src={image.src} alt={image.alt} loading="lazy" />
    </motion.figure>
  </div>
);

// ── Layout: hub-spoke (center card, items around) ────────────────────────────
const HubSpokeLayout = ({ benifits, centerText }) => (
  <div className={css.hubSpoke}>
    <motion.div className={css.hubLeft} variants={container}>
      <motion.div
        className={css.hubCard}
        variants={leftItem}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <span className={css.hubNumber}>{benifits[1].number}</span>
        <h3>{benifits[1].title}</h3>
        <p>{benifits[1].description}</p>
      </motion.div>
    </motion.div>

    <motion.div className={css.hubCenter} variants={scaleIn}>
      <p>{centerText}</p>
    </motion.div>

    <div className={css.hubRight}>
      <motion.div
        className={css.hubCard}
        variants={rightItem}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <span className={css.hubNumber}>{benifits[0].number}</span>
        <h3>{benifits[0].title}</h3>
        <p>{benifits[0].description}</p>
      </motion.div>

      <motion.div
        className={`${css.hubCard} ${css.hubCardBottom}`}
        variants={fadeUp}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <span className={css.hubNumber}>{benifits[2].number}</span>
        <h3>{benifits[2].title}</h3>
        <p>{benifits[2].description}</p>
      </motion.div>
    </div>
  </div>
);

// ── Layout: cards-row (3 image cards in a row) ───────────────────────────────
const CardsRowLayout = ({ benifits }) => (
  <div className={css.cardsRow}>
    {benifits.map((item, index) => (
      <motion.div
        key={index}
        className={css.rowCard}
        variants={fadeUp}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        {item.image && (
          <div className={css.rowCardImage}>
            <img src={item.image.src} alt={item.image.alt} loading="lazy" />
          </div>
        )}
        <div className={css.rowCardBody}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

// ── Layout: image-list (image left, dark list right) ─────────────────────────
const ImageListLayout = ({ benifits, image }) => (
  <div className={css.content}>
    <motion.figure className={css.figure} variants={leftItem}>
      <img src={image.src} alt={image.alt} loading="lazy" />
    </motion.figure>

    <motion.ul className={css.darkList} variants={container}>
      {benifits.map((item, index) => (
        <motion.li
          key={index}
          className={css.darkItem}
          variants={rightItem}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </motion.li>
      ))}
    </motion.ul>
  </div>
);

// ── Layout: dark-list-image (dark list left, image right) ────────────────────
const DarkListImageLayout = ({ benifits, image }) => (
  <div className={css.content}>
    <motion.ul className={css.darkList} variants={container}>
      {benifits.map((item, index) => (
        <motion.li
          key={index}
          className={css.darkItem}
          variants={leftItem}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </motion.li>
      ))}
    </motion.ul>

    <motion.figure className={css.figure} variants={rightItem}>
      <img src={image.src} alt={image.alt} loading="lazy" />
    </motion.figure>
  </div>
);

// ── Main component ────────────────────────────────────────────────────────────
const BenifitsForFinance = ({ layout = "default", header, benifits, image, centerText }) => {
  const renderContent = () => {
    switch (layout) {
      case "hub-spoke":
        return <HubSpokeLayout benifits={benifits} centerText={centerText} />;
      case "cards-row":
        return <CardsRowLayout benifits={benifits} />;
      case "image-list":
        return <ImageListLayout benifits={benifits} image={image} />;
      case "dark-list-image":
        return <DarkListImageLayout benifits={benifits} image={image} />;
      default:
        return <DefaultLayout benifits={benifits} image={image} />;
    }
  };

  return (
    <motion.section
      className={css.benifitsForFinance}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={fadeUp}>
        <ContainerHeader title={header.title} highlight={header.highlight} />
      </motion.div>

      {renderContent()}
    </motion.section>
  );
};

export default BenifitsForFinance;
