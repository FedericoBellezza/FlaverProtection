import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddProductModal from "../components/AddProductModal";
import { useGlobalContext } from "../context/GlobalContext";

export default function DefaultLayout() {
  const { addingProduct, setAddingProduct } = useGlobalContext();
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex-1 mb-20">
        <Navbar />
        <Outlet />
        {addingProduct && <AddProductModal />}
      </div>
      <Footer />
    </div>
  );
}
