export default function HorizontalScroller({ array }) {
  const products = array;

  return (
    <div className="mt-15">
      <h3 className="text-2xl font-bold text-slate-700">
        Scarpe Antinfortunistiche
      </h3>
      <div className="flex overflow-x-scroll gap-3 scroller-container">
        {products.map((product) => (
          <>
            <img
              src={product.image}
              className="w-100 rounded-xl my-3 object-cover hover:scale-105 transition duration-300 ease-in-out"
              key={product.id}
              alt={product.name}
            />
            <span className="text-slate-700 absolute bg-yellow-600">
              {product.name}
            </span>
          </>
        ))}
      </div>
    </div>
  );
}
