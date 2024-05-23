import { Link } from "react-router-dom";
import Informations from "../../../Informations";
import styles from "./OtherServices.module.scss";

export default function OtherServices() {
  return (
    <div className={styles.otherServices}>
      <div className={styles.otherServicesText}>
        <p>Digər Xidmətlərimiz</p>
        <Link to={"/services"}>Hamısına bax</Link>
      </div>
      <ul className={styles.otherServicesImages}>
        <li>
          <div>
            <img src={Informations.PortfolioCard1} alt="Business Card 1" />
          </div>
          <a href="#">
            Broşür <span>→</span>
          </a>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard2} alt="Business Card 2" />
          </div>
          <a href="#">
            Flayer <span>→</span>
          </a>
        </li>
        <li>
          <div>
            <img src={Informations.PortfolioCard3} alt="Business Card 3" />
          </div>
          <a href="#">
            Vizitkart <span>→</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
