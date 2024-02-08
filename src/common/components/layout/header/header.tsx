import styles from "./header.module.scss";
import Logo from "../../../media/logo/Resim3.png";
import Logo1 from "../../../media/logo/twitter.png";
import Logo2 from "../../../media/logo/facebook.png";
import Logo3 from "../../../media/logo/instagram.png";
import Logo4 from "../../../media/logo/whatsapp.png";
import Logo6 from "../../../media/logo/telephone.png";
import Logo7 from "../../../media/icon/plus.png";
import { Button } from "../../ui/button/button";
import { AllModals } from "../../../modals/allModals/allModals";
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img alt="logo" src={Logo} width={250} height={60} />
        <div className={styles.socials}>
          <img alt="twitter" src={Logo1} width={50} height={50} />
          <img alt="facebook" src={Logo2} width={50} height={50} />
          <img alt="instagram" src={Logo3} width={50} height={50} />
          <img alt="whatsapp" src={Logo4} width={50} height={50} />

          <div className={styles.share}>
            <Button type="submit" text={"CUSTOM BTN"} />
            <img src={Logo7} alt="" width={50} height={50} />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <AllModals />
        <img alt="telephone" src={Logo6} width={50} height={50} />
        <span> GMT +3 23:35</span>
        <span> EN &#118;</span>
      </div>
    </div>
  );
};
