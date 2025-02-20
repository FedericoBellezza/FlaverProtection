import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function ProductsManage() {
  const { products, getProducts, prod } = useGlobalContext();
  useEffect(() => prod, []);
  products && console.log(products);

  return (
    <div className="custom-container">
      <h1 className="text-4xl font-black mt-15 text-center text-green-700 mb-15">
        Gestisci i nostri prodotti
      </h1>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th>Nome</th>
            <th>Descrizione</th>
            <th>Prezzo</th>
            <th>Tag</th>
            <th>Immagine</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100  ">
          {products &&
            products.map((product) => (
              <tr key={product.id} className="border">
                <td className="p-5">{product.name}</td>
                <td className="p-5">{product.description}</td>
                <td className="p-5">{product.price}</td>
                <td className="p-5">{product.tag}</td>
                <td className="p-5">
                  <img
                    width={100}
                    className="object-cover"
                    src={product.image}
                    alt=""
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
