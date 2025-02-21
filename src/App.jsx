import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";

import DefaultLayout from "./layouts/DefaultLayout";
import ProductsListPage from "./pages/ProductsListPage";
import { useGlobalContext } from "./context/GlobalContext";
import { useEffect } from "react";

function App() {
  const { products, supabase, setProducts, getProducts } = useGlobalContext();
  useEffect(() => {
    async function getProductsOnPage() {
      const { data } = await supabase.from("products").select("*");
      setProducts(data);
    }
    getProductsOnPage();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="contatti" element={<ContactPage />} />
          <Route path="prodotti" element={<ProductsListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
