import styles from "./Orders.module.scss";

export default function Orders() {
  return (
    <section className={styles.ordersPart}>
      <div className={styles.ordersTexts}>
        <h1>Sifarişlərim</h1>
        <p>Sifariş tarixçəsi</p>
        <h2>Sifariş siyahısı</h2>
      </div>
      <div className={styles.ordersTable}>
        <table>
          <tr>
            <th>№</th>
            <th>Sifarişin tarixi</th>
            <th>Məhsulun adı</th>
            <th>Məhsulun növü</th>
            <th>Say</th>
            <th>Qiymət AZN</th>
            {/* <th>Mesaj</th> */}
            <th>Status</th>
          </tr>
          <tr>
            <td>3</td>
            <td>08.06.2024</td>
            <td>Məxməri</td>
            <td>Vizitkart</td>
            <td>1200</td>
            <td>Qiymət hələ təyin olunmayıb</td>
            {/* <td>Qıraqları oval olsun, heç bir prolem yaşanmasın</td> */}
            <td>Qəbul olundu</td>
          </tr>
          <tr>
            <td>3</td>
            <td>08.06.2024</td>
            <td>Məxməri</td>
            <td>Vizitkart</td>
            <td>1200</td>
            <td>Qiymət hələ təyin olunmayıb</td>
            {/* <td>Qıraqları oval olsun, heç bir prolem yaşanmasın</td> */}
            <td>Qəbul olundu</td>
          </tr>
        </table>
      </div>
    </section>
  );
}
