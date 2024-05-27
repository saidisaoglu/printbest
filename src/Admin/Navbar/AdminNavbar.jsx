import styles from "./AdminNavbar.module.scss";
import BurgerMenu from "../../Images/menu.png";
export default function AdminNavbar() {
  return (
    <nav className={styles.adminNavbar}>
      <img src={BurgerMenu} alt="Burgermenu" />
    </nav>
  );
}
