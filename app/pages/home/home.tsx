import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Streakly | Turn habits into momentum" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HomePage() {
  return <div className="p-10"></div>;
}
