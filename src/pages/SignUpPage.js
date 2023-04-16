import { useCallback } from "react";
import { Button, TextField, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onHovertrueClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onHovertrueContainerClick = useCallback(() => {
    // Please sync "Home page" to the project
  }, []);

  const onBackButtonIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpPageChild} />
      <div className={styles.smallButton}>
        <Button
          className={styles.hovertrue}
          variant="contained"
          color="primary"
          size="small"
          onClick={onHovertrueClick}
        >
          Sign in
        </Button>
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
          placeholder="Email"
          size="medium"
          margin="none"
        />
      </div>
      <div className={styles.eyeCatchingButton}>
        <div className={styles.hovertrue1} onClick={onHovertrueContainerClick}>
          <Button
            sx={{ width: 298 }}
            variant="contained"
            color="primary"
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
    </div>
  );
};

export default SignUpPage;
