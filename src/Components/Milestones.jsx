import React from 'react';

const awards = [
  {
    year: 2024,
    title: "Certificate of Excellence in Product Design",
    imgurl: "/assets/images/award6.png"
  },
  {
    year: 2024,
    title: "14 Patents Secured",
    imgurl: "/assets/images/award2.png"
  },
  {
    year: 2023,
    title: "Winner, Great Indian Entrepreneurship Award",
    imgurl: "/assets/images/award5.png"
  },
  {
    year: 2023,
    title: "Selected for Singapore-India Hackathon",
    imgurl: "/assets/images/award1.png"
  },
  {
    year: 2023,
    title: "Recipient of Startup India Seed Fund Grant",
    imgurl: "/assets/images/award3.png"
  }
];

const Milestones = () => {
  return (
    <div className="w-full mx-auto p-6 bg-gray-100">
      {/* Milestones Section */}
      <section className="py-12">
        <div className="p-4 items-center text-center lg:ml-36 md:ml-32 mb-12">
          <h2 className="text-4xl  font-bold text-gray-800 mb-8 ml-4">Milestones and Recognition</h2>
          <p className='text-lg w-2/3 text-left mx-auto'>
            We are proud of our achievements in innovation and excellence. 
            From securing patents to winning industry awards, our work is making a real impact. 
            Here are some of our key milestones:
          </p>
        </div>

        {/* Award List */}
        <div className="flex flex-wrap justify-center gap-8 px-4 w-[90%] mx-auto">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg mb-3 w-80">
              <img src={award.imgurl} alt={award.title} className="w-16 h-16 -mt-8 mb-4" />
              <span className="text-lg text-gray-600 mb-2">{award.year}</span>
              <h3 className="text-base font-semibold text-gray-800 text-center">{award.title}</h3>
            </div>
          ))}
        </div>
          
      </section>
    </div>
  );
}

export default Milestones;
