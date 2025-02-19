import ProductCard from "./ProductImage";

export default function HorizontalScroller({ array, title }) {
  const products = array;

  return (
    <div className="mt-15">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-slate-700">{title}</h3>
        <a href="/prodotti" className="text-lg italic text-slate-700">
          vedi di più..
        </a>
      </div>
      <div className="flex overflow-x-scroll gap-3 scroller-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
