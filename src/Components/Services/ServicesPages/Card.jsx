import styles from "./Card.module.scss";
import Informations from "../../../Informations";
import Slider from "../../SameParts/Main/Slider";
import OtherServices from "../../SameParts/Main/OtherServices";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <section className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.headerImage}>
          <img src={Informations.PortfolioCard2} alt="BusinessCard Image" />
        </div>
        <div className={styles.cardTexts}>
          <h1>Vizit kart</h1>
          <article className={styles.articleOne}>
            Bu gün vizit kartları hər bir iş adamının məcburi atributudur.
            Müntəzəm olaraq yeni insanlarla tanış olan hər kəs daha effektiv
            təqdimat və tanışlıq üçün, vizit kartları hazırlamalıdır. Üstəlik,
            vizit kartların çapı olduqca ucuzdur. Bu gün vizit kartları hər bir
            iş adamının məcburi atributudur. Müntəzəm olaraq yeni insanlarla
            tanış olan hər kəs daha effektiv təqdimat və tanışlıq üçün, vizit
            kartları hazırlamalıdır. Üstəlik, vizit kartların çapı olduqca
            ucuzdur.
          </article>
          <article className={styles.articleTwo}>
            Bu gün vizit kartları hər bir iş adamının məcburi atributudur.
            Müntəzəm olaraq yeni insanlarla tanış olan hər kəs daha effektiv
            təqdimat və tanışlıq üçün, vizit kartları hazırlamalıdır. Üstəlik,
            vizit kartların çapı olduqca ucuzdur. Eyni zamanda, vizit kartı
            yalnız əlaqə məlumatlarını ötürməyə imkan vermir, həm də sahibinin
            statusunu əks etdirir. Ofset çap sabit yaxşı nəticə, yüksək çap
            keyfiyyəti, hamar kənarlar verir. Bu çap üsulu böyük çaplar üçün
            uyğundur, çünki bu halda ən çox vaxt aparan addım fotoşəkillərin
            çıxarılması, foto formalarının hazırlanması, çap lövhələrinin
            hazırlanması və tənzimlənməsidir. Bu gün vizit kartları hər bir iş
            adamının məcburi atributudur. Müntəzəm olaraq yeni insanlarla tanış
            olan hər kəs daha effektiv təqdimat və tanışlıq üçün, vizit kartları
            hazırlamalıdır. Üstəlik, vizit kartların çapı olduqca ucuzdur. Eyni
            zamanda, vizit kartı yalnız əlaqə məlumatlarını ötürməyə imkan
            vermir, həm də sahibinin statusunu əks etdirir. Ofset çap sabit
            yaxşı nəticə, yüksək çap keyfiyyəti, hamar kənarlar verir. Bu çap
            üsulu böyük çaplar üçün uyğundur, çünki bu halda ən çox vaxt aparan
            addım fotoşəkillərin çıxarılması, foto formalarının hazırlanması,
            çap lövhələrinin hazırlanması və tənzimlənməsidir.
          </article>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <p>Məhsullarımız</p>
        <ul className={styles.cardsImages}>
          <li>
            <div>
              <img src={Informations.PortfolioCard1} alt="Business Card 1" />
            </div>
            <Link to={"/services/card/prices"}>
              Məxməri <span>→</span>
            </Link>
          </li>
          <li>
            <div>
              <img src={Informations.PortfolioCard2} alt="Business Card 2" />
            </div>
            <a href="#">
              Offset <span>→</span>
            </a>
          </li>
          <li>
            <div>
              <img src={Informations.PortfolioCard3} alt="Business Card 3" />
            </div>
            <a href="#">
              Metal <span>→</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.otherProjects}>
        <div className={styles.onlyText}>
          <p>Təhvil verdiyimiz müxtəlif çap layihələrinə nəzər salın.</p>
          <Link to={"/portfolio"}>Hamısına bax</Link>
        </div>
        <Slider />
      </div>
      <OtherServices />
    </section>
  );
}
