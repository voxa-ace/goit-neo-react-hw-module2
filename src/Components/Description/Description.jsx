import PropTypes from "prop-types";
import styles from "./Description.module.css";

const CafeInfo = ({ name, description }) => {
  return (
    <div className={styles["cafe-info"]}> 
      <h2 className={styles["cafe-name"]}>{name}</h2>
      <p className={styles["cafe-description"]}>{description}</p>
    </div>
  );
};

CafeInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CafeInfo;
