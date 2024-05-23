import { Link } from "react-router-dom";
import Informations from "../../../Informations";
import Slider from "../../SameParts/Main/Slider";
import styles from "./Details.module.scss";

export default function Details() {
  return (
    <section className={styles.detailsContainer}>
      <div className={styles.detailsCardHeader}>
        <div className={styles.headerImage}>
          <img
            src={Informations.DetailCompaniesImage}
            alt="Companies Detail Image"
          />
        </div>
        <div className={styles.detailsTexts}>
          <h1>Ofis məhsullarına Endirim</h1>
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
          <div className={styles.articleTwo}>
            <article>
              Bu gün vizit kartları hər bir iş adamının məcburi atributudur.
              Müntəzəm olaraq yeni insanlarla tanış olan hər kəs daha effektiv
              təqdimat və tanışlıq üçün, vizit kartları hazırlamalıdır. Üstəlik,
              vizit kartların çapı olduqca ucuzdur. Eyni zamanda, vizit kartı
              yalnız əlaqə məlumatlarını ötürməyə imkan vermir, həm də sahibinin
              statusunu əks etdirir. Ofset çap sabit yaxşı nəticə, yüksək çap
              keyfiyyəti, hamar kənarlar verir.
            </article>
            <p>
              500 AZNlik sifariş edən hər kəsə 10 faiz endirim tətbiq olunacaq
            </p>
          </div>
        </div>
      </div>
      <div className={styles.otherProjects}>
        <div className={styles.onlyText}>
          <p>Digər İşlərimiz</p>
          <Link to={"/companies"}>Hamısına bax</Link>
        </div>
        <Slider />
      </div>
    </section>
  );
}
