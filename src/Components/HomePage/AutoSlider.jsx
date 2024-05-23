import React, { useState } from "react";
import styles from "./HomePage.module.scss";
import sliderLogo1 from "../../Images/sliderLogo.svg";
import sliderLogo2 from "../../Images/sliderLogo.svg";
import sliderLogo3 from "../../Images/sliderLogo.svg";

const clientsData = [
  { logo: sliderLogo1, name: "Volkswagen 1" },
  { logo: sliderLogo2, name: "Volkswagen 2" },
  { logo: sliderLogo3, name: "Volkswagen 3" },
];
const repeatedClientsData = Array.from(
  { length: 20 },
  (_, index) => clientsData[index % clientsData.length]
);

export default function AutoSlider() {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseMove = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className={styles.container}>
      <div
        className={`${styles.upSideContainer} ${isPaused ? styles.paused : ""}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index} className={styles.upSliderContainer}>
            {repeatedClientsData.map((client, clientIndex) => (
              <div key={clientIndex} className={styles.upSlider}>
                <img src={client.logo} alt="Logo" />
                <p>{client.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        className={`${styles.upSideContainer} ${isPaused ? styles.paused : ""}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index} className={styles.downSliderContainer}>
            {repeatedClientsData.map((client, clientIndex) => (
              <div key={clientIndex} className={styles.upSlider}>
                <img src={client.logo} alt="Logo" />
                <p>{client.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
