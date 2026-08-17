"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

import ContainerHeader from "@/components/Common/ContainerHeader";
import css from "./testimonials.module.scss";

const Testimonials = () => {
  const testimonialsData = [
  {
    id: 1,
    text: "The CBS implementation was handled seamlessly from start to finish. Their team was highly responsive and provided excellent support at every stage.",
    name: "Shri Gajanan Nagari Sah. Patsantha Mry.",
    role: "Patolewadi,  Kolhapur",
    image: "/images/dummyClient.png",
  },
  {
    id: 2,
    text: "The solution delivered is secure, scalable, and performs exceptionally well. It has significantly improved our operational efficiency and system reliability.",
    name: "The Shiroda Prograessive Urban Co. Op.",
    role: "Credit Society Ltd.",
    image: "/images/dummyClient.png",
  },
  {
    id: 3,
    text: "Working with IDSSPL has been a great experience. Their deep understanding of banking systems and reliable approach made the entire process smooth and efficient.",
    name: "Shri Vasantrao Chougule Patsantha.",
    role: "Kolhapur",
    image: "/images/dummyClient.png",
  }
];

  return (
    <motion.section
      className={css.testimonials}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <ContainerHeader
        title={"What Our "}
        highlight={"Customers Say"}
        description={
          "Discover how nexPay is transforming the way people manage their money with real stories from satisfied users"
        }
      />

      <div className={css.swiperContainer}>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          slidesPerView={1.15}
          spaceBetween={16}
          autoplay={{
    delay: 2500, // time between slides (ms)
    disableOnInteraction: false, // keeps autoplay after user swipe
    pauseOnMouseEnter: true, // optional: pause on hover (desktop)
  }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                className={css.swiperCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
              >
                <p>“{item.text}”</p>

                <div className={css.swiperCardFooter}>
                  {/* <img src={item.image} alt={item.name} /> */}

                  <div className={css.userInfo}>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonials;