"use client"
import FilterBar from "@/components/filter-bar";
import styles from "./page.module.css";
import ProductList from "@/components/products-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className={styles.page}>
        <main className={styles.main}>
          <FilterBar/>
          <ProductList/>
        </main>
      </div>
    </QueryClientProvider>
  );
}
