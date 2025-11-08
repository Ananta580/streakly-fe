import { Outlet } from "react-router";
import { Navbar } from "./navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
