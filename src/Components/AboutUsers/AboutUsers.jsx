import { Link } from "react-router-dom";
import styles from "./AboutUsers.module.scss";

export default function AboutUsers({ handleAboutUsers }) {
  return (
    <section className={styles.usersContainer}>
      <ul className={styles.usersElement}>
        <Link onClick={handleAboutUsers} className={styles.li} to={"/account"}>
          <a>Hesabım</a>
        </Link>
        <Link onClick={handleAboutUsers} className={styles.li} to={"/orders"}>
          <a className={styles.link}>Sifarişlərim</a>
        </Link>
        <Link onClick={handleAboutUsers} className={styles.li} to={"/order"}>
          <a className={styles.link}>Sifariş et</a>
        </Link>
        <Link onClick={handleAboutUsers} className={styles.li} to={"/"}>
          <a className={styles.link}>Çıxış</a>
        </Link>
      </ul>
    </section>
  );
}
