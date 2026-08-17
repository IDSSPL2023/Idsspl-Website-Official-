"use client";

import { useRef } from "react";
import ContainerHeader from "@/components/Common/ContainerHeader";
import css from "./approach.module.scss";

const Approch = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className={css.aproachWrapper}>
      <div className={css.approach}>
        <ContainerHeader
          title="Technology Approach"
          highlight="IDSSPL"
          description="Trusted technology partner for secure, scalable, and high-performance banking solutions."
          isHighlightFirst={true}
        />
      </div>

      <div className={css.sticky}>
        <div className={css.media}>
          <picture>
            {/* Mobile */}
            <source
              media="(max-width: 991.98px)"
              srcSet="/images/approach_desktop-mobile.gif"
            />

            {/* Tablet */}
            <source
              media="(max-width: 1024px)"
              srcSet="/images/approach_desktop-tab.gif"
            />

            {/* Desktop */}
            <img
              src="/images/approach_desktop.gif"
              alt="Technology Approach"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Approch;