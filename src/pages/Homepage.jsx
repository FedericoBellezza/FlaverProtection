import { useEffect } from "react";
import HorizontalScroller from "../components/HorizontalScroller";

import { useGlobalContext } from "../context/GlobalContext";
import { createClient } from "@supabase/supabase-js";

export default function Homepage() {
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

  useEffect(() => getProducts, []);

  products && console.log(products);
  return (
    <>
      <div className="custom-container">
        <h1 className="text-5xl font-black mt-15 text-center text-green-700">
          Flaver Protection
        </h1>
        {products && <HorizontalScroller title="Antinfortunistica" />}
      </div>
    </>
  );
}
