import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useGlobalContext } from "../context/GlobalContext";

export default function ProductsListPage() {
  const { products, supabase, setProducts, getProducts } = useGlobalContext();

  // on page loading
  useEffect(() => {
    async function getProductsOnPage() {
      const { data } = await supabase.from("products").select("*");
      setProducts(data);
    }
    getProductsOnPage();
  }, []);

  // states
  const [activeSearchProduct, setActiveSearchProduct] = useState("");
  const [search, setSearch] = useState("");

  // variables
  const array = [];

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
        <h1 className="text-4xl font-black mt-15 text-center text-green-700 mb-15">
          Tutti i nostri prodotti
        </h1>

        <input
          className="px-3 py-2 rounded-lg border mx-3 w-full"
          placeholder="Cerca per nome"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex flex-wrap justify-center gap-3  p-3">
          {array.map((e, index) => (
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
                  activeSearchProduct === "") &&
                (search === "" ||
                  product.name
                    .toLowerCase()
                    .includes(search.toLowerCase())) && (
                  <Card key={product.id} product={product} />
                )
            )}
        </div>
      </div>
    </>
  );
}
