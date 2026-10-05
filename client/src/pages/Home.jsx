import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Leaf, TrendingUp, Zap, Heart } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-text-blobs">
            <span className="blob-text t1">ELEGANCE</span>
            <span className="blob-text t2">COMFORT</span>
          </div>
          <h1 className="hero-title">
            Redefine <span className="text-accent">Style</span>.<br />
            Embrace <span className="text-accent">Aura</span>.
          </h1>
          <p className="hero-subtitle">
            Premium clothing and accessories designed for the modern aesthetic. 
            Experience the fusion of comfort and futuristic design, tailored for those who dare to stand out.
          </p>
          <div className="hero-buttons">
            <Link to="/clothing" className="btn-primary flex-center">
              Shop Collection <ArrowRight size={22} style={{ marginLeft: '12px' }} />
            </Link>
            <Link to="/accessories" className="btn-glass">
              Explore Accessories
            </Link>
          </div>
        </div>
        
        {/* Artistic Shapes */}
        <div className="art-shape shape-1"></div>
        <div className="art-shape shape-2"></div>
        <div className="art-shape shape-3"></div>
        
        {/* Artistic Squiggle */}
        <svg className="art-squiggle" width="300" height="100" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 50C40 10 70 90 100 50C130 10 160 90 190 50C220 10 250 90 280 50" stroke="rgba(180, 145, 98, 0.4)" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </section>

      {/* NEW: Editorial Collage Section */}
      <section className="editorial-section">
        <div className="container editorial-container">
          <div className="editorial-text glass-panel">
            <h2>The Art of <br/> <span className="italic-text">Modern Living</span></h2>
            <p>We blend contemporary aesthetics with timeless comfort to create pieces that transcend seasons.</p>
            <div className="deco-line"></div>
          </div>
          <div className="editorial-grid">
            <div className="edit-img img-1 glass">
              <img src="data:image/jpeg;base64,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" alt="Fabric Detail" />
            </div>
            <div className="edit-img img-2 glass">
              <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800" alt="Fashion Model" />
            </div>
            <div className="edit-img img-3 glass">
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800" alt="Texture" />
            </div>
            <div className="floating-circle"></div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="gallery-section">
        <div className="marquee">
          <div className="marquee-content">
            <span>STREETWEAR</span>
            <span>LUXURY</span>
            <span>AESTHETIC</span>
            <span>MINIMALIST</span>
            <span>STREETWEAR</span>
            <span>LUXURY</span>
            <span>AESTHETIC</span>
            <span>MINIMALIST</span>
          </div>
        </div>
      </section>

      <section className="container section-padding">
        <div className="section-header text-center">
            <span className="subtitle-badge">OUR CORE VALUES</span>
            <h2 className="section-title">Why Choose Aura?</h2>
            <p className="section-desc">
              We go beyond fashion. We create experiences. Our commitment to quality, 
              sustainability, and visionary design ensures you don't just wear clothes—you wear a statement.
            </p>
        </div>
        
        <div className="features-grid">
          <div className="glass feature-card">
            <div className="icon-wrapper"><Star size={40} /></div>
            <h3>Premium Materials</h3>
            <p>Sourced from the finest fabrics including organic cotton and recycled blends for unmatched comfort and durability.</p>
          </div>
          <div className="glass feature-card">
            <div className="icon-wrapper"><Shield size={40} /></div>
            <h3>Futuristic Design</h3>
            <p>Aesthetics that put you ahead of the curve. Our designs blend modern utility with timeless elegance.</p>
          </div>
          <div className="glass feature-card">
            <div className="icon-wrapper"><Leaf size={40} /></div>
            <h3>Sustainability</h3>
            <p>Eco-friendly production processes. We believe in fashion that looks good and respects the planet.</p>
          </div>
           <div className="glass feature-card">
            <div className="icon-wrapper"><Heart size={40} /></div>
            <h3>Craftsmanship</h3>
            <p>Every stitch is placed with intention. Our artisans ensure every piece meets the highest standards.</p>
          </div>
        </div>
      </section>

      {/* New Newsletter Section */}
      <section className="newsletter-section">
        <div className="container newsletter-content glass-panel">
          <div className="newsletter-text">
            <h2>Join the Aura Circle</h2>
            <p>Subscribe to receive exclusive access to new drops, limited editions, and VIP events.</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
