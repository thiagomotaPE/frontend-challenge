"use client"
import FilterBar from "@/components/filter-bar";
import styles from "./page.module.css";
import ProductList from "@/components/products-list";

export default function Home() {
  return (
      <div>
        <main className={styles.main}>
          <FilterBar/>
          <ProductList/>
        </main>
      </div>
  );
}
