import styles from "./HomePage.module.scss";
import Informations from "../../Informations";

export default function AboutUsInHomePage() {
  return (
    <>
      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsText}>
          <p>Haqqımızda</p>
          <p>
            Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus.
          </p>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue.
          </p>
          <a href="#">Əlaqə</a>
        </div>
        <div className={styles.aboutUsImage}>
          <img src={Informations.AboutUsImage} alt="About Us Image" />
        </div>
      </div>
    </>
  );
}
