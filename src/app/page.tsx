import { Header, Footer } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header title="Project heading" />
      <main className={styles.main}>
        <p>Start building here.</p>
      </main>
      <Footer />
    </div>
  );
}
