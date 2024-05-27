import styles from "./CorrectionOfInformation.module.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

export default function CorrectionOfInformation() {
  const inputHead = {
    paddingBottom: "10px",
    display: "block",
  };
  return (
    <section className="editPanel">
      <h4>
        <b>Ana Səhifə | Məlumatlara düzəliş</b>
      </h4>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <b style={inputHead}>Tab title</b>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Az</InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Ru</InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">En</InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <b style={inputHead}>Başlıq</b>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Az</InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Ru</InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">En</InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </div>
        <div>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label style={{ fontWeight: "bold" }}>FavIcon</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label style={{ fontWeight: "bold" }}>Logo (Light)</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label style={{ fontWeight: "bold" }}>Logo (Dark)</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label style={{ fontWeight: "bold" }}>Logo (Dark)</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </div>
      </div>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <b>Açıqlama</b>
        <FloatingLabel controlId="floatingTextarea2" label="Az">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            autoComplete="off"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Ru">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            autoComplete="off"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="En">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            autoComplete="off"
          />
        </FloatingLabel>
      </div>
    </section>
  );
}
