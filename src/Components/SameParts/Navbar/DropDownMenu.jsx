import styles from "./DropDownMenu.module.scss";
import CrossButton from "../../../Images/CrossButton.svg";
import LoginAccount from "../../../Images/loginAccount.svg";
import { Link } from "react-router-dom";
import AboutUsers from "../../AboutUsers/AboutUsers";
export default function DropDownMenu({
  setActive,
  active,
  handleLoginWindow,
  enteredUsers,
  aboutUsers,
  handleAboutUsers,
}) {
  return (
    <aside className={`${styles.aside} ${active ? styles.active : ""}`}>
      <img
        onClick={() => {
          setActive(false);
        }}
        src={CrossButton}
        alt="button"
        className={styles.crossButton}
      />
      <ul className={styles.categoriesContainer}>
        <li>
          <Link
            onClick={() => setActive(false)}
            className={styles.categories}
            to={"/"}
          >
            Ana Səhifə
          </Link>
        </li>
        <Link
          onClick={() => setActive(false)}
          className={styles.categories}
          to={"/services"}
        >
          Xidmətlər
        </Link>
        <Link
          onClick={() => setActive(false)}
          className={styles.categories}
          to={"/portfolio"}
        >
          Porfolio
        </Link>
        <Link
          onClick={() => setActive(false)}
          className={styles.categories}
          to={"/companies"}
        >
          Kompaniyalar
        </Link>
        <Link
          onClick={() => setActive(false)}
          className={styles.categories}
          to={"/contact"}
        >
          Əlaqə
        </Link>
        {enteredUsers && (
          <div onClick={handleLoginWindow}>
            <p onClick={() => setActive(false)} className={styles.categories}>
              Daxil ol/Qeydiyyat
            </p>
            <img className={styles.login} src={LoginAccount} alt=" login" />
          </div>
        )}
        {!enteredUsers && <a onClick={handleAboutUsers}>Azad Mirzazada</a>}
        {aboutUsers && <AboutUsers handleAboutUsers={handleAboutUsers} />}
      </ul>
    </aside>
  );
}
