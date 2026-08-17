import css from "./certification.module.scss";

const Certifications = () => {
  return (
    <section className={css.certificateContainer}>
      <div className={css.certificate}>
        <h3>Certificate</h3>
        <div className={css.certificateList}>
          <figure>
            <img src="images/ISO.png" alt="" loading="lazy"/>
          </figure>
          <figure>
            <img src="images/PCI.png" alt="" loading="lazy"/>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
