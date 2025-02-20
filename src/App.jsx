import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";

import DefaultLayout from "./layouts/DefaultLayout";
import ProductsListPage from "./pages/ProductsListPage";
import { GlobalContextProvider } from "./context/GlobalContext";
import ProductsManage from "./pages/ProductsManage";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

function App() {
  return (
    <GlobalContextProvider>
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
    </GlobalContextProvider>
  );
}

export default App;
