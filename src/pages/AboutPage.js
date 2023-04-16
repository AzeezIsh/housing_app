import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  const navigate = useNavigate();

  const onBackButtonIconClick = useCallback(() => {
    navigate("/settings-page");
  }, [navigate]);

  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutPageChild} />
      <img
        className={styles.backButtonIcon}
        alt=""
        src="/back-button1.svg"
        onClick={onBackButtonIconClick}
      />
      <div className={styles.aboutUs}>About Us</div>
      <div className={styles.aboutPageItem} />
      <b className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </b>
    </div>
  );
};

export default AboutPage;
