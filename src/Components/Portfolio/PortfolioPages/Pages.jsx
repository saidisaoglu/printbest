import styles from "./Pages.module.scss";
import Informations from "../../../Informations";
import Slider from "../../SameParts/Main/Slider";
import { Link } from "react-router-dom";

export default function Pages() {
  return (
    <section className={styles.pagesContainer}>
      <div className={styles.textElement}>
        <h1>Broşür</h1>
        <article>
          Bu gün vizit kartları hər bir iş adamının məcburi atributudur.
          Müntəzəm olaraq yeni insanlarla tanış olan hər kəs daha effektiv
          təqdimat və tanışlıq üçün, vizit kartları hazırlamalıdır. Üstəlik,
          vizit kartların çapı olduqca ucuzdur. Bu gün vizit kartları hər bir iş
          adamının məcburi atributudur. Müntəzəm olaraq yeni insanlarla tanış
          olan hər kəs daha effektiv təqdimat və tanışlıq üçün, vizit kartları
          hazırlamalıdır. Üstəlik, vizit kartların çapı olduqca ucuzdur.{" "}
        </article>
      </div>
      <div className={styles.pagesImages}>
        <div className={styles.imageOne}>
          <img src={Informations.BroshurImage1} alt="Broshur Image 1" />
        </div>
        <div className={styles.imageTwo}>
          <img src={Informations.BroshurImage2} alt="Broshur Image 2" />
        </div>
        <div className={styles.imageThree}>
          <img src={Informations.BroshurImage3} alt="Broshur Image 3" />
        </div>
      </div>
      <div className={styles.otherOurWorks}>
        <div className={styles.onlyText}>
          <p>Digər İşlərimiz</p>
          <Link to={"/portfolio"}>Hamısına bax</Link>
        </div>
        <Slider />
      </div>
    </section>
  );
}
