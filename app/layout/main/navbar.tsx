import { MoonStar, Sun } from "lucide-react";
import { Theme, useTheme } from "~/context/theme.context";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const activeIcon =
    "bg-primary-dark text-white rounded-full transition-all duration-300";

  return (
    <nav className="flex p-4 justify-between items-center border-b border-primary/10 bg-primary/10">
      {/* Left side: logo */}
      <div className="flex items-center gap-2">
        <img className="w-10 h-10" src="/logo.svg" alt="Streakly logo" />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Streakly</h1>
          <p className="-mt-1 text-subtitle text-sm">
            Turn habits into momentum.
          </p>
        </div>
      </div>

      {/* Right side: theme toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 bg-background rounded-full flex gap-1 items-center hover:bg-primary/20 transition-all duration-300 cursor-pointer"
        aria-label="Toggle theme"
      >
        <Sun
          strokeWidth={2.5}
          className={`p-1.5 h-7 w-7 text-primary ${theme === Theme.light ? activeIcon : ""}`}
        />
        <MoonStar
          strokeWidth={2.5}
          className={`p-1.5 h-7 w-7 text-primary-dark ${theme === Theme.dark ? activeIcon : ""}`}
        />
      </button>
    </nav>
  );
}
