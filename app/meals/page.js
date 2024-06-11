import Link from "next/link";

export default function Meals() {
  return (
    <>
      <Link href={"/meals/food-1"}>Food-1</Link>
      <Link href={"/meals/food-2"}>Food-2</Link>
    </>
  );
}
