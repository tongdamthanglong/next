"use client";
import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";

export default function Meals(props) {
  const { meals } = props;
  console.log({ meals });
  return (
    <>
      <div className={styles.list_meal}>
        {meals?.map((el) => {
          return (
            <div key={el.id}>
              <h3>{el.title}</h3>
              <Image src={el.image} width={100} height={100} />
              <p>{el.summary}</p>
              <p>{el.instructions}</p>
              <p>{el.creator}</p>
              <p>{el.creator_email}</p>
              <Link href={`/meals/${el.slug}`} style={{ fontWeight: "bold" }}>
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
