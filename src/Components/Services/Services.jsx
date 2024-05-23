import styles from "./Services.module.scss";
import Informations from "../../Informations";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className={styles.servicesContainer}>
      <div className={styles.textElement}>
        <h1>Xidmətlərimiz</h1>
        <p>Keyfiyyətli xidmətlərimiz ilə, işinizi hər kəsdən fərqləndirin</p>
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
      <ul className={styles.servicesCards}>
        <li>
          <div>
            <img src={Informations.PortfolioCard1} alt="Portfolio Card 1" />
          </div>
          <Link to={"/services/card"}>
            Broşür <span>→</span>
          </Link>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard2} alt="Portfolio Card 2" />
          </div>
          <a href="#">
            Flayer <span>→</span>
          </a>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard3} alt="Portfolio Card 3" />
          </div>
          <a href="#">
            Vizitkart <span>→</span>
          </a>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard1} alt="Portfolio Card 1" />
          </div>
          <a href="#">
            Broşür <span>→</span>
          </a>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard2} alt="Portfolio Card 2" />
          </div>
          <a href="#">
            Flayer <span>→</span>
          </a>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard3} alt="Portfolio Card 3" />
          </div>
          <a href="#">
            Vizitkart <span>→</span>
          </a>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard1} alt="Portfolio Card 1" />
          </div>
          <a href="#">
            Broşür <span>→</span>
          </a>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard2} alt="Portfolio Card 2" />
          </div>
          <a href="#">
            Flayer <span>→</span>
          </a>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard3} alt="Portfolio Card 3" />
          </div>
          <a href="#">
            Vizitkart <span>→</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
