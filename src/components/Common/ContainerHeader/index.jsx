import css from "./containerHeader.module.scss";

const ContainerHeader = ({
  title = "Default Title",
  highlight,
  description,
  isHighlightFirst = false,
}) => {
  const renderHeading = () => {
    const highlightEl = highlight ? <span>{highlight}</span> : null;

    return isHighlightFirst ? (
      <>
        {highlightEl} {title}
      </>
    ) : (
      <>
        {title} {highlightEl}
      </>
    );
  };

  return (
    <div className={css.heading}>
      <h2>{renderHeading()}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default ContainerHeader;