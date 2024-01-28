import Link from "next/link";
import MultiplicationGame from "../Game";

export default function Home({ params }: { params: { level: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="/" className="self-start">
        Back to Menu
      </Link>
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <MultiplicationGame levelId={params.level} />
      </div>
    </main>
  );
}
