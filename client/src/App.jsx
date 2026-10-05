import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Clothing from './pages/Clothing';
import Accessories from './pages/Accessories';
import Cart from './pages/Cart';

const Footer = () => (
  <footer className="glass-panel text-center py-8 mt-12 text-gray-400 text-sm">
    <div className="container">
      <p>&copy; 2024 AURA. E-commerce Experience.</p>
    </div>
  </footer>
);



const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <div className="app">
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={
              <ProtectedRoute>
                <MainLayout>
                  <Home />
                </MainLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/clothing" element={
              <ProtectedRoute>
                <MainLayout>
                  <Clothing />
                </MainLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/accessories" element={
              <ProtectedRoute>
                <MainLayout>
                  <Accessories />
                </MainLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/cart" element={
              <ProtectedRoute>
                <MainLayout>
                  <Cart />
                </MainLayout>
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
