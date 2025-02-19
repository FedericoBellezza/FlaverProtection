export default function ProductCard({ product }) {
  return (
    <img
      src={product.image}
      className="w-100 rounded-xl my-3 object-cover hover:scale-105 transition duration-300 ease-in-out "
      key={product.id}
      alt={product.name}
    />
  );
}
