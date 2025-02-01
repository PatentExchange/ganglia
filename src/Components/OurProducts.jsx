import React from 'react';

export const OurProducts = () => {
  const products = [
    {
      name: 'Laryngoscope',
      description: 'The Smart, Affordable Solution',
      details: 'Ganglia’s patented video-laryngoscope is transforming critical airway management by making advanced technology affordable and widely accessible.',
      image: '/assets/images/laryngoscope.png',
    },
    {
      name: 'TripMacha AI',
      description: 'Smart Travel Planning',
      details: 'AI-powered travel planning tool designed for personalized, local getaways.',
      image: '/assets/images/trip.jpg',
    },
  ];

  return (
    <div className="h-auto bg-gray-100 py-10 mb-20">
      <div className="pb-0.5 pt-0.5">
        <h1 className="text-4xl font-bold text-gray-700 text-center mb-6">Our Products</h1>
        <p className="text-center text-gray-600 mb-10 mx-auto max-w-5xl text-lg">
          Explore our innovative solutions designed to enhance everyday life by integrating cutting-edge technology, affordability, and user-friendly design.
          From revolutionizing medical procedures to making travel planning smarter, our products are crafted to bring efficiency, accessibility, and convenience to your world.
        </p>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 sm:max-w-3xl max-w-md mx-auto">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="text-gray-800 shadow-lg shadow-gray-400 rounded-lg overflow-hidden h-full flex flex-col transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-gray-500"
          >
            {/* Image Section - Takes 2/3 height */}
            <div className="h-60">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-center"
              />
            </div>

            {/* Content Section - Takes 1/3 height */}
            <div className="h-2/4 p-4 flex flex-col justify-center text-center">
              <h3 className="text-xl font-semibold mb-5">{product.name}</h3>
              <p className="text-gray-700 text-sm">{product.description}</p>
              <p className="text-gray-700 text-sm">{product.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;

