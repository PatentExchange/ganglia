import { faFacebook, faLinkedin, faTwitter, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faM, faMailBulk, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import myImage from "/assets/images/gangliaLogo.png"

const Footer = () => {
    return (
        <footer className=" text-white w-full bg-gray-800">
            <div className="py-16 relative overflow-hidden">
                <div className="mx-auto justify-between ml-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="inline text-gray-400">
                        <img src={myImage} className="h-20" />
                        <p>(+91) 1234567890</p>
                        <p>Headquarters: Manipal, Karnataka, India</p>
                        <p>Email: info@ganglia.in</p>
                        <p>Website: www.ganglia.in</p>
                    </div>
                    {/* Get in Touch Section */}
                    <div>
                        <h3 className="font-bold text-xl mb-4">Get in Touch</h3>
                        <p className="mb-4">
                            Don’t miss any updates!
                        </p>
                        <form className="flex flex-col gap-4 mr-6">
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

                    <div className="text-lg h-full">
                        <h3 className="font-bold text-xl mb-4">Our Services</h3>
                        <div className="ml-2">
                            <p><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></p>
                            <p><Link to="/services">Our products</Link></p>
                        </div>
                        
                        {/* Social Section */}
                        <div className="mr-6 h-2/3 flex items-center">
                            {/* <h3 className="text-xl font-semibold mb-4">Team Solutions</h3> */}
                            <div className="flex space-x-6 text-2xl">
                                <FontAwesomeIcon className="transition hover:scale-125" icon={faFacebook} />
                                <FontAwesomeIcon className="transition hover:scale-125" icon={faXTwitter} />
                                <FontAwesomeIcon className="transition hover:scale-125" icon={faLinkedin} />
                                <FontAwesomeIcon className="transition hover:scale-125" icon={faEnvelope} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg">
                {/* <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png')" }}></div> */}
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
