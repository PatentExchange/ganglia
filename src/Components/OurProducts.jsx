import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

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
  const navigate=useNavigate();
  const handleOnclick=(product)=>{
    navigate(`/product-detail/${product.name}`, {state:{product}})
  }

  return (
    <div className=" bg-gray-100 py-7 ">
      <div className=" relative h-72 flex flex-col items-center justify-center text-center">
      <div className='absolute inset-0 bg-gray-400 opacity-60 z-0'></div>
  {/* Background Image */}
  <img 
    src="/assets/images/bg.jpg" 
    className="absolute inset-0 w-full h-full object-center mix-blend-multiply z-0" 
    alt="Background"
  />
  {/* Text Content */}
  <div className="relative  bg-white/50 p-4 h-full w-full">
    <h1 className="text-4xl font-bold text-gray-700 mb-6">Our Products</h1>
    <p className="text-gray-600 mb-10 mx-auto max-w-5xl text-lg">
      Explore our innovative solutions designed to enhance everyday life by integrating cutting-edge technology, affordability, and user-friendly design.
      From revolutionizing medical procedures to making travel planning smarter, our products are crafted to bring efficiency, accessibility, and convenience to your world.
    </p>
  </div>
</div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 sm:w-3xl  mx-auto relative -top-23">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="text-gray-800 shadow-lg shadow-gray-400 rounded-lg overflow-hidden h-full flex flex-col transform transition duration-300 mx-5 ease-in-out hover:scale-105 hover:shadow-gray-500"
            onClick={(e)=>{handleOnclick(product)}}
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
              <p className="text-gray-900  italic text-base">{product.description}</p>
              {/* <p className="text-gray-700 text-sm">{product.details}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;

