import { useState } from "react";
import Informations from "../../Informations";
import styles from "./Login.module.scss";

export default function Login({
  handleLoginWindow,
  login,
  handleLogin,
  registered,
  handleRegistered,
  handleEnteredUsers,
}) {
  const [forgotPassword, setForgotPassword] = useState(true);

  const handleForgotPassword = () => {
    if (forgotPassword) {
      setForgotPassword(false);
    } else {
      setForgotPassword(true);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.element}>
        {/* --------------Login-------------- */}
        <div className={styles.xIcon}>
          <div>
            <img
              onClick={handleLoginWindow}
              src={Informations.XIcon}
              alt="X Icon"
            />
          </div>
        </div>
        <div className={styles.loginAndRegistered}>
          <p
            onClick={handleLogin}
            className={login ? styles.activeLogin : null}
          >
            Daxil ol
          </p>
          <p
            onClick={handleRegistered}
            className={registered ? styles.activeRegistered : null}
          >
            Qeydiyyat
          </p>
        </div>
        {login && (
          <>
            <form>
              <input type="email" name="email" placeholder="Email" required />
              {forgotPassword && (
                <input
                  type="password"
                  name="password"
                  placeholder="Şifrə"
                  required
                />
              )}
              <div className={styles.loginEntered}>
                {forgotPassword && (
                  <p
                    className={styles.forgotText}
                    onClick={handleForgotPassword}
                  >
                    Şifrəmi unutdum
                  </p>
                )}
                {!forgotPassword && (
                  <p className={styles.back} onClick={handleForgotPassword}>
                    Geri
                  </p>
                )}
                <input
                  className={styles.entryButton}
                  type="submit"
                  name="submitButton"
                  value={"Daxil ol"}
                  onClick={handleEnteredUsers}
                />
              </div>
            </form>
          </>
        )}
        {/* --------------Register-------------- */}
        {registered && (
          <>
            <form className={styles.registeredInputs}>
              <input type="text" name="name" placeholder="Ad" required />
              <input type="text" name="surname" placeholder="Soyad" required />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="number"
                name="phone"
                placeholder="Telefon nömrəsi"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Şifrə"
                required
              />
              <input
                type="password"
                name="repeatPassword"
                placeholder="Şifrəni təsdiq et"
                required
              />
              <div className={styles.registeredEntered}>
                <input
                  className={styles.entryButton}
                  type="submit"
                  name="submitButton"
                  value={"Daxil ol"}
                />
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
