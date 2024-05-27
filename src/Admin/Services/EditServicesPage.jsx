import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
export default function EditServicesPage() {
  const inputHead = {
    paddingBottom: "10px",
    display: "block",
  };
  return (
    <section
      className="editPanel"
      style={{ display: "flex", flexDirection: "column", gap: "40px" }}
    >
      <h4>
        <b>Xidmətlər | Səhifədə düzəliş</b>
      </h4>
      <div>
        <b style={inputHead}>Ad</b>
        <FloatingLabel
          controlId="floatingInput"
          label="Az"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Said" id="1" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Ru"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="name@example.com" id="2" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="En" className="mb-3">
          <Form.Control type="text" placeholder="name@example.com" id="En" />
        </FloatingLabel>
      </div>
      <div>
        <b style={inputHead}>Başlıq</b>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="Said" id="1" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" id="2" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="En" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" id="En" />
        </FloatingLabel>
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
