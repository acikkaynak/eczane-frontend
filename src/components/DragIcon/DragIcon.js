import PropTypes from "prop-types"; // ES6
import Control from "react-leaflet-custom-control";
import { debounce } from "../../utils/debounce";
import styles from "./DragIcon.module.scss";

export const DragIcon = ({ dragActive, onLockClick }) => (
  <Control position="topright">
    <button
      type="button"
      className={styles.button}
      onClick={debounce(onLockClick, 150)}
    >
      <div className={styles.iconWrapper}>
        {!dragActive ? (
          <span className={styles.lockIcon}></span>
        ) : (
          <span className={styles.lockOpenIcon}></span>
        )}
      </div>
    </button>
  </Control>
);
DragIcon.propTypes = {
  dragActive: PropTypes.bool.isRequired,
  onLockClick: PropTypes.func.isRequired,
};
