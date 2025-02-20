export default function Card({ product }) {
  return (
    <>
      <div className="w-20/100 p-3">
        <div className="border h-full border-gray-300 rounded-xl  overflow-hidden bg-sky-100">
          <img src={product.image} className="h-50 w-full object-cover" />
          <div className="p-3">
            <p className="font-bold text-lg">{product.name}</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
