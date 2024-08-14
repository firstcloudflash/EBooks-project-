import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/affiliate-products');
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Recommended Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt={product.attributes.name} className="w-full h-auto" />
            <h4 className="text-lg font-semibold">{product.attributes.name}</h4>
            <p>{product.attributes.description}</p>
            <a href={product.attributes.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">Buy Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
  
