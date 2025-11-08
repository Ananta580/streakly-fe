import { Moon, MoonStar, Sun } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex p-4 justify-between items-center border-b-2 border-primary/10 bg-primary/10">
      <div className="flex items-center gap-2">
        <img className="w-10 h-10" src="/logo.svg" alt="" />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Streakly</h1>
          <p className="-mt-1 text-black/60 text-sm">
            Turn habits into momentum.
          </p>
        </div>
      </div>
      <div className="p-2 bg-white rounded-full flex gap-2">
        <Sun
          strokeWidth={2.5}
          className="text-primary-dark p-1 h-7 w-8 rounded-full cursor-pointer"
        />
        <MoonStar
          strokeWidth={2}
          className="bg-primary-dark text-white p-1 h-7 w-8 rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
}
