import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./FeedbackPage.module.css";

const FeedbackPage = () => {
  const navigate = useNavigate();

  const onBackButtonIconClick = useCallback(() => {
    navigate("/settings-page");
  }, [navigate]);

  const onHovertrueContainerClick = useCallback(() => {
    navigate("/settings-page");
  }, [navigate]);

  return (
    <div className={styles.feedbackPage}>
      <div className={styles.feedbackPageChild} />
      <img
        className={styles.backButtonIcon}
        alt=""
        src="/back-button1.svg"
        onClick={onBackButtonIconClick}
      />
      <div className={styles.eyeCatchingButton}>
        <div className={styles.hovertrue} onClick={onHovertrueContainerClick}>
          <Button sx={{ width: 300 }} variant="contained" color="error">
            Submit feedback
          </Button>
        </div>
      </div>
      <div className={styles.feedbackPageItem} />
      <TextField
        className={styles.textAreaoutlined}
        sx={{ width: 220 }}
        color="primary"
        variant="outlined"
        multiline
        label="Feeback"
        placeholder="Feedback"
        margin="dense"
      />
      <div className={styles.feedback}>Feedback</div>
    </div>
  );
};

export default FeedbackPage;
