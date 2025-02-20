import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";

import DefaultLayout from "./layouts/DefaultLayout";
import ProductsListPage from "./pages/ProductsListPage";
import {
  GlobalContextProvider,
  useGlobalContext,
} from "./context/GlobalContext";
import ProductsManage from "./pages/ProductsManage";
import { createClient } from "@supabase/supabase-js";

function App() {
  const { products, setProducts } = useGlobalContext();
  const supabaseUrl = "https://hrrfdiwpvexyzhdioigj.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhycmZkaXdwdmV4eXpoZGlvaWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwNDk5MDUsImV4cCI6MjA1NTYyNTkwNX0.OKZU46kx-IK2EH5sSgxrCciaEe4ZkUjLgUY4qcVOf44";
  const supabase = createClient(supabaseUrl, supabaseKey);
  async function getProducts() {
    const { data } = await supabase.from("products").select("*");
    console.log(data);
    setProducts(data);
  }

  getProducts();
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
