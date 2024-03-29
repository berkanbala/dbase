import styles from "./navbar.module.scss";
import IconMenu from "../../../common/media/icon/burger-bar (1).png";
import { Link, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/sports");

  return (
    <div className={styles.container}>
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
          <li className={styles.item}>
            <div className={styles.hamburger}>
              <span>+5</span>
              <img src={IconMenu} alt="icon" width={30} height={30} />
            </div>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/">
              BONUS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
