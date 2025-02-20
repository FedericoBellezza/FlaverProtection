export default function ProductCard({ product }) {
  return (
    <img
      src={product.image}
      className="w-50 h-50 m-3 rounded-xl  object-cover hover:scale-105 transition duration-300 ease-in-out "
      key={product.id}
      alt={product.name}
    />
  );
}
