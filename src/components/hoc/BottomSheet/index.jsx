"use client";
import css from "./bottomSheet.module.scss";

const BottomSheet = ({ children, onClose }) => {
  return (
    <div className={css.bottomSheet}>
      <div className={css.bottomSheetWrapper}>
        <div className={css.popupTop}>
          <span onClick={onClose}>
            <img loading="lazy" src="/icons/close.svg" alt="close" />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
