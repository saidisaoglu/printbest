import styles from "./HomePage.module.scss";
import Informations from "../../Informations";
import { Link } from "react-router-dom";

export default function CompaniesInHomePage() {
  return (
    <>
      <div className={styles.companiesInHomePageContainer}>
        <div className={styles.companiesTextElement}>
          <div className={styles.companiesOnlyText}>
            <p>Portfolio</p>
            <Link to={"/companies"}>Hamısına bax</Link>
          </div>
          <p className={styles.companiesTexts}>
            Təhvil verdiyimiz müxtəlif çap layihələrinə nəzər salın.
          </p>
        </div>
        <ul className={styles.companiesCardElement}>
          <li className={styles.card}>
            <div className={styles.image}>
              <img src={Informations.CompaniesImage2} alt="Companies Image 2" />
            </div>
            <div className={styles.texts}>
              <p>16-24 Yanvar</p>
              <h3>Vizitkart</h3>
              <h2>25 % Endirim</h2>
              <Link to={"/companies/details"}>Ətraflı</Link>
            </div>
          </li>
          <li className={styles.card}>
            <div className={styles.image}>
              <img src={Informations.CompaniesImage1} alt="Companies Image 1" />
            </div>
            <div className={styles.texts}>
              <p>16-24 Yanvar</p>
              <h3>Vizitkart</h3>
              <h2>25 % Endirim</h2>
              <Link to={"/companies/details"}>Ətraflı</Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
