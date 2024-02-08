import styles from "./slots.module.scss";
import Image10 from "../../../common/media/icon/star.png";
import { slots } from "../../../common/shared/slots/slots";

export default function Slots() {
  return (
    <div className={styles.slots}>
      <div className={styles.title}>
        <img src={Image10} alt="" />
        <div className={styles.detail}>
          <h1>Popular Slots </h1>
          <span>Show All </span>
        </div>
      </div>

      <div className={styles.slotsDetail}>
        {slots.map((item: any) => (
          <div className={styles.slotsCard} key={item.id}>
            <img
              src={item.image}
              alt="slotsCardImage"
              width={250}
              height={125}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
