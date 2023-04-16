import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./SettingsPage.module.css";

const SettingsPage = () => {
  const navigate = useNavigate();

  const onBackButtonIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onHovertrueContainerClick = useCallback(() => {
    navigate("/about-page");
  }, [navigate]);

  const onHovertrueContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHovertrueContainer2Click = useCallback(() => {
    navigate("/feedback-page");
  }, [navigate]);

  return (
    <div className={styles.settingsPage}>
      <div className={styles.settingsPageChild} />
      <img
        className={styles.backButtonIcon}
        alt=""
        src="/back-button1.svg"
        onClick={onBackButtonIconClick}
      />
      <div className={styles.eyeCatchingButton}>
        <div className={styles.hovertrue} onClick={onHovertrueContainerClick}>
          <Button sx={{ width: 300 }} variant="contained" color="error">
            About us
          </Button>
        </div>
      </div>
      <div className={styles.eyeCatchingButton1}>
        <div className={styles.hovertrue} onClick={onHovertrueContainer1Click}>
          <Button sx={{ width: 300 }} variant="contained" color="error">
            Log Out
          </Button>
        </div>
      </div>
      <div className={styles.eyeCatchingButton2}>
        <div className={styles.hovertrue} onClick={onHovertrueContainer2Click}>
          <Button sx={{ width: 300 }} variant="contained" color="error">
            Feedback
          </Button>
        </div>
      </div>
      <div className={styles.settings}>Settings</div>
    </div>
  );
};

export default SettingsPage;
