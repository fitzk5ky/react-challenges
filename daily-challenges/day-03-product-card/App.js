import './App.css';
import './index.css';

//product card component
const ProductCard = ({name, description, price}) => {
  return (
    <div className="product-card bg-white shadow-lg rounded-lg p-6 max-w-sm">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
}

//app component
const App = () => {
  const product = {
    name: "Buck Mason T-Shirt",
    description: "90s Boxy T-Shirt in denim blue with a pocket",
    price: 88.00
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center p-4">Product Showcase</h1>
      <ProductCard
        className=""
        name={product.name}
        description={product.description}
        price={product.price}
      />
    </div>
  );
}

export default App;
