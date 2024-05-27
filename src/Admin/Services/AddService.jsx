import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import AddButton from "../../Images/PlusIcon.svg";

export default function AddService() {
  return (
    <section
      className="editPanel"
      style={{ display: "flex", flexDirection: "column", gap: "40px" }}
    >
      <h4>
        <b>Xidmət | Xidmət əlavə et</b>
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div style={{ flex: 1 }}>
          <b>Ad</b>
          <FloatingLabel controlId="floatingInput" label="Az" className="mb-3">
            <Form.Control type="text" placeholder="Said" id="1" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Ru" className="mb-3">
            <Form.Control type="text" placeholder="name@example.com" id="2" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="En" className="mb-3">
            <Form.Control type="text" placeholder="name@example.com" id="En" />
          </FloatingLabel>
        </div>
        <div>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>
              <b>Xidmətin Şəkli</b>
            </Form.Label>
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
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <b>
          Xidmətin qiymətini və sayını daxil edin <img src={AddButton} alt="" />
        </b>
        <div style={{ display: "flex", gap: "15px" }}>
          <FloatingLabel
            style={{ flex: 1 }}
            controlId="floatingInput"
            label="Ədəd"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="name@example.com" id="En" />
          </FloatingLabel>
          <FloatingLabel
            style={{ flex: 1 }}
            controlId="floatingInput"
            label="Qiymət"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="name@example.com" id="En" />
          </FloatingLabel>
        </div>
      </div>
    </section>
  );
}
