import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <Link
        href="/suspense"
        className="font-bold border-2 p-2 rounded-md hover:border-black duration-200 hover:shadow-md">
        Suspense Link
      </Link>
    </main>
  );
}
