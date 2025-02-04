import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { GiPathDistance } from "react-icons/gi";

// Sample features data
const featuresData = [
  {
    title: 'Laryngoscope',
    whyChooseUs:'Traditional video-laryngoscopes cost ₹7+ lakhs, making them inaccessible to many hospitals, especially in rural areas. Our affordable, high-quality alternative aims to bridge this gap, priced at just ₹1.5–2 lakhs.',
    keyFeatures: [
      {
        icon: faRoute,
        title: 'Multiple Wide-Angle Cameras for Clearer Visualization',
        details: [
          'Equipped with multiple high-resolution cameras for superior airway visualization.',
          'Real-time video streaming to monitors, phones, or computers for remote monitoring and collaboration.',
        ],
      },
      {
        icon: faRoute,
        title: 'Built-in Oxygen Tube for Continuous Oxygenation',
        details: [
          'Traditional laryngoscopes interrupt oxygen supply, increasing patient risk.',
          'Our device ensures uninterrupted oxygen flow, improving patient safety and comfort.',
        ],
      },
      {
        icon: faRoute,
        title: 'Lightweight & Ergonomic Design',
        details: [
          'Significantly lighter than other video-laryngoscopes.',
          'Ergonomic handle & controls for better grip and maneuverability.',
        ],
      },
      {
        icon: faRoute,
        title: 'Movable Tip for Trauma-Free Intubation',
        details: [
          'A precision-controlled movable tip (tongue) to gently manipulate the epiglottis, reducing patient discomfort.',
          'Controlled by a joystick, ensuring a smoother intubation process.',
        ],
      },
      {
        icon: faRoute,
        title: 'Ease of Use – No Doctor Needed for Basic Use',
        details: [
          'Designed for intuitive operation, enabling trained nurses to handle basic intubation procedures.',
          'Remote viewing capability allows doctors to supervise from a distance.',
        ],
      },
    ],
  },
  {
    title: 'TripMacha AI',
    whyChooseUs:'Most travel platforms overload users with information, leading to decision fatigue and inefficient planning. TripMacha simplifies the process with smart automation and real-time AI-driven recommendations.',

    keyFeatures: [
      {
        icon: faRoute,
        title: 'Instant Personalized Itineraries',
        details: [
          'AI generates tailored travel plans based on your preferences, schedule, and budget.',
          'Takes into account local attractions, food, and hidden gems.',
          'Adjusts plans based on weather, traffic, and store timings.',
        ],
      },
      {
        icon: GiPathDistance,
        title: 'Designed for Short Trips (Under 70 km)',
        details: [
          'Focuses on quick getaways and local travel, a neglected segment in the travel industry.',
          'Perfect for weekend trips, one-day outings, and business travelers.',
        ],
      },
   
      {
        icon:faRoute,
        title: 'Eco-Friendly Travel Choices',
        details: [
          'Recommends sustainable travel options, including public transport and eco-friendly hotels.',
          'Promotes GI-tagged products and traditional cuisines, supporting local economies.',
        ],
      },
    ],
  },
];

const ProductDetail = () => {
  const { state } = useLocation();
  const { product } = state || {};

  if (!product) {
    return <p className="text-center text-gray-600 mt-10">Product not found.</p>;
  }

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
            Ganglia Technologies' patented smart video-laryngoscope is designed to provide cutting-edge airway management at an affordable cost. Our device integrates advanced imaging, continuous oxygenation, and user-friendly features, making it the most accessible and efficient solution for medical professionals.
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
    const productFeatures = featuresData.find((obj) => obj.title === productName);
  
  
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
  