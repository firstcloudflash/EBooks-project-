// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ColoringPages from './pages/ColoringPages';
import Services from './pages/Services';
import Wallpapers from './pages/Wallpapers';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/coloring-pages" element={<ColoringPages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/wallpapers" element={<Wallpapers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
    
