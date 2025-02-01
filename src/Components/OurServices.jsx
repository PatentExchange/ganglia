import React, { useEffect, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import OurProducts from './OurProducts';

const services = [
    {
        title: "AI-Powered Applications",
        subtitle: "Intelligent automation, machine learning, and NLP models",
        image: "/assets/images/ai.jpg",
        description: "We harness the power of artificial intelligence to create advanced applications that automate processes, improve decision-making, and offer personalized user experiences. Our AI solutions include machine learning algorithms, natural language processing (NLP), and intelligent automation to make your business more efficient and future-ready."
    },
    {
        title: "Enterprise Software",
        subtitle: "Scalable business solutions tailored to client needs",
        image: "/assets/images/enterprise.jpg",
        description: "Our enterprise software solutions are designed to meet the unique needs of your organization. We offer scalable, customizable solutions that integrate seamlessly into your existing infrastructure. Whether it's improving internal operations or providing client-facing applications, our software ensures enhanced productivity and business growth."
    },
    {
        title: "Healthcare Tech",
        subtitle: "Smart medical devices, telemedicine platforms, and patient data management",
        image: "/assets/images/medicle.jpg",
        description: "We develop cutting-edge healthcare technologies that revolutionize patient care. Our smart medical devices, telemedicine platforms, and patient data management systems aim to streamline healthcare delivery and improve patient outcomes. We focus on developing solutions that are secure, user-friendly, and effective in modern healthcare environments."
    },
    {
        title: "Cloud & Data Solutions",
        subtitle: "Secure cloud computing, data analysis, and AI-driven insights",
        image: "/assets/images/cloud.png",
        description: "Leverage the power of the cloud to scale your operations. Our cloud and data solutions provide secure cloud computing environments, advanced data analytics, and AI-driven insights that help businesses make data-driven decisions. We ensure high-performance, security, and reliability, enabling you to unlock the full potential of your data in a seamless cloud environment."
    }
];

const OurServices = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return (
        <div className="bg-white h-auto pt-10">
            {/* Services Section */}
            <div>
                {/* New Background Section at the Top */}
                <div className="relative mb- max-h-60">
                    <motion.div 
                        className="w-full h-64 md:h-70 lg:h-80 bg-cover bg-center bg-gray-700"
                        initial={{ opacity: 0, y:-100 }}
                        animate={{  opacity: 1, y: -60 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Text Overlay on Background */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                            <h2 className="sm:text-3xl text-neutral-50 font-bold">Custom AI & Software Development</h2>
                            <p>Ganglia Technologies provides cutting-edge software solutions across multiple domains:</p>
                        </div>
                    </motion.div>
                </div>

                {/* Services List */}
                <div className='relative w-5/6 mx-auto pb-1'> 
                    <div className="flex flex-wrap justify-center relative -top-16">
                        {services.map((service, index) => {
                            const ref = useRef(null);
                            const isInView = useInView(ref, { triggerOnce: false, margin: "-50px 0px" });

                            return (
                                <div 
                                    key={index} 
                                    ref={ref}
                                    className="bg-gray-300 text-gray-800 shadow-lg rounded-lg overflow-hidden mb-12 flex flex-col md:flex-row ml-6 justify-between hover:bg-gray-300 transition duration-300"
                                    style={{ width: "100%", maxWidth: "1200px" }} 
                                >
                                    {/* Image Section (Fixed) */}
                                    <div className={`w-full md:w-70 h-64 flex items-center justify-center transition duration-300 object-center ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                                        <img src={service.image} alt={service.title} className="w-full h-full object-center" />
                                    </div>

                                    {/* Text Section (ANIMATED) */}
                                    <div className="p-6 md:w-2/3 max-w-4xl text-gray-800">
                                        {isInView && (
                                            <>
                                                <motion.h3 
                                                    className="text-2xl font-bold text-gray-800 mb-2"
                                                    initial={{ opacity: 0, y: 50 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                                >
                                                    {service.title}
                                                </motion.h3>

                                                <motion.p 
                                                    className="text-gray-800"
                                                    initial={{ opacity: 0, y: 50 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                                                >
                                                    {service.subtitle}
                                                </motion.p>

                                                <motion.p 
                                                    className="text-gray-600"
                                                    initial={{ opacity: 0, y: 50 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                                                >
                                                    {service.description}
                                                </motion.p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* OurProducts Section (Comes After Services) */}
            <div className="relative mt-1">
                <OurProducts />
            </div>
        </div>
    );
};

export default OurServices;
