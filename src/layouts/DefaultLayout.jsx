import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
