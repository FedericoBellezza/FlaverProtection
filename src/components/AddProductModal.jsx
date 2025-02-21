import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function AddProductModal() {
  // from context
  const {
    products,
    getProducts,
    addProducts,
    addingProduct,
    setAddingProduct,
  } = useGlobalContext();

  //   form states
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");

  //   function to add product
  const addProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const tag = e.target.tag.value
      .split(", ")
      .map((e) => e.toLowerCase().trim());
    addProducts(name, description, image, price, tag);
    setAddingProduct(false);
    setName("");
    setDescription("");
    setImage("");
    setPrice("");
    setTag("");
  };

  return (
    <>
      <div className="custom-container">
        {/* modal */}
        <div
          className={`fixed h-screen w-screen top-0 left-0 opacity-40 bg-black z-1`}
        ></div>
        <div
          className={`fixed top-25/100   custom-container rounded opacity-100 bg-amber-50 z-2 p-10 py-10 `}
        >
          <h2 className="text-2xl font-bold text-center mb-5">
            Aggiungi prodotto
          </h2>
          <form onSubmit={addProduct} className="flex gap-2 flex-col">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Nome"
                className="px-2 py-1  border rounded w-50/100"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Immagine"
                className="px-2 py-1  border rounded w-50/100"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>
            <textarea
              placeholder="Descrizione"
              className="px-2 py-1  border rounded"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Prezzo"
                className="px-2 py-1 w-25/100 border rounded"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="Tags (scarpe, vestiti, accessori)"
                className="px-2 py-1 w-75/100 border rounded"
                id="tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-2 justify-end">
              <input
                type="submit"
                value="Aggiungi"
                className="border px-2 py-1 bg-sky-500 text-white rounded-lg cursor-pointer"
              />
              <input
                type="button"
                value={"Annulla"}
                onClick={() => {
                  setAddingProduct(false);
                  setName("");
                  setDescription("");
                  setImage("");
                  setPrice("");
                  setTag("");
                }}
                className="border px-2 py-1 bg-red-500 text-white rounded-lg cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
