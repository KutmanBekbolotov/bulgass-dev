import React from "react";
import "./About.css"; 
import TeamMate1 from "../assets/TeamMates/TeamMate1.JPG";
import TeamMate2 from "../assets/TeamMates/TeamMate2.jpeg";
import TeamMate3 from "../assets/TeamMates/TeamMate3.jpeg";
import TeamMate4 from "../assets/TeamMates/TeamMate4.png";
import TeamMate5 from "../assets/TeamMates/TeamMate5.jpeg";
import TeamMate6 from "../assets/TeamMates/TeamMate6.png";

const AboutUs = () => {
  return (
    <div className="relative min-h-screen py-12 px-6 overflow-hidden">
      <div className="absolute inset-0 area -z-10">
        <ul className="circles">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>

      <div className="container mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          About Us
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Who We Are</h2>
          <p className="text-white leading-relaxed">
            At Bulgass, we specialize in delivering cutting-edge software solutions that drive business success. 
            Our mission is to empower organizations with innovative, efficient, and scalable digital products 
            tailored to their unique needs. With years of experience in web development, e-commerce, CRM systems, 
            and beyond, we are committed to excellence and customer satisfaction.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
          <p className="text-white leading-relaxed">
            Our mission is to transform ideas into reality through technology. We believe in the power of 
            collaboration, creativity, and a client-centric approach to deliver outstanding results. By leveraging 
            modern technologies and best practices, we aim to help businesses achieve sustainable growth and digital 
            transformation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <img
                src={TeamMate1}
                alt="Team Member 1"
                className="w-32 h-30 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Kutman Bekbolotov</h3>
              <h6 className="text-xl font-bold text-gray-600">Full Stack Software Engineer</h6>
              <p className="text-gray-600">
              A highly skilled Full Stack Software Engineer with extensive experience in both frontend and backend development, delivering end-to-end solutions for complex applications.
              </p>
            </div>
            <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <img
                src={TeamMate2}
                alt="Team Member 2"
                className="w-32 h-40 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Paul Fischer</h3>
              <h6 className="text-xl font-bold text-gray-600">Experienced backend engineer</h6>
              <p className="text-gray-600">
                A senior backend engineer with extensive expertise in building scalable, secure, and high-performance systems.
              </p>
            </div>
            <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <img
                src={TeamMate3}
                alt="Team Member 3"
                className="w-32 h-44 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Ilyaz Zulpiev</h3>
              <h6 className="text-xl font-bold text-gray-600">Lead Developer</h6>
              <p className="text-gray-600">
                A strategic Lead Developer with a strong background in full-stack development, capable of driving technical innovation and overseeing the development lifecycle.</p>
            </div>
            <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <img
                src={TeamMate4}
                alt="Team Member 3"
                className="w-32 h-38 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Aiza Abditair</h3>
              <h6 className="text-xl font-bold text-gray-600">SEO & funder</h6>
              <p className="text-gray-600">
              An entrepreneurial SEO expert and founder, combining technical SEO knowledge with business acumen to create high-performing websites and successful digital marketing strategies.
              </p>
            </div>
            <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <img
                src={TeamMate5}
                alt="Team Member 3"
                className="w-32 h-34 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Shernazar Alykulov</h3>
              <h6 className="text-xl font-bold text-gray-600">Marketing Lead</h6>
              <p className="text-gray-600">A results-oriented Marketing Lead skilled in developing and executing innovative marketing strategies, analyzing market trends, and enhancing customer engagement.</p>
            </div>
            <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <img
                src={TeamMate6}
                alt="Team Member 3"
                className="w-32 h-44 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Nazik Alymseitova</h3>
              <h6 className="text-xl font-bold text-gray-600">Lead Developer</h6>
              <p className="text-gray-600">A strategic Lead Developer with a strong background in full-stack development, capable of driving technical innovation and overseeing the development lifecycle.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
