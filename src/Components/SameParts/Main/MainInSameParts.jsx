import { Link } from "react-router-dom";
import Informations from "../../../Informations";
import styles from "./MainInSameParts.module.scss";
export default function MainInSameParts() {
  return (
    <section className={styles.mainPart}>
      <div className={styles.triangleElement}>
        <img src={Informations.Triangle} alt="Triangle Image 1" />
      </div>
      <div className={styles.textElement}>
        <p>
          <strong>Keyfiyyətli xidmətlərimiz</strong> ilə, işinizi hər kəsdən
          fərqləndirin
        </p>
        <article>
          Bu gün vizit kartları hər bir iş adamının məcburi atributudur.
          Müntəzəm olaraq yeni insanlarla tanış olan hər kəs daha effektiv
          təqdimat və tanışlıq üçün, vizit kartlar
        </article>
        <Link className={styles.orderButton} to={"/companies/details"}>
          Ətraflı
        </Link>
      </div>
      <div className={styles.imageElement}>
        <div className={styles.triangleImage}>
          <img src={Informations.Triangle2} alt="Triangle Image 2" />
        </div>
        <div className={styles.productsImage}>
          <img src={Informations.ProductImages} alt="Product Images" />
        </div>
        <div className={styles.productsImage2}>
          <img src={Informations.ProductImages2} alt="Product Images" />
        </div>
      </div>
    </section>
  );
}
