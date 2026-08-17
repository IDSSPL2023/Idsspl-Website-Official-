"use client";

import ContainerHeader from "@/components/Common/ContainerHeader";
import css from "./whyChoose.module.scss";
import { motion } from "framer-motion";

const data = [
  {
    year: "2010",
    title: "Banking Domain Expertise",
    desc: "Extensive experience in banking technology and financial systems, enabling solutions that align with real operational and regulatory needs.",
    icon: "1",
  },
  {
    year: "2013" ,
    title: "Secure Technology Infrastructure",
    desc: "Strong, well-structured systems designed to safeguard financial data and maintain consistent performance across critical operations",
    icon: "2",
  },
  {
    year: "2016",
    title: "Scalable Financial Platforms",
    desc: "Technology platforms built to support increasing transaction demands and evolving digital services without disruption.",
    icon: "3",
  },
  {
    year: "2019",
    title: "Reliable Payment Systems",
    desc: "Advanced switching systems that support fast and accurate transaction processing across multiple payment channels.",
    icon: "4",
  },
  {
    year: "2022",
    title: "Compliance-Ready Solutions",
    desc: "Solutions designed with regulatory requirements in mind, helping institutions maintain compliance with confidence.",
    icon: "5",
  },
  {
    year: "2026",
    title: "Enterprise-Level Support",
    desc: "Dedicated support teams ensuring smooth implementation, ongoing system stability, and long-term operational reliability.",
    icon: "6",
  },
];

const WhyChoose = () => {
  return (
    <section className={css.whyChoose}>
      <ContainerHeader
        title="Why Choose "
        highlight="IDSSPL"
        description="A legacy of innovation and excellence in banking technology"
      />

      <div className={css.timeline}>
        <div className={css.line} />

        {data.map((item, index) => (
          <motion.div
            key={item.year}
            className={`${css.cardWrapper} ${
              index % 2 === 0 ? css.left : css.right
            }`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={css.card}>
              {/* <span className={css.yearBadge}>{item.year}</span> */}
              <figure className={css.icon}>
                <img
                  src={`/icons/steeperIcons/${item.icon}.svg`}
                  alt=""
                  loading="lazy"
                  aria-hidden
                />
              </figure>
              <div className={css.content}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              </div>
              <img
                src="/images/bg2.png"
                alt=""
                className={css.bg}
                aria-hidden
                loading="lazy"
              />
            </div>

            <div className={css.dot} />
            <div className={css.line2} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
