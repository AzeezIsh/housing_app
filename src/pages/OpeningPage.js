import { useCallback } from "react";
import { Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./OpeningPage.module.css";

const OpeningPage = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onHoverfalseContainerClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className={styles.openingPage}>
      <div className={styles.houses1} />
      <div className={styles.openingPageChild} />
      <div className={styles.openingPageItem} />
      <div className={styles.eyeCatchingButtonParent}>
        <div className={styles.eyeCatchingButton}>
          <div className={styles.hovertrue}>
            <Button
              className={styles.button}
              sx={{ width: 300 }}
              variant="contained"
              color="primary"
              endIcon={<Icon>arrow_forward_sharp</Icon>}
              onClick={onButtonClick}
            >
              Login
            </Button>
          </div>
        </div>
        <div className={styles.eyeCatchingButton}>
          <div
            className={styles.hoverfalse}
            onClick={onHoverfalseContainerClick}
          >
            <Button
              sx={{ width: 252 }}
              variant="contained"
              name="get_started"
              color="primary"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningPage;
