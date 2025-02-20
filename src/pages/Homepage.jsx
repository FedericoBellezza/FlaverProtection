import { useEffect } from "react";
import HorizontalScroller from "../components/HorizontalScroller";

import { useGlobalContext } from "../context/GlobalContext";

export default function Homepage() {
  const { getProducts, products } = useGlobalContext();
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
