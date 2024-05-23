import { setuserFormData } from "../../ReduxToolkit/Features/StateSlice";
import styles from "./MyAccount.module.scss";
import { useDispatch, useSelector } from "react-redux";

export default function MyAccount() {
  const { userFormData } = useSelector((state) => state.state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setuserFormData({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userFormData);
  };

  return (
    <section className={styles.myAccountPart}>
      <div className={styles.myAccountTexts}>
        <h1>Hesabım</h1>
        <p>Hesab məlumatlarım</p>
        <div className={styles.expenseText}>
          <p>Son 3 ildə xərclənən məbləğ:</p>
          <p>
            3450 <span>AZN</span>
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <ul className={styles.inputsContainer}>
          <li>
            <div className={styles.inputElement}>
              <label htmlFor="name">Adınız</label>
              <input
                type="text"
                name="name"
                id="name"
                value={userFormData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputElement}>
              <label htmlFor="surname">Soyadınız</label>
              <input
                type="text"
                name="surname"
                id="surname"
                value={userFormData.surname}
                onChange={handleChange}
              />
            </div>
          </li>
          <li>
            <div className={styles.inputElement}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={userFormData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputElement}>
              <label htmlFor="phone">Əlaqə nömrəsi</label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={userFormData.phone}
                onChange={handleChange}
              />
            </div>
          </li>
        </ul>
        <div className={styles.buttons}>
          <a>Şifrəni dəyiş</a>
          <input type="submit" name="submitButton" value={"Yadda saxla"} />
        </div>
      </form>
    </section>
  );
}
