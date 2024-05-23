import styles from "./HomePage.module.scss";
import { Link } from "react-router-dom";
import Slider from "../SameParts/Main/Slider";

export default function PortfolioInHomePage() {
  return (
    <div className={styles.otherOurWorks}>
      <div className={styles.onlyText}>
        <p>Portfolio</p>
        <Link to={"/portfolio"}>Hamısına bax</Link>
      </div>
      <p className={styles.text}>
        Təhvil verdiyimiz müxtəlif çap layihələrinə nəzər salın.
      </p>
      <Slider />
    </div>
  );
}
