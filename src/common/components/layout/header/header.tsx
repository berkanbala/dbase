import styles from "./header.module.scss";
import Logo from "../../../media/logo/logo.png";
import Logo1 from "../../../media/logo/twitter1.png";
import Logo2 from "../../../media/logo/facebook2.png";
// import Logo3 from "../../../media/logo/instagram2.png";
import Logo3 from "../../../media/logo/insta.png";
import Logo4 from "../../../media/logo/ws2.png";
// import Logo5 from "../../../media/logo/telephone.jpg";
import Logo5 from "../../../media/logo/telephone2.png";
import Logo6 from "../../../media/images/tarih.png";
import Logo7 from "../../../media/images/dil.png";
import Logo8 from "../../../media/icon/square.png";
import { Button } from "../../ui/button/button";
import { AllModals } from "../../../modals/allModals/allModals";
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img alt="logo" src={Logo} width={250} height={60} />
        <img alt="twitter" src={Logo1} width={50} height={60} />
        <img alt="facebook" src={Logo2} width={50} height={60} />
        <img alt="instagram" src={Logo3} width={50} height={60} />
        <img alt="whatsapp" src={Logo4} width={50} height={60} />
      </div>
      <div className={styles.share}>
        <Button type="submit" text={"Custom BTN"} />
        <img alt="icon" src={Logo8} width={50} height={60} />
      </div>
      <div className={styles.content}>
        <AllModals />
        <img alt="telephone" src={Logo5} width={50} height={60} />
        {/* <img alt="telephone" src={Logo6} width={75} height={60} /> */}
        <span> GMT +3 23:35</span>
        {/* <img alt="telephone" src={Logo7} width={75} height={60} /> */}
        <span> EN &#118;</span>
      </div>
    </div>
  );
};
