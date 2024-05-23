import styles from "./RouterPart.module.scss";
import { Route, Routes, useLocation } from "react-router";
import { useEffect, useState } from "react";
import Companies from "../Components/Companies/Companies";
import HomePage from "../Components/HomePage/HomePage";
import Portfolio from "../Components/Portfolio/Portfolio";
import Services from "../Components/Services/services";
import Contact from "../Components/Contact/Contact";
import NavbarInSameParts from "../Components/SameParts/Navbar/Navbar";
import MainInSameParts from "../Components/SameParts/Main/MainInSameParts";
import Footer from "../Components/SameParts/Footer/Footer";
import Pages from "../Components/Portfolio/PortfolioPages/Pages";
import BusinessCard from "../Components/Services/ServicesPages/Card";
import Prices from "../Components/Services/Prices/Prices";
import Details from "../Components/Companies/CompaniesPages/Details";
import Login from "../Components/Login/Login";
import MyAccount from "../Components/AboutUsers/MyAccount";
import Orders from "../Components/AboutUsers/Orders";
import MyOrder from "../Components/AboutUsers/MyOrder";

export default function RouterPart() {
  const [hidden, setHidden] = useState(true);
  const [loginWindow, setLoginWindow] = useState(false);
  const [login, setLogin] = useState(true);
  const [registered, setRegistered] = useState(false);
  const [enteredUsers, setEnteredUsers] = useState(true);
  const [aboutUsers, setAboutUsers] = useState(false);
  const location = useLocation();

  const handleLoginWindow = () => {
    if (loginWindow) {
      setLoginWindow(false);
    } else {
      setLoginWindow(true);
    }
  };

  const handleLogin = () => {
    setLogin(true);
    setRegistered(false);
  };

  const handleRegistered = () => {
    setLogin(false);
    setRegistered(true);
  };

  const handleEnteredUsers = () => {
    setEnteredUsers(false);
    setLoginWindow(false);
  };

  const handleAboutUsers = () => {
    setAboutUsers(!aboutUsers);
  };

  useEffect(() => {
    setHidden(location.pathname !== "/");
  }, [location.pathname]);

  useEffect(() => {
    if (loginWindow) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [loginWindow]);

  return (
    <section className={styles.container}>
      <NavbarInSameParts
        handleLoginWindow={handleLoginWindow}
        enteredUsers={enteredUsers}
        aboutUsers={aboutUsers}
        handleAboutUsers={handleAboutUsers}
      />
      {loginWindow && (
        <Login
          handleLoginWindow={handleLoginWindow}
          login={login}
          handleLogin={handleLogin}
          registered={registered}
          handleRegistered={handleRegistered}
          handleEnteredUsers={handleEnteredUsers}
        />
      )}
      <div className={styles.element}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/pages" element={<Pages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/card" element={<BusinessCard />} />
          <Route path="/services/card/prices" element={<Prices />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/details" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order" element={<MyOrder />} />
        </Routes>
      </div>
      {hidden && <MainInSameParts />}
      <Footer />
    </section>
  );
}
