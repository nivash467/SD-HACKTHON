import { Plus } from 'lucide-react';
import { useCart } from '../context/useCart';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card glass">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} loading="lazy" />
        <button className="add-btn" onClick={() => addToCart(product)}>
          <Plus size={20} />
        </button>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="rating">★ {product.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
