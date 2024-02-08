import styles from "./contentPage.module.scss";
import Slots from "../slots/slots";
import ImageTop from "../imagetop/imagetop";
import JackPots from "../jackpots/jackpots";
import CaptionSwiper from "../captionswiper/captionswiper";
import LiveGameDetail from "../livegamedetail/livegamedetail";
import { Filters } from "../filter/filter";

export const ContentPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <ImageTop />
        <CaptionSwiper />
        <Filters />
        <Slots />
        <JackPots />
        <LiveGameDetail />
      </div>
    </div>
  );
};
