import { useCallback } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onEyeCatchingButtontrueContainerClick = useCallback(() => {
    navigate("/settings-page");
  }, [navigate]);

  const onButtonContainedTextClick = useCallback(() => {
    navigate("/model-page");
  }, [navigate]);

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageChild} />
      <div className={styles.welcomeTejas}>Welcome, Tejas</div>
      <div
        className={styles.eyeCatchingButtontrue}
        onClick={onEyeCatchingButtontrueContainerClick}
      >
        <Button sx={{ width: 300 }} variant="contained" color="error">
          Settings
        </Button>
      </div>
      <div className={styles.welcomeToThe}>Welcome to the application!</div>
      <div className={styles.homePageItem} />
      <FormControl
        className={styles.selectoutlined}
        sx={{ width: 220 }}
        variant="outlined"
      >
        <InputLabel color="secondary">Time Frame</InputLabel>
        <Select
          color="secondary"
          name="Time frame"
          size="medium"
          label="Time Frame"
        >
          <MenuItem value="Present">Present</MenuItem>
          <MenuItem value="Past">Past</MenuItem>
          <MenuItem value="Future">Future</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <FormControl
        className={styles.selectoutlined1}
        sx={{ width: 220 }}
        variant="outlined"
      >
        <InputLabel color="secondary">House Style</InputLabel>
        <Select
          color="secondary"
          name="Style"
          size="medium"
          label="House Style"
        >
          <MenuItem value="House">House</MenuItem>
          <MenuItem value="Apartment">Apartment</MenuItem>
          <MenuItem value="Townhome">Townhome</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <FormControl
        className={styles.selectoutlined2}
        sx={{ width: 220 }}
        variant="outlined"
      >
        <InputLabel color="secondary">Location</InputLabel>
        <Select
          color="secondary"
          name="Location"
          size="medium"
          label="Location"
        >
          <MenuItem value="Buckhead">Buckhead</MenuItem>
          <MenuItem value="Dunwoody">Dunwoody</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <Button
        className={styles.buttoncontainedText}
        variant="contained"
        color="primary"
        onClick={onButtonContainedTextClick}
      >
        Next
      </Button>
    </div>
  );
};

export default HomePage;
