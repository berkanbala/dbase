import styles from "./contentPage.module.scss";
import Image1 from "../../../common/media/images/mbappe.png";
import Image2 from "../../../common/media/images/slider.png";
import Image3 from "../../../common/media/images/filter.png";
import Image4 from "../../../common/media/images/slots.png";
import Image5 from "../../../common/media/images/jackpots.png";
import Image6 from "../../../common/media/images/livegames.png";
import { slider } from "../../../common/shared/slider/slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Red from "../../../common/media/images/Rectangle1.png";
import Purple from "../../../common/media/images/Rectangle2.png";
import { slots } from "../../../common/shared/slots/slots";
import { liveGames } from "../../../common/shared/liveGames/liveGames";
import { Filters } from "../filter/filter";

import "swiper/scss";
import "swiper/scss/scrollbar";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/virtual";

export const ContentPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img alt="mbape" src={Image1} width={1420} height={400} />
        <div className={styles.caption}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={true}
            className={styles.mySwiper}
            spaceBetween={50}
            slidesPerView={3}
            slideNextClass="swiper-slide-next"
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className={styles.content}>
              <div className={styles.card}>
                <div className={styles.images}>
                  <img alt="cardImage" src={Red} />
                </div>
                <div className={styles.details}>
                  <span>Slot Games </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.content}>
              <div className={styles.card}>
                <div className={styles.images}>
                  <img alt="cardImage" src={Purple} />
                </div>
                <div className={styles.details}>
                  <span>Live Casino </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.content}>
              <div className={styles.card}>
                <div className={styles.images}>
                  <img alt="cardImage" src={Red} />
                </div>
                <div className={styles.details}>
                  <span>Aviator </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.content}>
              <div className={styles.card}>
                <div className={styles.images}>
                  <img alt="cardImage" src={Red} />
                </div>
                <div className={styles.details}>
                  <span>Etc </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.content}>
              <div className={styles.card}>
                <div className={styles.images}>
                  <img alt="cardImage" src={Red} />
                </div>
                <div className={styles.details}>
                  <span>Bonus </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Filters />
        <div className={styles.slots}>
          <div className={styles.title}>
            <h1>Popular Slots </h1>
            <span>Show All </span>
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
        <img
          alt="jackpots"
          src={Image5}
          width={1420}
          height={175}
          className={styles.jackPots}
        />
        <div className={styles.liveGame}>
          <div className={styles.title}>
            <h1>Popular Live Games </h1>
            <span>Show All </span>
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
      </div>
    </div>
  );
};
