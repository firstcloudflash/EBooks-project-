import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Wallpapers = () => {
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/wallpapers');
        setWallpapers(response.data.data);
      } catch (error) {
        console.error('Error fetching wallpapers:', error);
      }
    };

    fetchWallpapers();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Download Wallpapers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {wallpapers.map(wallpaper => (
          <div key={wallpaper.id} className="border p-4 rounded">
            <img src={`http://localhost:1337${wallpaper.attributes.image.data.attributes.url}`} alt={wallpaper.attributes.title} className="w-full h-auto" />
            <h4 className="text-lg font-semibold">{wallpaper.attributes.title}</h4>
            <div className="flex space-x-4">
              <a href={`http://localhost:1337${wallpaper.attributes.iphoneFile.data.attributes.url}`} download className="text-blue-600">iPhone</a>
              <a href={`http://localhost:1337${wallpaper.attributes.androidFile.data.attributes.url}`} download className="text-blue-600">Android</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallpapers;
