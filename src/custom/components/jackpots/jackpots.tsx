import styles from "./jackpots.module.scss";
import Image5 from "../../../common/media/images/jackpots.png";

export default function JackPots() {
  return (
    <div className={styles.container}>
      <img
        alt="jackpots"
        src={Image5}
        width={1000}
        height={200}
        className={styles.jackPots}
      />
    </div>
  );
}
