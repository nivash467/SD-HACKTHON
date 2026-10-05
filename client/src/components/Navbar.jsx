import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/useCart';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass-panel">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          AURA
        </Link>
        
        {/* Desktop Menu */}
        <div className={`nav-links ${isOpen ? 'active glass-panel' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/clothing" onClick={() => setIsOpen(false)}>Clothing</Link>
          <Link to="/accessories" onClick={() => setIsOpen(false)}>Accessories</Link>
          <button 
            onClick={() => {
              localStorage.removeItem('token');
              window.location.reload();
            }} 
            className="nav-link-btn"
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              font: 'inherit', 
              cursor: 'pointer',
              padding: 0
            }}
          >
            Logout
          </button>
        </div>

        {/* Cart & Mobile Toggle */}
        <div className="nav-actions">
          <Link to="/cart" className="cart-icon">
            <ShoppingBag />
            {cart.length > 0 && (
              <span className="cart-badge">
                {cart.length}
              </span>
            )}
          </Link>
          
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
