import { Link } from "react-router-dom";
import Informations from "../../Informations";
import styles from "./Companies.module.scss";

export default function Companies() {
  return (
    <section className={styles.entryCompaniesContainer}>
      <div className={styles.textElement}>
        <h1>Kompaniyalar</h1>
        <p>Sizləri düşünərək hazırladığımız kompaniyalarımızdan yararlanın</p>
        <article>
          Bu gün vizit kartları hər bir iş adamının məcburi atributudur.
          Müntəzəm olaraq yeni insanlarla tanış olan hər kəs daha effektiv
          təqdimat və tanışlıq üçün, vizit kartları hazırlamalıdır. Üstəlik,
          vizit kartların çapı olduqca ucuzdur. Bu gün vizit kartları hər bir iş
          adamının məcburi atributudur. Müntəzəm olaraq yeni insanlarla tanış
          olan hər kəs daha effektiv təqdimat və tanışlıq üçün, vizit kartları
          hazırlamalıdır. Üstəlik, vizit kartların çapı olduqca ucuzdur.
        </article>
      </div>
      <ul className={styles.companiesCards}>
        <li>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={Informations.CompaniesImage1} alt="Companies Image 1" />
            </div>
            <div className={styles.texts}>
              <p>16-24 Yanvar</p>
              <h3>Vizitkart</h3>
              <h2>25 % Endirim</h2>
              <Link to={"/companies/details"}>Ətraflı</Link>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={Informations.CompaniesImage2} alt="Companies Image 2" />
            </div>
            <div className={styles.texts}>
              <p>16-24 Yanvar</p>
              <h3>Vizitkart</h3>
              <h2>25 % Endirim</h2>
              <a href="#">Ətraflı</a>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={Informations.CompaniesImage2} alt="Companies Image 2" />
            </div>
            <div className={styles.texts}>
              <p>16-24 Yanvar</p>
              <h3>Vizitkart</h3>
              <h2>25 % Endirim</h2>
              <a href="#">Ətraflı</a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={Informations.CompaniesImage1} alt="Companies Image 1" />
            </div>
            <div className={styles.texts}>
              <p>16-24 Yanvar</p>
              <h3>Vizitkart</h3>
              <h2>25 % Endirim</h2>
              <a href="#">Ətraflı</a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
