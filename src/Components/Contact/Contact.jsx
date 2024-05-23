import EntryContact from "./EntryContact";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contactElement}>
      <EntryContact />
    </section>
  );
}
