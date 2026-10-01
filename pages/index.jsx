import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-blue-400 text-amber-300 flex flex-col justify-center items-center mt-16 text-2xl">

      <h1 className="animate-bounce">Hello My Friends</h1>
      <br />

      <Link href={"/test"} style={{ color: "green" }}>Test</Link>
      <br />
      <Link href={"/products"} style={{ color: "red" }}>Products</Link>
      <br />
      <Link href={"/houses"} style={{ color: "black" }}>Houses</Link>
    </div>
  );
}
