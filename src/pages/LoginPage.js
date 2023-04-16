import { useCallback } from "react";
import { TextField, Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onHovertrueContainerClick = useCallback(() => {
    // Please sync "Home page" to the project
  }, []);

  const onBackButtonIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHovertrueClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPageChild} />
      <div className={styles.loginPageItem} />
      <TextField
        className={styles.loginPageInner}
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
        className={styles.rectangleTextfield}
        sx={{ width: 333 }}
        color="primary"
        variant="filled"
        type="text"
        label="Password"
        placeholder="Password"
        size="medium"
        margin="none"
      />
      <div className={styles.eyeCatchingButton}>
        <div className={styles.hovertrue} onClick={onHovertrueContainerClick}>
          <Button
            sx={{ width: 300 }}
            variant="contained"
            color="primary"
            endIcon={<Icon>arrow_forward_sharp</Icon>}
          >
            Login
          </Button>
        </div>
      </div>
      <img
        className={styles.backButtonIcon}
        alt=""
        src="/back-button.svg"
        onClick={onBackButtonIconClick}
      />
      <div className={styles.smallButton}>
        <Button
          className={styles.hovertrue1}
          sx={{ width: 94 }}
          variant="contained"
          color="secondary"
          onClick={onHovertrueClick}
        >
          Sign up
        </Button>
      </div>
      <div className={styles.logInUsingContainer}>
        <span>{`Log in using your `}</span>
        <span className={styles.email}>Email</span>
        <span>{` and `}</span>
        <span className={styles.email}>Password</span>
      </div>
    </div>
  );
};

export default LoginPage;
