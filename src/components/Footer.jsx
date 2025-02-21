import { useGlobalContext } from "../context/GlobalContext";
import addProductModal from "./AddProductModal";

export default function Footer() {
  const { addingProduct, setAddingProduct } = useGlobalContext();
  return (
    <footer className="bg-gray-800 text-white py-4 relative">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Flaver Protection. All rights reserved.</p>
      </div>
      <a
        onClick={() => setAddingProduct(true)}
        className="absolute bottom-4 right-0 transform -translate-x-1/2 cursor-pointer italic text-sm"
      >
        aggiungi prodotto
      </a>
    </footer>
  );
}
