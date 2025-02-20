import ProductCard from "./ProductImage";
import { useGlobalContext } from "../context/GlobalContext";
import Card from "./Card";

export default function HorizontalScroller({ title }) {
  const { products } = useGlobalContext();

  return (
    <div className="mt-15">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-slate-700">{title}</h3>
        <a href="/prodotti" className="text-lg italic text-slate-700">
          vedi di più..
        </a>
      </div>
      <div className="flex overflow-x-scroll scroller-container">
        {products.map(
          (element, i) => i < 10 && <Card key={element.id} product={element} />
        )}
      </div>
    </div>
  );
}
