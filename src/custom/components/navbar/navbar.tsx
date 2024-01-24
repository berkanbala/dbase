import styles from "./navbar.module.scss";
// import Image from "../../../common/media/images/navbar.png";
// import Image from "../../../common/media/images/navbar2.png";
import { Link, useNavigate } from "react-router-dom";
import IconMenu from "../../../common/media/icon/burger-bar (1).png";
export const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/sports");

  return (
    <div className={styles.container}>
      {/* <img alt="navbar" src={Image} /> */}
      <div className={styles.menu}>
        <ul>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              HOME
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} onClick={handleClick} to="/sports">
              SPORTS
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              LIVE SPORTS
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              SLOT
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              LIVE CASINO
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              VIRTUAL SPORTS
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              SCRACTH
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              BINGO
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              BETGAMES
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              AVIATOR
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.caption}>
        <img src={IconMenu} alt="icon" width={50} height={50} />
        <div className={styles.bonus}>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              BONUS
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};
