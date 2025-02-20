import HorizontalScroller from "../components/HorizontalScroller";
import { products } from "../data/Data";

export default function Homepage() {
  return (
    <>
      <div className="custom-container">
        <h1 className="text-5xl font-black mt-15 text-center text-green-700">
          Flaver Protection
        </h1>
        <HorizontalScroller
          array={products}
          title="Scarpe Antinfortunistiche"
        />
      </div>
    </>
  );
}
