"use client";

import Link from "next/link";
import ContainerHeader from "../Common/ContainerHeader";
import css from "./leadership.module.scss";

import { motion } from "framer-motion";
import { Vinayak_Linkdin } from "@/constants/socials";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
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
      duration: 0.7,
      ease: "easeOut",
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
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const memberItem = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Leadership = () => {
  const leadersData = [
    {
      name: "Vinayak More",
      role: " Associate Director & CEO – Banking & Strategy",
      img: "/images/vinyak.png",
      desc: [
        "Banking Technology & Strategy at IDSSPL, bringing over 25 years of experience in banking technology and financial services. ",
        "With deep expertise across Core Banking, Digital Banking, UPI Issuing & Acquiring, ATM, POS, AePS, Merchant Management, and Digital Payments, he leads IDSSPL’s strategy to deliver secure, scalable, compliant, and future-ready banking solutions.",
        "His vision is to position IDSSPL as a trusted technology and business-growth partner for banks and financial institutions, driving digital transformation, innovation, transaction growth, and long-term business value.",
      ],
      linkedin: `${Vinayak_Linkdin}`,
    },
    {
      name: "Vishal Singh",
      role: "Director – Sales & Growth",
      img: "/images/Vishal.png",
      desc: [
        "With over 10 years of experience, Vishal Singh plays a key role in driving business growth and building strategic partnerships. He brings a strong understanding of the fintech and banking landscape, enabling him to identify new opportunities and expand market presence effectively.",
        "His client-centric approach ensures that every solution is aligned with business goals, delivering value and long-term success. Vishal is dedicated to fostering strong relationships, enhancing customer experience, and supporting organizations in their digital transformation journey.",
      ],
      linkedin: "#",
    },
    {
      name: "Suraj Pathak",
      role: "Director – Operations",
      img: "/images/suraj.png",
      desc: [
        "Suraj Pathak brings over 12 years of extensive operational experience, playing a vital role in ensuring the seamless execution of projects across the organization. He specializes in optimizing workflows, improving operational efficiency, and maintaining high standards of quality in service delivery.",
        "With a strong focus on process excellence and timely execution, Suraj ensures that every project is managed with precision and consistency. His hands-on approach, attention to detail, and commitment to operational excellence enable the team to deliver reliable, scalable, and high-performing solutions to clients.",
      ],
      linkedin: "#",
    },
  ];

  const membersData = [
    {
      title: "Arun Gavas",
      img: "/images/arun_gavas.png",
      desc: "VP CBS",
    },
    {
      title: "Devendra Sawant",
      img: "/images/devendra.png",
      desc: "VP Operations",
    },
    // {
    //   title: "Arun kumar sharma",
    //   img: "/images/arun.png",
    //   desc: "VP Technology",
    // },
  ];

  return (
    <main className={css.main}>
      <div className={css.pageHero}>
        <ContainerHeader
          title="LEADERS"
          highlight="IDSSPL"
          isHighlightFirst={true}
        />
      </div>

      <motion.div
        className={css.leaders}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {leadersData.map((leader, index) => (
          <motion.article
            key={index}
            variants={index % 2 === 0 ? leftItem : rightItem}
            className={`${css.leader} ${
              index % 2 !== 0 ? css.reverse : ""
            }`}
          >
            <motion.figure
              className={css.leaderImg}
              initial={{ scale: 1.08, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={leader.img} alt={leader.name} loading="lazy"/>

              <img
                src="/icons/star.svg"
                alt=""
                className={css.starIcon1}
                aria-hidden
                loading="lazy"
              />
            </motion.figure>

            <div className={css.leaderInfo}>
              <div className={css.leaderName}>
                <h3>{leader.name}</h3>
                <span className={css.role}>
                  ({leader.role})
                </span>

                <img
                  src="/icons/circleribbd.svg"
                  alt=""
                  className={css.circleIcon}
                  aria-hidden
                  loading="lazy"
                />
              </div>

              <div className={css.leaderDesc}>
                {leader.desc.map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.08,
                    }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.p>
                ))}
              </div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link
                  href={leader.linkedin}
                  className={css.link}
                  target="_blank"
                >
                  LinkedIn Profile
                </Link>
              </motion.div>

              <img
                src="/icons/star.svg"
                alt=""
                className={css.starIcon2}
                aria-hidden
                loading="lazy"
              />
            </div>
          </motion.article>
        ))}
      </motion.div>

      <section
        className={css.teamMembers}
        aria-label="Our team members"
      >
        <span className={css.teamBadge}>Team</span>

        <ContainerHeader
          title="Our"
          highlight="team members"
          description="A team of industry experts committed to building secure, scalable, and future-ready financial technology solutions."
        />

        <motion.div
          className={css.membersGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {membersData.map((member, index) => (
            <motion.div
              key={index}
              variants={memberItem}
              className={css.member}
              whileHover={{
                y: -10,
              }}
            >
              <motion.figure
                className={css.memberImg}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <img
                  src={member.img}
                  alt={member.title}
                  loading="lazy"
                />
              </motion.figure>

              <div className={css.memberBody}>
                <h3>{member.title}</h3>
                <p>{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default Leadership;