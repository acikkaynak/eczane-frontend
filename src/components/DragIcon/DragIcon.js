import Control from "react-leaflet-custom-control";
import { debounce } from "../../utils/debounce";
import styles from "./DragIcon.module.scss";

export const DragIcon = ({ dragActive, onLockClick }) => (
  <Control position="topright">
    <button className={styles.button} onClick={debounce(onLockClick, 150)}>
      {!dragActive ? (
        <img src="/Lock.svg" alt="lock-icon" width={20} height={20} />
      ) : (
        <img src="/lockOpen.svg" alt="lock-open-icon" width={20} height={20} />
      )}
    </button>
  </Control>
);
