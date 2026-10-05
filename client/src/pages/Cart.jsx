import { useCart } from '../context/useCart';
import { Trash2, Plus, Minus, CreditCard, Landmark, Banknote } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success' | 'error' | null
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const shippingCost = paymentMethod === 'cod' ? 40 : 0;
  const finalTotal = total + shippingCost;

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      // simulate API call
      await axios.post('http://localhost:5000/api/pay', { 
        cart, 
        amount: finalTotal,
        method: paymentMethod 
      });
      setPaymentStatus('success');
      clearCart();
    } catch (error) {
      console.error("Payment failed", error);
      setPaymentStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  if (paymentStatus === 'success') {
    return (
      <div className="page-container flex-center-col animate-fade-in">
        <div className="glass p-8 text-center rounded-2xl">
          <h2 className="text-3xl font-bold text-accent mb-4">Payment Successful!</h2>
          <p className="mb-6 text-gray-500">Thank you for your purchase via {paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod.toUpperCase()}. Your order is on its way.</p>
          <Link to="/" className="btn-primary" onClick={() => setPaymentStatus(null)}>Continue Shopping</Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="page-container flex-center-col animate-fade-in">
        <h2 className="text-2xl mb-4">Your cart is empty</h2>
        <Link to="/clothing" className="btn-glass">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="page-container animate-fade-in">
      <div className="container cart-layout">
        <div className="cart-items">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart ({cart.length})</h1>
          <div className="cart-list">
            {cart.map(item => (
              <div key={item._id} className="glass cart-item">
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p className="text-accent">₹{item.price.toLocaleString('en-IN')}</p>
                </div>
                <div className="cart-actions">
                  <div className="quantity-controls glass">
                    <button onClick={() => updateQuantity(item._id, item.quantity - 1)} disabled={item.quantity <= 1}><Minus size={16} /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item._id, item.quantity + 1)}><Plus size={16} /></button>
                  </div>
                  <button onClick={() => removeFromCart(item._id)} className="delete-btn">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-summary-container">
          {/* Payment Options */}
          <div className="glass p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="payment-options">
              <label className={`payment-option ${paymentMethod === 'upi' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="upi" 
                  checked={paymentMethod === 'upi'} 
                  onChange={(e) => setPaymentMethod(e.target.value)} 
                />
                <CreditCard size={20} />
                <span>UPI</span>
              </label>
              
              <label className={`payment-option ${paymentMethod === 'netbanking' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="netbanking" 
                  checked={paymentMethod === 'netbanking'} 
                  onChange={(e) => setPaymentMethod(e.target.value)} 
                />
                <Landmark size={20} />
                <span>Net Banking</span>
              </label>

              <label className={`payment-option ${paymentMethod === 'cod' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="cod" 
                  checked={paymentMethod === 'cod'} 
                  onChange={(e) => setPaymentMethod(e.target.value)} 
                />
                <Banknote size={20} />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>

          <div className="cart-summary glass">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
            <div className="summary-row">
              <span>Shipping {paymentMethod === 'cod' && '(COD Charge)'}</span>
              <span>{shippingCost === 0 ? 'Free' : `+₹${shippingCost}`}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{finalTotal.toLocaleString('en-IN')}</span>
            </div>
            <button 
              className="btn-primary w-full mt-6" 
              onClick={handleCheckout}
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : `Pay ₹${finalTotal.toLocaleString('en-IN')}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
