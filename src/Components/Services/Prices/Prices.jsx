import { Link } from "react-router-dom";
import Informations from "../../../Informations";
import OtherServices from "../../SameParts/Main/OtherServices";
import Slider from "../../SameParts/Main/Slider";
import styles from "./Prices.module.scss";

export default function Prices() {
  return (
    <section className={styles.pricesContainer}>
      <div className={styles.pricesHeader}>
        <div className={styles.headerImage}>
          <img src={Informations.PortfolioCard2} alt="Prices Header Image" />
        </div>
        <div className={styles.pricesAndTexts}>
          <div className={styles.textElement}>
            <h1>Məxməri Vizitkart</h1>
            <article className={styles.articleOne}>
              Bu gün vizit kartları hər bir iş adamının məcburi atributudur.
              Müntəzəm olaraq yeni insanlarla tanış olan hər kəs daha effektiv
              təqdimat və tanışlıq üçün, vizit kartları hazırlamalıdır. Üstəlik,
              vizit kartların çapı olduqca ucuzdur. Bu gün vizit kartları hər
              bir iş adamının məcburi atributudur. Müntəzəm olaraq yeni
              insanlarla tanış olan hər kəs daha effektiv təqdimat və tanışlıq
              üçün, vizit kartları hazırlamalıdır. Üstəlik, vizit kartların çapı
              olduqca ucuzdur.
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
              adamının məcburi atributudur. Müntəzəm olaraq yeni insanlarla
              tanış olan hər kəs daha effektiv təqdimat və tanışlıq üçün, vizit
              kartları hazırlamalıdır. Üstəlik, vizit kartların çapı olduqca
              ucuzdur. Eyni zamanda, vizit kartı yalnız əlaqə məlumatlarını
              ötürməyə imkan vermir, həm də sahibinin statusunu əks etdirir.
              Ofset çap sabit yaxşı nəticə, yüksək çap keyfiyyəti, hamar
              kənarlar verir. Bu çap üsulu böyük çaplar üçün uyğundur, çünki bu
              halda ən çox vaxt aparan addım fotoşəkillərin çıxarılması, foto
              formalarının hazırlanması, çap lövhələrinin hazırlanması və
              tənzimlənməsidir.
            </article>
          </div>
          <div className={styles.pricesElement}>
            <p className={styles.productsText}>Məhsullar</p>
            <ul className={styles.pricesPart}>
              <li>
                <p>100 ədəd</p>
                <p className={styles.arrow}>-</p>
                <div className={styles.pricesAzn}>
                  <div>
                    <img src={Informations.AznImage} alt="Azn Image" />
                  </div>
                  <p>15 AZN</p>
                </div>
              </li>
              <li>
                <p>300 ədəd</p>
                <p className={styles.arrow}>-</p>
                <div className={styles.pricesAzn}>
                  <div>
                    <img src={Informations.AznImage} alt="Azn Image" />
                  </div>
                  <p>50 AZN</p>
                </div>
              </li>
              <li>
                <p>500 ədəd</p>
                <p className={styles.arrow}>-</p>
                <div className={styles.pricesAzn}>
                  <div>
                    <img src={Informations.AznImage} alt="Azn Image" />
                  </div>
                  <p>80 AZN</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
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
