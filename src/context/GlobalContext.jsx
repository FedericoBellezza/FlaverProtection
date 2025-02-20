import { createClient } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = ({ children }) => {
  // supabase config
  const supabaseUrl = "https://hrrfdiwpvexyzhdioigj.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhycmZkaXdwdmV4eXpoZGlvaWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwNDk5MDUsImV4cCI6MjA1NTYyNTkwNX0.OKZU46kx-IK2EH5sSgxrCciaEe4ZkUjLgUY4qcVOf44";
  const supabase = createClient(supabaseUrl, supabaseKey);

  // states
  const [products, setProducts] = useState("");

  //   functions
  async function getProducts() {
    const { data } = await supabase.from("products").select();
    setProducts(data);
  }

  async function addProducts(name, description, image, price) {
    const { data, error } = await supabase.from("products").insert([
      {
        name,
        description,
        image,
        price,
      },
    ]);
  }

  // data to export
  const data = { products, setProducts, getProducts, addProducts };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
