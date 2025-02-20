import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";

import DefaultLayout from "./layouts/DefaultLayout";
import ProductsListPage from "./pages/ProductsListPage";
import { useGlobalContext } from "./context/GlobalContext";
import ProductsManage from "./pages/ProductsManage";
import { useEffect } from "react";

function App() {
  const { products, getProducts } = useGlobalContext();
  useEffect(() => getProducts, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="contatti" element={<ContactPage />} />
          <Route path="prodotti" element={<ProductsListPage />} />
          <Route path="gestisci-prodotti" element={<ProductsManage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
