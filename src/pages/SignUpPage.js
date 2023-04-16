import { useCallback } from "react";
import { TextField, Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onHovertrueContainerClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onHovertrueContainer1Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onBackButtonIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpPageChild} />
      <div className={styles.smallButton}>
        <div className={styles.hovertrue} onClick={onHovertrueContainerClick}>
          <div className={styles.button}>
            <b className={styles.getIt}>Sign in</b>
          </div>
        </div>
      </div>
      <div className={styles.signUpPageItem} />
      <div className={styles.rectangleParent}>
        <TextField
          className={styles.frameChild}
          sx={{ width: 333 }}
          color="primary"
          variant="filled"
          type="text"
          label="Username"
          placeholder="Username"
          size="medium"
          margin="dense"
        />
        <TextField
          className={styles.frameItem}
          sx={{ width: 333 }}
          color="primary"
          variant="filled"
          type="text"
          label="Email"
          placeholder="Email"
          size="medium"
          margin="none"
        />
        <TextField
          className={styles.frameInner}
          sx={{ width: 333 }}
          color="primary"
          variant="filled"
          type="text"
          label="Password"
          placeholder="Password"
          size="medium"
          margin="none"
        />
      </div>
      <div className={styles.eyeCatchingButton}>
        <div className={styles.hovertrue1} onClick={onHovertrueContainer1Click}>
          <Button
            sx={{ width: 298 }}
            variant="contained"
            color="error"
            endIcon={<Icon>arrow_forward_sharp</Icon>}
          >
            Continue
          </Button>
        </div>
      </div>
      <img
        className={styles.backButtonIcon}
        alt=""
        src="/back-button1.svg"
        onClick={onBackButtonIconClick}
      />
      <b className={styles.pleaseSignUp}>
        Please sign up for an account with a valid email, username, and password
      </b>
      <div className={styles.signUp}>Sign Up</div>
    </div>
  );
};

export default SignUpPage;
