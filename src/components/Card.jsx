export default function Card({ product }) {
  return (
    <>
      <div className="w-1/5 p-2">
        <div className="product-card">
          <div className="border h-full border-gray-300 rounded-xl  overflow-hidden bg-white hover:scale-105 transition duration-300 ease-in-out">
            <div className="m-3 rounded-xl bg-gray-100 overflow-hidden">
              <img src={product.image} className="h-50 w-full object-cover " />
            </div>
            <div className="p-3 space-y-2">
              <p className="font-bold text-lg">{product.name}</p>
              <p className="text-gray-600 text-sm h-20  overflow-auto">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
