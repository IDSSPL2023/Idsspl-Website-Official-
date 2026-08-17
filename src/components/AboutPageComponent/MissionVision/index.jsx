import css from "./missionVision.module.scss";

const MissionVision = () => {
  return (
    <section className={css.missionVision}>
      <div className={css.card}>
        <figure className={css.iconFig}>
          <img src="/icons/doc.svg" alt="" loading="lazy"/>
        </figure>
        <h3>Mission</h3>
        <p>
          To support financial institutions with dependable technology solutions
          that strengthen operations, improve customer experiences, and enable
          efficient digital banking services. We focus on building systems that
          deliver consistent performance, support evolving business needs, and
          help organizations operate with confidence.
        </p>
      </div>
      <div className={css.card}>
        <figure className={css.iconFig}>
          <img src="/icons/eye.svg" alt="" loading="lazy"/>
        </figure>
        <h3>Vision</h3>
        <p>
          To be a trusted technology partner for financial institutions by
          delivering reliable digital infrastructure and advanced banking
          platforms. Our goal is to support the future of financial services
          through strong systems, secure operations, and continuous innovation
          aligned with industry needs.
        </p>
      </div>
    </section>
  );
};

export default MissionVision;
