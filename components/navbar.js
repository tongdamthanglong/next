"use client";
import Link from "next/link";
import styles from "../app/page.module.css";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <header className={styles.navbar}>
        <p onClick={() => router.back()} style={{ cursor: "pointer" }}>
          Back
        </p>
        <Link href={"/"}>Home</Link>
        <Link href={"/meals"}>Meals</Link>
        <Link href={"/meals/shared"}>Meals Shared</Link>
        <Link href={"/community"}>Community</Link>
      </header>
    </>
  );
}
