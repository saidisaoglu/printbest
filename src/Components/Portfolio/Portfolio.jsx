import styles from "./Portfolio.module.scss";
import Informations from "../../Informations";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className={styles.portfolioPart}>
      <div className={styles.portfolioTexts}>
        <h1>Portfolio</h1>
        <p>Təhvil verdiyimiz müxtəlif çap layihələrinə nəzər salın</p>
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
      <ul className={styles.portfolioCards}>
        <li>
          <div>
            <img src={Informations.PortfolioCard1} alt="Portfolio Card 1" />
          </div>
          <Link to={"/portfolio/pages"}>
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
      </ul>
    </div>
  );
}
