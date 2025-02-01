import { faEnvelope, faEnvelopeSquare, faPhone, faPhoneAlt, faPhoneFlip, faPhoneSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactUs = () => {
    return (
        <div className="py-10 px-6">
            <div
                className="bg-cover bg-center"
            //   style={{ backgroundImage: "url('/assets/images/background.jpeg')" }}
            >
                <h1 className="text-4xl font-bold mb-4 w-fit">Contact Us</h1>
                <p className="max-w-3xl mx-auto text-lg">
                    We'd love to hear from you! Whether it's inquiries, feedback, or your own stories of how our AI and software solutions helped, please fill out the form below. Each message is valued, and we promise to respond with dedication and care.
                </p>
            </div>

            {/* Contact Info & Form */}
            <div className="container mx-auto mt-12 flex justify-evenly gap-8">

                {/* Contact Details */}
                <div className="p-8 rounded-lg">
                    <h2 className="text-xl font-semibold border-b pb-2 mb-4">Get in Touch</h2>
                    <p><strong><FontAwesomeIcon icon={faPhone}/> Phone:</strong> (+91) 81097 82903</p>
                    <p><strong><FontAwesomeIcon icon={faEnvelope}/> Email:</strong> info@gangliatechnologies.com</p>
                    <p className="text-red-500 mt-2">Closed on Sundays and Public Holidays</p>
                </div>

                {/* Contact Form */}
                <div className="p-8 rounded-lg w-2/4">
                    <h2 className="text-xl font-semibold border-b pb-2 mb-4">Send Us a Message</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="p-3 bg-gray-300 rounded" />
                        <input type="text" placeholder="Last Name" className="p-3 bg-gray-300 rounded" />
                        <input type="email" placeholder="Email *" className="p-3 bg-gray-300 rounded col-span-2" />
                        <input type="text" placeholder="Company" className="p-3 bg-gray-300 rounded" />
                        <input type="text" placeholder="Phone" className="p-3 bg-gray-300 rounded" />
                        <textarea placeholder="Your Message" className="p-3 bg-gray-300 rounded col-span-2 h-28"></textarea>
                        <button className="col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded transition">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
