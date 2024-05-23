import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Informations from "../../../Informations";
import styles from "./Navbar.module.scss";
import AboutUsers from "../../AboutUsers/AboutUsers";
import DropDownMenu from "./DropDownMenu";
export default function NavbarInSameParts({
  handleLoginWindow,
  enteredUsers,
  aboutUsers,
  handleAboutUsers,
}) {
  const location = useLocation();
  const portfolio = location.pathname.includes("/portfolio");
  const services = location.pathname.includes("/services");
  const companies = location.pathname.includes("/companies");
  const contact = location.pathname.includes("/contact");
  const accountant = location.pathname.includes("/account");
  const [isNavbar, setIsNavbar] = useState(true);
  const [searched, setSearched] = useState(true);
  const [active, setActive] = useState(false);

  const handleSearch = () => {
    setSearched(false);
  };
  const handleNavbar = () => {
    setActive(true);
  };

  useEffect(() => {
    setIsNavbar(location.pathname !== "/");
  }, [location.pathname]);

  return (
    <header className={!isNavbar ? styles.header : null}>
      <div className={styles.loginPart}>
        <ul className={styles.contactInformations}>
          <li className={styles.phoneElement}>
            <figure>
              {isNavbar ? (
                <img src={Informations.BlackPhone} alt="Phone Image" />
              ) : null}
              {!isNavbar ? (
                <img src={Informations.WhiteCall} alt="White Phone Image" />
              ) : null}
            </figure>
            <a
              className={!isNavbar ? styles.whiteColor : styles.blackColor}
              href="tel:+994 (70)xxx-xx-xx"
            >
              +994 (70)xxx-xx-xx
            </a>
          </li>
          <li className={styles.mailElement}>
            <figure>
              {isNavbar ? (
                <img src={Informations.BlackMail} alt="Mail Image" />
              ) : null}
              {!isNavbar ? (
                <img src={Informations.WhiteMail} alt="White Mail Image" />
              ) : null}
            </figure>
            <a
              className={!isNavbar ? styles.whiteColor : styles.blackColor}
              target="_blank"
              href="mailto:bestprint@gmail.com"
            >
              bestprint@gmail.com
            </a>
          </li>
          <li className={styles.sosialAndLangElements}>
            <ul className={styles.sosialNetworkElement}>
              <li>
                <a
                  className={styles.whiteColor}
                  target="_blank"
                  href="https://www.instagram.com/"
                >
                  {isNavbar ? (
                    <img
                      src={Informations.BlackInstagram}
                      alt="Instagram Logo"
                    />
                  ) : null}
                  {!isNavbar ? (
                    <img
                      src={Informations.WhiteInstagram}
                      alt="White Instagram Logo"
                    />
                  ) : null}
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/">
                  {isNavbar ? (
                    <img src={Informations.BlackFacebook} alt="Facebook Logo" />
                  ) : null}
                  {!isNavbar ? (
                    <img
                      src={Informations.WhiteFacebook}
                      alt="White Facebook Logo"
                    />
                  ) : null}
                </a>
              </li>
            </ul>
            <div className={styles.langElement}>
              <p className={!isNavbar ? styles.whiteColor : styles.blackColor}>
                AZE
              </p>
              <div className={styles.arrowElement}>
                {isNavbar ? (
                  <img src={Informations.BlackDownArrow} alt="Down Arrow" />
                ) : null}
                {!isNavbar ? (
                  <img
                    src={Informations.WhiteDownArrow}
                    alt="White Lang Arrow"
                  />
                ) : null}
              </div>
            </div>
          </li>
        </ul>
        {/* ----------users-------- */}
        <ul className={styles.userElement}>
          <li>
            {enteredUsers && (
              <a
                onClick={handleLoginWindow}
                className={!isNavbar ? styles.whiteColor : styles.blackColor}
              >
                Daxil ol/Qeydiyyat
              </a>
            )}
            {!enteredUsers && (
              <a
                onClick={handleAboutUsers}
                className={!isNavbar ? styles.whiteColor : styles.blackColor}
              >
                Azad Mirzazada
              </a>
            )}
            <div className={styles.arrow}>
              {!isNavbar && (
                <img src={Informations.WhiteDownArrow} alt="White Down Arrow" />
              )}
              {isNavbar && (
                <img src={Informations.BlackDownArrow} alt="Black Down Arrow" />
              )}
            </div>
          </li>
          <li className={styles.userImage}>
            {isNavbar && <img src={Informations.UserImage} alt="User Image" />}
            {!isNavbar && (
              <img src={Informations.WhiteAccount} alt="White Account Image" />
            )}
          </li>
          {aboutUsers && (
            <AboutUsers
              handleAboutUsers={handleAboutUsers}
              
            />
          )}
        </ul>
      </div>
      <nav className={!isNavbar ? styles.navbar : null}>
        <div className={styles.logoElement}>
          {isNavbar && <img src={Informations.Logo} alt="Logo Image" />}
          {!isNavbar && (
            <img src={Informations.WhiteLogo} alt="White Logo Image" />
          )}
        </div>
        <ul className={styles.searchAndMenuElements}>
          <li>
            {searched && (
              <img
                className={
                  isNavbar ? styles.searchImage : styles.searchImageHidden
                }
                onClick={handleSearch}
                src={Informations.Search}
                alt="Search Image"
              />
            )}
            {searched && (
              <img
                className={
                  !isNavbar ? styles.searchImage : styles.searchImageHidden
                }
                onClick={handleSearch}
                src={Informations.WhiteSearch}
                alt="White Search Image"
              />
            )}
            {!searched && (
              <div className={styles.searchInput}>
                <input type="text" name="searchPart" placeholder="Axtarış" />
                <div className={styles.searchImageInInput}>
                  <img src={Informations.Search} alt="Search Image In Input" />
                </div>
              </div>
            )}
          </li>
          <li>
            {isNavbar && (
              <img
                src={Informations.HamburgerBar}
                alt="HamburgerBar Image"
                onClick={handleNavbar}
              />
            )}
            {!isNavbar && (
              <img
                src={Informations.WhiteHamburgerBar}
                alt="White HamburgerBar Image"
                onClick={handleNavbar}
              />
            )}
          </li>
        </ul>
        <ul className={styles.menuList}>
          <li>
            <Link
              to={"/"}
              className={!isNavbar ? styles.whiteColor : styles.blackColor}
            >
              Ana Səhifə
            </Link>
          </li>
          <li>
            <Link
              to={"/portfolio"}
              className={!isNavbar ? styles.whiteColor : styles.blackColor}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to={"/services"}
              className={!isNavbar ? styles.whiteColor : styles.blackColor}
            >
              Xidmətlərimiz
            </Link>
          </li>
          <li>
            <Link
              to={"/companies"}
              className={!isNavbar ? styles.whiteColor : styles.blackColor}
            >
              Kompaniyalar
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className={!isNavbar ? styles.whiteColor : styles.blackColor}
            >
              Əlaqə
            </Link>
          </li>
        </ul>
        <div className={styles.searchAndOrderElements}>
          <div className={styles.searchInput}>
            <input
              className={!isNavbar ? styles.whiteColor : styles.blackColor}
              type="text"
              name="searchPart"
              placeholder="Axtarış"
            />
            <div className={styles.searchImageInInput}>
              {isNavbar && (
                <img src={Informations.Search} alt="Search Image In Input" />
              )}
              {!isNavbar && (
                <img
                  className={styles.whiteSearch}
                  src={Informations.WhiteSearch}
                  alt="White Search Image In Input"
                />
              )}
              {!isNavbar && (
                <img
                  className={styles.blackSearch}
                  src={Informations.Search}
                  alt="Search Image In Input"
                />
              )}
            </div>
          </div>
          <a className={styles.orderButton} href="#">
            Sifariş et
          </a>
        </div>
      </nav>
      {isNavbar && (
        <div className={styles.imageElement}>
          <div className={styles.skyElement}>
            <img src={Informations.SkyImage} alt="Sky Image" />
          </div>
          <div className={styles.cloudElement}>
            <img src={Informations.CloudImage} alt="Cloud Image" />
            <img src={Informations.CloudImage} alt="Cloud Image" />
          </div>
          <div className={styles.textElement}>
            <p>Ana Səhifə </p>
            {portfolio &&
              !services &&
              !companies &&
              !contact &&
              !accountant && <p> / Portfolio</p>}
            {services &&
              !portfolio &&
              !companies &&
              !contact &&
              !accountant && <p> / Xidmətlərimiz</p>}
            {companies &&
              !portfolio &&
              !services &&
              !contact &&
              !accountant && <p> / Kompaniyalar</p>}
            {contact &&
              !portfolio &&
              !services &&
              !companies &&
              !accountant && <p> / Əlaqə</p>}
            {accountant &&
              !portfolio &&
              !services &&
              !companies &&
              !contact && <p> / Hesabım</p>}
          </div>
        </div>
      )}
      {!isNavbar && (
        <div className={styles.otherContainer}>
          <div className={styles.cloudContainer}>
            <img src={Informations.CloudImage} alt="Cloud Image" />
            <img src={Informations.CloudImage} alt="Cloud Image" />
          </div>
          <div className={styles.otherElement}>
            <div className={styles.textElements}>
              <h1>Müxtəlif Xidmətlər Üzrə Portfoliomuz İlə Tanış Olun</h1>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by
              </p>
              <div className={styles.buttons}>
                <a href="">Əlaqə</a>
                <a href="" onClick={() => useNavigate("/")}>
                  Sifariş et
                </a>
              </div>
            </div>
            <ul className={styles.imageContainer}>
              <li>
                <img src={Informations.HeaderImage1} alt="Header Image 1" />
              </li>
              <li>
                <img src={Informations.HeaderImage2} alt="Header Image 2" />
              </li>
            </ul>
          </div>
        </div>
      )}
      <DropDownMenu
        enteredUsers={enteredUsers}
        active={active}
        setActive={setActive}
        handleLoginWindow={handleLoginWindow}
        aboutUsers={aboutUsers}
        handleAboutUsers={handleAboutUsers}
      />
    </header>
  );
}
