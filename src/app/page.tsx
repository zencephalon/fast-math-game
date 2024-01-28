import Link from "next/link";
import { levels } from "@/app/levels";

function MenuItem({
  description,
  level,
}: {
  description: string;
  level: string;
}) {
  return (
    <Link href={`/game/${level}`}>
      <div className="text-xl mt-4 p-2 hover:bg-sky-700 pointer">
        <h2>{description}</h2>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <div>
          <h1 className="text-2xl text-center">Fast Math Game</h1>
          {Object.entries(levels).map(([key, level]) => (
            <MenuItem description={level.description} level={key} key={key} />
          ))}
        </div>
      </div>
    </main>
  );
}
