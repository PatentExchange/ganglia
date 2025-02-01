import React from "react";



// Sample team data
const teamMembers = [
  { name: "Fran Wilson", image: "/assets/images/emp1.jpeg", social: ["facebook", "twitter", "linkedin"] },
  { name: "Adam Smith", image:"/assets/images/emp2.jpeg", social: ["facebook", "twitter", "linkedin"] },
  { name: "Sarah Glenn", image:"/assets/images/emp3.jpeg", social: ["facebook", "twitter", "linkedin"] },
  { name: "Chris Woakes", image: "/assets/images/emp4.jpeg", social: ["facebook", "twitter", "linkedin"] },
  { name: "Fran Wilson", image:"/assets/images/emp5.jpeg", social: ["facebook", "twitter", "linkedin"] },
  { name: "Adam Smith", image: "/assets/images/emp6.jpeg", social: ["facebook", "twitter", "linkedin"] },
  { name: "Sarah Glenn", image: "/assets/images/emp1.jpeg", social: ["facebook", "twitter", "linkedin"] },
  { name: "Chris Woakes", image: "/assets/images/emp2.jpeg", social: ["facebook", "twitter", "linkedin"] },
];

const OurTeam = () => {
  return (
    <div>
      <section className="py-12 bg-gray-100">
        <div className="p-4 items-center lg:ml-36 md:ml-32">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 ml-4">Meet Our Team</h2>
          <p className="max-w-2xl text-left text-xl m-4">
          At Ganglia Technologies, our strength lies in our people.
           Led by seasoned professionals in engineering, AI, and healthcare, our leadership team drives innovation and excellence. 
           With a dedicated workforce of 50+ experts, we are committed to developing, refining, and delivering high-impact solutions that make a difference.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 !== 0 ? "transform -translate-y-6" : ""}`} // Apply transform to every 2nd member
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
              <div className="flex justify-center space-x-4 mt-2">
                {member.social.map((platform, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;