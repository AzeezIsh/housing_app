import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModelPage.module.css";

const ModelPage = () => {
  const navigate = useNavigate();

  const onBackButtonIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className={styles.modelPage}>
      <div className={styles.modelPageChild} />
      <div className={styles.presentHousePrice}>
        Present House Price for Dunwoody
      </div>
      <img
        className={styles.backButtonIcon}
        alt=""
        src="/back-button2.svg"
        onClick={onBackButtonIconClick}
      />
      <div className={styles.lineChartParent}>
        <img className={styles.lineChartIcon} alt="" src="/line-chart.svg" />
        <div className={styles.janFebMar}>
          Jan Feb Mar Apr May Jun Jul Aug Sep Oct
        </div>
        <div className={styles.div}>300000</div>
        <div className={styles.div1}>325000</div>
        <div className={styles.div2}>350000</div>
        <div className={styles.div3}>375000</div>
        <div className={styles.currentAvgPriceContainer}>
          <span className={styles.currentAvgPriceContainer1}>
            <b>Current AVG Price:</b>
            <span> $315,000</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModelPage;
