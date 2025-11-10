import { createContext, useContext, useEffect, useState } from "react";

export enum Theme {
  light = "light",
  dark = "dark",
}

type ThemeContextType = {
  theme: Theme | null;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(null);
  const toggleTheme = () =>
    setTheme((prev) => (prev === Theme.light ? Theme.dark : Theme.light));
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const saved = localStorage.getItem("theme");
    const initialTheme = (saved ??
      (prefersDark ? Theme.dark : Theme.light)) as Theme;
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.body.classList.remove(Theme.light, Theme.dark);
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
