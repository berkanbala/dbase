import styles from "./imagetop.module.scss";
import Image1 from "../../../common/media/images/mbappe.png";

export default function ImageTop() {
  return (
    <div className={styles.container}>
      <img alt="mbape" src={Image1} className={styles.images} />
    </div>
  );
}
