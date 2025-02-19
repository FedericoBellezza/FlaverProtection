import { useState } from "react";
import Card from "../components/Card";
import { products } from "../data/data";

export default function ProductsListPage() {
  console.log(products);

  const [activeSearchProduct, setActiveSearchProduct] = useState("");
  const array = [];

  products.map((product) => {
    product.tag &&
      product.tag.map((e) => {
        if (!array.includes(e)) {
          array.push(e);
        }
      });
  });

  return (
    <>
      <div className="custom-container">
        <h1 className="text-5xl font-black mt-15 text-center text-green-700 mb-15">
          Tutti i nostri prodotti
        </h1>

        <div className=" flex gap-3 p-3">
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
          {products.map(
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
