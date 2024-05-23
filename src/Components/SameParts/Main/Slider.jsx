import { useRef } from "react";
import Informations from "../../../Informations";
import styles from "./Slider.module.scss";

export default function Slider() {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    let scrollAmount;

    if (window.innerWidth >= 320) {
      scrollAmount = 210;
    }
    if (window.innerWidth >= 400) {
      scrollAmount = 250;
    }
    if (window.innerWidth >= 500) {
      scrollAmount = 300;
    }
    if (window.innerWidth >= 768) {
      scrollAmount = 350;
    }

    if (slider) {
      if (direction === "left") {
        slider.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        slider.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.leftArrow} onClick={() => handleScroll("left")}>
        <img src={Informations.LeftArrow} alt="Left Arrow" />
      </div>
      <div className={styles.sliderImages} ref={sliderRef}>
        <div className={styles.imageElement}>
          <div>
            <img src={Informations.OtherImages1} alt="Other Images 1" />
          </div>
          <a href="#">Vizitkart - Ətraflı</a>
        </div>
        <div className={styles.imageElement}>
          <div>
            <img src={Informations.OtherImages2} alt="Other Images 2" />
          </div>
          <a href="#">Vizitkart - Ətraflı</a>
        </div>
        <div className={styles.imageElement}>
          <div>
            <img src={Informations.OtherImages3} alt="Other Images 3" />
          </div>
          <a href="#">Vizitkart - Ətraflı</a>
        </div>
      </div>
      <div className={styles.rightArrow} onClick={() => handleScroll("right")}>
        <img src={Informations.RightArrow} alt="Right Arrow" />
      </div>
    </div>
  );
}
