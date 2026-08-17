"use client";
import BottomSheet from "@/components/hoc/BottomSheet";
import css from "./leadSuccessPopup.module.scss";
import Link from "next/link";
import { facebook, instagram, linkedIn, twitter } from "@/constants/socials";

const LeadSuccessPopup = ({ onClose }) => {
  return (
    <BottomSheet onClose={onClose}>
      <div className={css.LeadSuccess}>
        <figure className={css.logo}>
          <img
            loading="lazy"
            src="/icons/successTickCircle.svg"
            alt="Slashifytech logo mark"
          />
        </figure>
        <div className={css.content}>
          <h3>Thank you for reaching out!</h3>
          <p>
            We’ve received your enquiry and our team will get back to you within
            24 hours. We’re excited to learn more about your project and explore
            how IDSSPL can help bring it to life.
          </p>
        </div>
        <Link href="/" className={css.link} onClick={onClose}>
          Okay
        </Link>
        {/* <SocialsIcons /> */}
        <div className={css.socials}>
          <Link href={twitter} target="_blank">
            <img loading="lazy" src="/icons/socials/x.svg" alt="twitter" />
          </Link>
          <Link href={facebook} target="_blank">
            <img
              loading="lazy"
              src="/icons/socials/facebook.svg"
              alt="facebook"
            />
          </Link>
          <Link href={instagram} target="_blank">
            <img loading="lazy" src="/icons/socials/insta.svg" alt="instagram" />
          </Link>
          <Link href={linkedIn} target="_blank">
            <img
              loading="lazy"
              src="/icons/socials/linkdin.svg"
              alt="Facebook"
            />
          </Link>
        </div>
      </div>
    </BottomSheet>
  );
};

export default LeadSuccessPopup;
