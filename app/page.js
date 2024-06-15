import getMeals from "@/lib/meals";
import styles from "./page.module.css";
import Meals from "./meals/page";
import { Suspense } from "react";

async function MealsSuspense() {
  const meals = await getMeals();
  return <Meals meals={meals} />;
}

export default async function Home() {
  return (
    <main className={styles.main}>
      <h3>Home</h3>
      <Suspense fallback={<p>Loading Meals...</p>}>
        <MealsSuspense />
      </Suspense>
    </main>
  );
}
