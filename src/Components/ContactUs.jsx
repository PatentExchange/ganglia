import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import content from "../../content.json";

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="">
            <div className="bg-cover bg-center relative"
            //   style={{ backgroundImage: "url('/assets/images/background.jpeg')" }}
            >
                <div className='absolute inset-0 bg-black opacity-90 -z-10'>
                    <img src="/assets/images/contactBG.jpeg" className='w-full h-64 object-cover mask-image brightness-50' />

                </div>

                <h1 className="text-4xl lg:text-6xl md:text-5xl font-bold text-white pb-28 pt-10 text-center text-nowrap">Contact Us</h1>

            </div>

            <div className="w-5/6 mx-auto -mt-16 flex flex-col sm:flex-row justify-evenly gap-8 bg-gray-50 mb-6 shadow-2xl">
                {/* Contact Details */}
                <div className="p-8 rounded-lg">
                    <h2 className="text-xl font-semibold border-b pb-2 mb-4">Get in Touch</h2>
                    <p><strong><FontAwesomeIcon icon={faPhone} /> Phone:</strong>
                        &nbsp; {content.contact.phone}
                    </p>
                    <p><strong><FontAwesomeIcon icon={faEnvelope} /> Email:</strong>
                        &nbsp;{content.contact.email}
                    </p>
                    <div className="mt-10">
                        <span className="text-lg font-semibold">{content.contactUs.title}</span>,
                        <br />
                        <p className="ml-3">
                            {content.contactUs.address.map((element, index) => (
                                <p>{element}</p>
                            ))}

                        </p>
                    </div>
                    <p className="text-red-500 mt-2">{content.contactUs.footNote}</p>
                </div>

                {/* Contact Form */}
                <div className="p-8 rounded-lg w-full">
                    <h2 className="text-xl font-semibold border-b pb-2 mb-4">Send Us a Message</h2>
                    <form className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="p-3 bg-gray-200 rounded" />
                        <input type="text" placeholder="Last Name" className="p-3 bg-gray-200 rounded" />
                        <input type="email" placeholder="Email *" className="p-3 bg-gray-200 rounded col-span-2" />
                        <input type="text" placeholder="Company" className="p-3 bg-gray-200 rounded" />
                        <input type="text" placeholder="Phone" className="p-3 bg-gray-200 rounded" />
                        <textarea placeholder="Your Message" className="p-3 bg-gray-200 rounded col-span-2 h-28"></textarea>
                        <button className="col-span-2 bg-neutral-900 text-white py-3 rounded transition-colors hover:scale-101">Submit</button>
                    </form>
                </div>
            </div>
            <div className="px-16 relative p-10 flex flex-col">
                <h3 className="font-bold text-xl sm:text-4xl sm:m-auto mb-6 sm:mb-6 text-nowrap">{content.contactUs.subtitle}</h3>
                <p className="max-w-4xl text-base sm:text-xl mx-auto">
                    {content.contactUs.note}
                </p>
            </div>
        </div>
    );
};

export default ContactUs;
