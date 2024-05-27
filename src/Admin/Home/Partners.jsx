import { useState } from "react";
import styles from "./Partners.module.scss";
import FileInputWithPreview from "../../Components/SameParts/FileReader/FileReader";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import AddButton from "../../Images/PlusIcon.svg";
import RemoveButton from "../../Images/MinusIcon.svg";

export default function Partners() {
  const [cards, setCards] = useState([{ name: "" }]);

  const addNewCard = () => {
    setCards((prevCards) => [...prevCards, { name: "" }]);
  };

  const removeCardByName = (name) => {
    setCards((prevCards) => prevCards.filter((card) => card.name !== name));
  };

  const updateCardName = (index, name) => {
    setCards((prevCards) =>
      prevCards.map((card, i) => (i === index ? { ...card, name } : card))
    );
  };

  return (
    <section className={`${styles.cardContainer} editPanel`}>
      <h4>
        <b>Ana Səhifə | Partnyorlar</b>
      </h4>
      <div>
        {cards.map((card, index) => (
          <div key={index} className={styles.partnersCard}>
            <div className={styles.title}>
              <b>Ad</b>
              <img
                src={RemoveButton}
                alt="removeButton"
                onClick={() => removeCardByName(card.name)}
              />
            </div>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    style={{ width: "max-content" }}
                    placeholder="Logo name"
                    value={card.name}
                    onChange={(e) => updateCardName(index, e.target.value)}
                  />
                </Col>
              </Row>
            </Form>
            <b>Şəkil</b>
            <FileInputWithPreview />
          </div>
        ))}
        <img src={AddButton} alt="addButton" onClick={addNewCard} />
      </div>
    </section>
  );
}
