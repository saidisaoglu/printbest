import { useState } from "react";
import styles from "./LeftAside.module.scss";
import Logo from "../../Images/besPrintLogo.png";
import Accordion from "react-bootstrap/Accordion";
import { Link, useLocation } from "react-router-dom";
import ActivePage from "../../Images/Circle.svg";

export default function LeftAside() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const buttonStyle = {
    color: "black",
    padding: "16px 16px",
    textAlign: "left",
    width: "100%",
    cursor: "pointer",
    border: "1px solid gray",
    fontWeight: "400",
    background: "#F5F5F5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const accordionBodyStyle = {
    padding: "0",
  };

  return (
    <section className={styles.leftAside}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <ul>
          <li>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Bestprint (Ana səhifə)</Accordion.Header>
                <Accordion.Body style={accordionBodyStyle}>
                  <Link
                    to="/admin/home/correction"
                    style={buttonStyle}
                    onClick={() => setActiveLink("/admin/home/correction")}
                  >
                    Başlıq{" "}
                    {activeLink === "/admin/home/correction" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </Link>
                  <Link
                    to="/admin/home/aboutus"
                    style={buttonStyle}
                    onClick={() => setActiveLink("/admin/home/aboutus")}
                  >
                    Haqqımızda{" "}
                    {activeLink === "/admin/home/aboutus" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </Link>
                  <Link
                    to="/admin/home/partners"
                    style={buttonStyle}
                    onClick={() => setActiveLink("/admin/home/partners")}
                  >
                    Partnyorlar{" "}
                    {activeLink === "/admin/home/partners" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </Link>
                  <Link
                    style={buttonStyle}
                    onClick={() => setActiveLink("/admin/home/advertisement")}
                  >
                    Reklam{" "}
                    {activeLink === "/admin/home/advertisement" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Xidmətlər</Accordion.Header>
                <Accordion.Body style={accordionBodyStyle}>
                  <Link
                    to="/admin/services/editpage"
                    style={buttonStyle}
                    onClick={() => setActiveLink("/admin/services/editpage")}
                  >
                    Səhifədə düzəliş{" "}
                    {activeLink === "/admin/services/editpage" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </Link>
                  <Link
                    to="/admin/services/addservice"
                    style={buttonStyle}
                    onClick={() => setActiveLink("/admin/services/addservice")}
                  >
                    Xidmət əlavə et{" "}
                    {activeLink === "/admin/services/addservice" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </Link>
                  <Link to={"/admin/services/services"}
                    style={buttonStyle}
                    onClick={() => setActiveLink("/admin/services/services")}
                  >
                    Xidmətlər{" "}
                    {activeLink === "/admin/services/services" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </Link>
                  <button
                    style={buttonStyle}
                    onClick={() => setActiveLink("/admin/services/addproduct")}
                  >
                    Məhsul əlavə et{" "}
                    {activeLink === "/admin/services/addproduct" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Portfolio</Accordion.Header>
                <Accordion.Body style={accordionBodyStyle}>
                  <button
                    style={buttonStyle}
                    onClick={() => setActiveLink("/admin/portfolio/editpage")}
                  >
                    Səhifədə düzəliş{" "}
                    {activeLink === "/admin/portfolio/editpage" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() =>
                      setActiveLink("/admin/portfolio/addportfolio")
                    }
                  >
                    Portfolio əlavə et{" "}
                    {activeLink === "/admin/portfolio/addportfolio" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => setActiveLink("/admin/portfolio")}
                  >
                    Portfolio{" "}
                    {activeLink === "/admin/portfolio" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Kampaniyalar</Accordion.Header>
                <Accordion.Body style={accordionBodyStyle}>
                  <button
                    style={buttonStyle}
                    onClick={() => setActiveLink("/admin/campaigns/editpage")}
                  >
                    Səhifədə düzəliş{" "}
                    {activeLink === "/admin/campaigns/editpage" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() =>
                      setActiveLink("/admin/campaigns/addcampaign")
                    }
                  >
                    Kompaniya əlavə et{" "}
                    {activeLink === "/admin/campaigns/addcampaign" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </button>
                  <button
                    style={buttonStyle}
                    onClick={() => setActiveLink("/admin/campaigns/contact")}
                  >
                    Əlaqə{" "}
                    {activeLink === "/admin/campaigns/contact" && (
                      <img src={ActivePage} alt="Active Page" />
                    )}
                  </button>
                </Accordion.Body>
              </Accordion.Item>
              <Link
                className={styles.accordionLink}
                to="/admin/contact"
                onClick={() => setActiveLink("/admin/contact")}
              >
                Əlaqə{" "}
                {activeLink === "/admin/contact" && (
                  <img src={ActivePage} alt="Active Page" />
                )}
              </Link>
              <Link
                className={styles.accordionLink}
                to="/admin/myinfo"
                onClick={() => setActiveLink("/admin/myinfo")}
              >
                Məlumatlarım{" "}
                {activeLink === "/admin/myinfo" && (
                  <img src={ActivePage} alt="Active Page" />
                )}
              </Link>
              <Link
                className={styles.accordionLink}
                to="/admin/employees"
                onClick={() => setActiveLink("/admin/employees")}
              >
                Əməkdaşlar{" "}
                {activeLink === "/admin/employees" && (
                  <img src={ActivePage} alt="Active Page" />
                )}
              </Link>
              <Link
                className={styles.accordionLink}
                to="/admin/roles"
                onClick={() => setActiveLink("/admin/roles")}
              >
                Rollar və icazələr{" "}
                {activeLink === "/admin/roles" && (
                  <img src={ActivePage} alt="Active Page" />
                )}
              </Link>
              <Link
                to="/admin/users"
                onClick={() => setActiveLink("/admin/users")}
              >
                İstifadəçilər{" "}
                {activeLink === "/admin/users" && (
                  <img src={ActivePage} alt="Active Page" />
                )}
              </Link>
              <Link
                to="/admin/neworders"
                onClick={() => setActiveLink("/admin/neworders")}
              >
                Yeni sifarişlər{" "}
                {activeLink === "/admin/neworders" && (
                  <img src={ActivePage} alt="Active Page" />
                )}
              </Link>
              <Link
                to="/admin/orders"
                onClick={() => setActiveLink("/admin/orders")}
              >
                Sifarişlər{" "}
                {activeLink === "/admin/orders" && (
                  <img src={ActivePage} alt="Active Page" />
                )}
              </Link>
              <Link
                to="/admin/discounts"
                onClick={() => setActiveLink("/admin/discounts")}
              >
                Endirimlər{" "}
                {activeLink === "/admin/discounts" && (
                  <img src={ActivePage} alt="Active Page" />
                )}
              </Link>
            </Accordion>
          </li>
        </ul>
      </div>
    </section>
  );
}
