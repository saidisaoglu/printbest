import styles from "./HomePage.module.scss";
import Informations from "../../Informations";
import { Link } from "react-router-dom";

export default function ServicesInHomePage() {
  return (
    <>
      <div className={styles.servicesTexts}>
        <div className={styles.headerText}>
          <p>Xidmətlərimiz</p>
          <Link to={"/services"}>Hamısına bax</Link>
        </div>
        <p>Keyfiyyətli xidmətlərimiz ilə, işinizi hər kəsdən fərqləndirin</p>
      </div>
      <ul className={styles.servicesCards}>
        <li>
          <div>
            <img src={Informations.PortfolioCard1} alt="Services Card 1" />
          </div>
          <Link to={"/services/card"}>
            Broşür <span>→</span>
          </Link>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard2} alt="Services Card 2" />
          </div>
          <a href="#">
            Flayer <span>→</span>
          </a>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard3} alt="Services Card 3" />
          </div>
          <a href="#">
            Vizitkart <span>→</span>
          </a>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard1} alt="Services Card 1" />
          </div>
          <a href="#">
            Broşür <span>→</span>
          </a>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard2} alt="Services Card 2" />
          </div>
          <a href="#">
            Flayer <span>→</span>
          </a>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard3} alt="Services Card 3" />
          </div>
          <a href="#">
            Vizitkart <span>→</span>
          </a>
        </li>
      </ul>
    </>
  );
}
