"use client";

import ContainerHeader from "@/components/Common/ContainerHeader";
import css from "./faq.module.scss";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const DEFAULT_FAQ_ITEMS = [
  {
    question: "What banking solutions does IDSSPL provide?",
    answer:
      "IDSSPL delivers comprehensive technology solutions for financial institutions, including core banking platforms, digital banking systems, payment switching solutions, card management systems, reconciliation engines, and secure infrastructure services.",
  },
  {
    question: "Which payment systems are supported by your platform?",
    answer:
      "The platform supports major payment networks such as UPI, IMPS, ATM switching, and card-based transactions, enabling efficient and real-time processing across channels.",
  },
  {
    question: "How does IDSSPL ensure security and compliance?",
    answer:
      "Security is built into every layer of the system, from encrypted networks to compliance-aligned frameworks that meet financial industry standards and regulatory requirements.",
  },
  {
    question: "Can your solutions integrate with existing banking systems?",
    answer:
      "Yes, the solutions are designed to work with existing infrastructure and third-party systems through flexible APIs and integration frameworks.",
  },
  {
    question: "What is the benefit of using reconciliation and settlement engines?",
    answer:
      "These systems automate transaction matching, identify discrepancies, and streamline settlement processes, helping reduce manual effort and improve operational accuracy.",
  },
  {
    question: "Who can benefit from IDSSPL’s technology solutions?",
    answer:
      "Banks, NBFCs, fintech companies, payment providers, and financial institutions looking to improve efficiency, security, and operational control can benefit from these solutions.",
  }
];

const FAQs = ({ showBadge = false, items }) => {
  const faqData = items ?? DEFAULT_FAQ_ITEMS;

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      className={css.FAQContainer}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section className={css.faqs}>
        {showBadge ? <span className={css.faqBadge}>FAQ</span> : null}

        <ContainerHeader title={"Have"} highlight={"Questions?"} />

        <ul className={css.faqList}>
          {faqData.map((faq, index) => (
            <motion.li
              key={index}
              layout
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className={activeIndex === index ? css.open : ""}
            >
              <h3 onClick={() => toggleIndex(index)}>
                {faq.question}

                <motion.figure
                  className={css.icon}
                  animate={{
                    rotate: activeIndex === index ? 45 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <img src="/icons/plus.svg" alt="" loading="lazy"/>
                </motion.figure>
              </h3>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.p
                    key="content"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>

        <span className={css.stillHaveQuestions}>
          Still have questions? <Link href="/contact-us">Contact Us</Link>
        </span>

        <Link href="/contact-us" type="button" className={css.bookDemo}>
          Book a Demo
        </Link>
      </section>
    </motion.div>
  );
};

export default FAQs;
