import FilterBar from "@/components/filter-bar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <FilterBar/>
      </main>
    </div>
  );
}
