import styles from "./captionswiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Purple from "../../../common/media/images/Rectangle2.png";
import Red from "../../../common/media/images/Rectangle1.png";

import "swiper/scss";
import "swiper/scss/scrollbar";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/virtual";
export default function CaptionSwiper() {
  return (
    <div className={styles.caption}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
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
  );
}
