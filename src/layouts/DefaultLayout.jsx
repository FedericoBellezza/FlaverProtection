import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex-1 mb-20">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
