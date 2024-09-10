
import React, { useState } from 'react';
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    "https://images.pexels.com/photos/19868912/pexels-photo-19868912/free-photo-of-dean-village-beautiful-historic-village-in-edinburgh-scotland.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/27815146/pexels-photo-27815146/free-photo-of-a-river-runs-through-a-city-with-buildings-on-both-sides.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/19868912/pexels-photo-19868912/free-photo-of-dean-village-beautiful-historic-village-in-edinburgh-scotland.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/27815146/pexels-photo-27815146/free-photo-of-a-river-runs-through-a-city-with-buildings-on-both-sides.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  const handleClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <>
    <div className="container mx-auto relative p-4">
    <h2 className="text-gray-900 text-5xl mb-4 font-normal">Gallery</h2>

    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Sample ${index}`}
            className="cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => handleClick(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative">
            <button className="absolute top-0 right-0 m-4 text-white text-2xl" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-screen" />
          </div>
        </div>
      )}
    </div>
    </div>
    </>
  )
}
