import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { GiPathDistance } from "react-icons/gi";
import content from '../../content.json';
// Sample features data


const ProductDetail = () => {
  const { state } = useLocation();
  const { product } = state || {};  

  return (
    <div className="pt-10 bg-gray-100 min-h-screen pb-12">
      <div className="flex flex-col lg:flex-row md:flex-row space-x-12 justify-center w-[80%] mx-auto p-4">
        {/* Image Section */}
        <div className="h-96">
          <img src={product.image} alt={product.name} className="w-full h-full object-center rounded-xl" />
        </div>

        {/* Right Section */}
        <div className="my-auto lg:w-[40%]">
          <h1 className="mb-5 text-3xl text-gray-800 font-semibold">
            {product.name} - <span className="italic text-xl text-gray-800">{product.description}</span>
          </h1>
          <p className="text-base text-gray-700">
            {content.products[0].details}
          </p>
        </div>
      </div>

      {/* Render Key Features Section */}
      <div className="w-[90%] mx-auto">
        <KeyFeatures productName={product.name} />
      </div>
      <div className='w-[90%] mx-auto'>
        <Table productName={product.name}/>
      </div>
    </div>
  );
};

export default ProductDetail;


// KeyFeatures component 
const KeyFeatures = ({ productName }) => {
    const productFeatures = content.products.find((obj) => obj.name === productName);
  
  
    return (
      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg ">

<div className="p-4 lg:ml-36 md:ml-32">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 ml-4">Why choose our {productName}</h2>
          <p className='text-lg lg:w-2/3 text-left '>
            At Ganglia Technologies, we combine engineering, AI, and medical expertise to create affordable, high-quality solutions that enhance lives and streamline operations for businesses and institutions.
          </p>
          <h2 className="text-2xl font-bold  text-gray-800 mt-4 ">Key Features & Benefits</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 px-4 ">
          {productFeatures.keyFeatures.map((feature, index) => (
            <div key={index} className="p-4 bg-gray-50 border-l-3 border-gray-500 rounded-lg shadow-lg w-80">
              <h3 className="text-lg font-semibold text-gray-800">✅{feature.title}</h3>
              <ul className="list-disc ml-5 mt-2 text-gray-700">
                {feature.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  //table component
  const Table=({productName})=>{
    return(
      <div className='mt-10 bg-white p-6 rounded-lg shadow-lg'>
        <table>

        </table>
      </div>
    )
  }
  