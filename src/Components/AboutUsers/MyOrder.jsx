import React, { useState } from "react";
import styles from "./MyOrder.module.scss";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { setProductFormData } from "../../ReduxToolkit/Features/StateSlice";

export default function MyOrder() {
  // const [formData, setFormData] = useState({
  //   productName: "",
  //   productType: "",
  //   quantity: "",
  //   message: "",
  // });
  const { productFormData } = useSelector((state) => state.state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setProductFormData({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setProductFormData({
        productName: "",
        productType: "",
        quantity: "",
        message: "",
      })
    );
  };

  return (
    <section className={styles.myOrder}>
      <div className={styles.myOrderTexts}>
        <span>Sifariş et</span>
        <h2>İstədiyiniz xidmətləri sifariş edin</h2>
        <p>
          Xidmətlər haqqında məlumat almaq üçün “XİDMƏTLƏR” səhifəmizə keçid edə
          bilərsiniz.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.myOrderInputs}>
          <FloatingLabel controlId="floatingProductName" label="Məhsulun adı">
            <Form.Select
              aria-label="Floating label select example"
              name="productName"
              value={productFormData.productName}
              onChange={handleChange}
            >
              <option value="">Seçin</option>
              <option value="Vizit Kart">Vizit Kart</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingProductType" label="Məhsulun növü">
            <Form.Select
              aria-label="Floating label select example"
              name="productType"
              value={productFormData.productType}
              onChange={handleChange}
            >
              <option value="">Seçin</option>
              <option value="Offset">Offset</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingQuantity" label="Say">
            <Form.Control
              type="number"
              placeholder="Say"
              name="quantity"
              value={productFormData.quantity}
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingMessage" label="Mesaj">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              name="message"
              value={productFormData.message}
              onChange={handleChange}
            />
          </FloatingLabel>
          <button type="submit">Gönder</button>
        </div>
      </form>
    </section>
  );
}
