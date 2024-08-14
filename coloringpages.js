import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ColoringPages = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchColoringPages = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/coloring-pages');
        setPages(response.data.data);
      } catch (error) {
        console.error('Error fetching coloring pages:', error);
      }
    };

    fetchColoringPages();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Printable Coloring Pages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pages.map(page => (
          <div key={page.id} className="border p-4 rounded">
            <img src={`http://localhost:1337${page.attributes.image.data.attributes.url}`} alt={page.attributes.title} className="w-full h-auto" />
            <h4 className="text-lg font-semibold">{page.attributes.title}</h4>
            <a href={`http://localhost:1337${page.attributes.file.data.attributes.url}`} download className="text-blue-600">Download</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColoringPages;
