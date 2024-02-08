import styles from "./livegamedetail.module.scss";
import Image9 from "../../../common/media/icon/trophy.png";
import { liveGames } from "../../../common/shared/liveGames/liveGames";

export default function LiveGameDetail() {
  return (
    <div className={styles.liveGame}>
      <div className={styles.title}>
        <img src={Image9} alt="" width={30} height={30} />
        <div className={styles.detail}>
          <h1>Popular Live Games </h1>
          <span>Show All </span>
        </div>
      </div>
      <div className={styles.liveGameDetail}>
        {liveGames.map((item: any) => (
          <div className={styles.liveGameCard} key={item.id}>
            <img
              src={item.image}
              alt="liveGameCardImage"
              width={235}
              height={150}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
