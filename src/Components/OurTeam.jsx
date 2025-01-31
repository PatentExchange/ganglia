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
        <div className="p-4 items-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 ml-4">Meet Our Team</h2>
          <p className="max-w-2xl text-left text-xl m-4">
            Ganglia Technologies is driven by a team of industry experts, researchers, and innovators, comprising:
            
            Leadership Team: Seasoned professionals in engineering, AI, and healthcare.
           
            50+ Employees: Dedicated to developing, refining, and delivering high-impact solutions.
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