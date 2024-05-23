import Informations from "../../Informations";
import styles from "./EntryContact.module.scss";

export default function EntryContact() {
  return (
    <section className={styles.entryContactContainer}>
      <div className={styles.entryContactElement}>
        <div className={styles.leftSide}>
          <div className={styles.textElement}>
            <h1>Əlaqə</h1>
            <p>Bizimlə Əlaqə Saxlayın</p>
          </div>
          <form>
            <div>
              <label htmlFor="username">Adınız</label>
              <input type="text" name="username" id="username" required />
            </div>
            <div>
              <label htmlFor="phoneNumber">Əlaqə nömrəsi</label>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                required
              />
            </div>
            <div className={styles.submitButton}>
              <input type="submit" name="submitButton" value={"Göndər"} />
            </div>
          </form>
        </div>
        <div className={styles.rightSide}>
          <h2>Əlaqə Məlumatları</h2>
          <article>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue.
          </article>
          <ul className={styles.contactInformations}>
            <li>
              <div>
                <p>
                  <span>Ünvan:</span> 57 Üzeyir Hacıbəyov, Bakı 1095
                </p>
              </div>
              <div>
                <p>
                  <span>Əlaqə nömrəsi:</span> +994(50)-751-23-07
                </p>
              </div>
            </li>
            <li>
              <div>
                <p>
                  <span>Wp nömrəsi: </span>
                  +994(50)-751-23-07
                </p>
              </div>
              <div>
                <p>
                  <span>E-Mail: </span>
                  info@bps.az
                </p>
              </div>
            </li>
          </ul>
          <h2>Bizi Sosial Mediadan izləyin!</h2>
          <ul className={styles.sosialNetwork}>
            <li>
              <a target="_blank" href="https://www.facebook.com/">
                <img
                  src={Informations.FacebookContact}
                  alt="Facebook Contact Image"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/">
                <img
                  src={Informations.InstagramContact}
                  alt="Instagram Contact Image"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/">
                <img
                  src={Informations.LinkedinContact}
                  alt="Linkedin Contact Image"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.tiktok.com/">
                <img
                  src={Informations.TiktokContact}
                  alt="Tiktok Contact Image"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          className={styles.mapElement}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.6181272580125!2d49.841984088326456!3d40.37299099782412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dae63e7b6b9%3A0xab4eca7ed2c7a634!2zNTcgw5x6ZXlpciBIYWPEsWLJmXlvdiwgQmFrxLE!5e0!3m2!1str!2saz!4v1713092607603!5m2!1str!2saz"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
