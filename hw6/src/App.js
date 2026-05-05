
import './App.css';
import laptopImg from './laptop.jpg';
import iphoneImg from './iphone.jpg';
import cameraImg from './camera.jpg';
import gunImg from './gun.jpg';
import casketImg from './casket.jpg';
import carImg from './car.jpg';
import catImg from './cat.jpg';
import houseImg from './house.jpg';
import jacketImg from './jacket.jpg';
import shoeImg from './shoe.jpg';
import yatchImg from './yatch.jpg';

function ProductCard({ name, image, price, inStock }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price}</p>
      <p className={`product-status ${inStock ? 'in-stock' : 'out-of-stock'}`}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
}

function App() {
  const products = [
    { name: 'Laptop', image: laptopImg, price: 999, inStock: true },
    { name: 'Smartphone', image: iphoneImg, price: 699, inStock: true },
    { name: 'Camera', image: cameraImg, price: 199, inStock: false },
    { name: 'Tablet', image: gunImg, price: 499, inStock: true },
    { name: 'Smartwatch', image: casketImg, price: 299, inStock: true },
    { name: 'Sports Car', image: carImg, price: 24999, inStock: true },
    { name: 'Cat', image: catImg, price: 200, inStock: false },
    { name: 'House Plan', image: houseImg, price: 125000, inStock: true },
    { name: 'Jacket', image: jacketImg, price: 129, inStock: true },
    { name: 'Shoes', image: shoeImg, price: 89, inStock: false },
    { name: 'Luxury Yacht', image: yatchImg, price: 799999, inStock: true },
  ];

  return (
    <div className="app">
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
