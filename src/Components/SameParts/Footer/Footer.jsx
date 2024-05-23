import Informations from "../../../Informations";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <div className={styles.upSide}>
        <div className={styles.logoElements}>
          <div className={styles.logoImage}>
            <img src={Informations.FooterLogo} alt="Logo Image" />
          </div>
          <div className={styles.emailAndPhoneElements}>
            <a href="tel:+31 (0) 85 301 51 16">PHONE: +31 (0) 85 301 51 16</a>
            <a target="_blank" href="mailto:info@theitsolutions.io">
              E-MAIL: info@theitsolutions.io
            </a>
          </div>
          <div className={styles.sosialNetworkElements}>
            <a target="_blank" href="https://www.facebook.com/">
              <img src={Informations.FooterFacebook} alt="Facebook Image" />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <img src={Informations.FooterInstagram} alt="Instagram Image" />
            </a>
          </div>
        </div>
        <div className={styles.emailAndPhoneContainer}>
          <a href="tel:+31 (0) 85 301 51 16">PHONE: +31 (0) 85 301 51 16</a>
          <a target="_blank" href="mailto:info@theitsolutions.io">
            E-MAIL: info@theitsolutions.io
          </a>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.informationsElements}>
            <p>Məlumat</p>
            <ul>
              <li>
                <a href="#">Ana səhifə</a>
              </li>
              <li>
                <a href="#">Portoflio</a>
              </li>
              <li>
                <a href="#">Xdimətlərimiz</a>
              </li>
              <li>
                <a href="#">Kompnaiyalar</a>
              </li>
              <li>
                <a href="#">Haqqımızda</a>
              </li>
            </ul>
          </div>
          <div className={styles.servicesElements}>
            <p>Xidmətlərimiz</p>
            <ul>
              <li>
                <a href="#">Digital Print</a>
              </li>
              <li>
                <a href="#">Shirt Print</a>
              </li>
              <li>
                <a href="#">Photo Print</a>
              </li>
              <li>
                <a href="#">Packaging</a>
              </li>
              <li>
                <a href="#">Document Print</a>
              </li>
              <li className={styles.hidden}>
                <a href="#">Digital Print</a>
              </li>
              <li className={styles.hidden}>
                <a href="#">Shirt Print</a>
              </li>
              <li className={styles.hidden}>
                <a href="#">Photo Print</a>
              </li>
              <li className={styles.hidden}>
                <a href="#">Packaging</a>
              </li>
              <li className={styles.hidden}>
                <a href="#">Document Print</a>
              </li>
            </ul>
          </div>
          <div className={styles.otherElements}>
            <ul>
              <li>
                <a href="#">Digital Print</a>
              </li>
              <li>
                <a href="#">Shirt Print</a>
              </li>
              <li>
                <a href="#">Photo Print</a>
              </li>
              <li>
                <a href="#">Packaging</a>
              </li>
              <li>
                <a href="#">Document Print</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contactPart}>
          <h2>Bizimlə Əlaqə</h2>
          <form>
            <input type="text" name="customerName" placeholder="Ad" required />
            <input
              type="number"
              name="PhoneNumber"
              placeholder="Əlaqə nömrəsi"
            />
            <input type="submit" name="SubmitButton" value={"Göndər"} />
          </form>
        </div>
      </div>
      <div className={styles.downSide}>
        <p>
          This site made by{" "}
          <a target="_blank" href="https://webrandy.com/">
            Webrandy.com
          </a>
        </p>
      </div>
    </footer>
  );
}
