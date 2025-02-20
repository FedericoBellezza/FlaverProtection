import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useGlobalContext } from "../context/GlobalContext";

export default function ProductsListPage() {
  const { products, getProducts } = useGlobalContext();

  const [activeSearchProduct, setActiveSearchProduct] = useState("");
  const array = [];

  useEffect(() => getProducts, []);

  products && console.log(products);

  products &&
    products.forEach((product) => {
      if (product.tag) {
        product.tag.forEach((tag) => {
          if (!array.includes(tag)) {
            array.push(tag);
          }
        });
      }
    });

  return (
    <>
      <div className="custom-container">
        <h1 className="text-5xl font-black mt-15 text-center text-green-700 mb-15">
          Tutti i nostri prodotti
        </h1>

        <div className="flex gap-3  p-3">
          {array.map((e) => (
            <span
              key={e}
              onClick={() => {
                activeSearchProduct === e
                  ? setActiveSearchProduct("")
                  : setActiveSearchProduct(e);
              }}
              className={`px-3 py-1 rounded-xl cursor-pointer  ${
                activeSearchProduct === e
                  ? "bg-green-700 text-white"
                  : "bg-green-200"
              }`}
            >
              {e}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap">
          {products &&
            products.map(
              (product) =>
                product.tag &&
                (product.tag.includes(activeSearchProduct) ||
                  activeSearchProduct === "") && (
                  <Card key={product.id} product={product} />
                )
            )}
        </div>
      </div>
    </>
  );
}
