import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import myImage from "/assets/images/gangliaLogo.png"

const Footer = () => {
    return (
        <footer className=" text-white w-full bg-gray-800">
            <div className="py-16 relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex justify-between ml-6">
                    <div className="inline text-gray-400">
                        <img src={myImage} className="h-20" />
                        <p>(+91) 123456789</p>
                        <p>directr@ganglia.com</p>
                    </div>
                        {/* Get in Touch Section */}
                        <div>
                            <h3 className="font-bold text-xl mb-4">Get in Touch</h3>
                            <p className="mb-4">
                                Don’t miss any updates!
                            </p>
                            <form className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="EMAIL"
                                    className="border border-gray-300 p-2 rounded"
                                    placeholder="Email"
                                />
                                <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
                                    Contact
                                </button>
                            </form>
                        </div>

                        {/* Help Section */}
                        <div className="text-lg">
                            <h3 className="font-bold text-xl mb-4">Company</h3>
                            <div className="ml-2">
                                <p><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></p>
                                <p><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></p>
                                <p><Link to="/">Blog</Link></p>
                                <p><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></p>
                            </div>
                        </div>

                        <div className="text-lg">
                            <h3 className="font-bold text-xl mb-4">Our Services</h3>
                            <div className="ml-2">
                                <p><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></p>
                                <p><Link to="/">Our products</Link></p>

                            </div>
                        </div>

                        {/* Social Section */}
                        <div className="mr-6">
                            <h3 className="text-lg font-semibold mb-4">Team Solutions</h3>

                            <div className="flex space-x-4 text-2xl">
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faLinkedin} />
                                <FontAwesomeIcon icon={faX} />
                                {/* {['facebook', 'twitter', 'linkedin', 'pinterest'].map(icon => (
                                    <a
                                        key={icon}
                                        href="#"
                                        className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-indigo-600 hover:text-white"
                                    >
                                        <i className={`fab fa-${icon}`}></i>
                                    </a>
                                ))} */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg">
                    {/* <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png')" }}></div> */}
                </div>
            </div>

            {/* Copyrights section */}
            {/* <div className="bg-gray-100 py-1">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-gray-600 px-3">&copy; Ganglia Technologies Pvt. Ltd. 2022 All rights reserved.</p>
        </div>
      </div> */}
        </footer>
    );
};

export default Footer;
