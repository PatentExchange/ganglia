import React from "react";
import content from "../../../content.json"

const OurTeam = () => {
  return (
    <div>
      <section className="py-12 bg-gray-100">
        <div className="p-4 items-center lg:ml-36 md:ml-32">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 ml-4">Meet Our Team</h2>
          <p className="max-w-2xl text-left text-xl m-4">
          {content.ourTeamDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
          {content.ourTeam.map((member, index) => (
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
              <h4 className="text-base font-semibold text-gray-600">{member.position}</h4>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
