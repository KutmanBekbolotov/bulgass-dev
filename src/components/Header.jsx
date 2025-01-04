import React, { useRef, useState } from 'react';
import "./Header.css";
import logo from '../assets/logo.png';

const Header = ({ scrollToFooter }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const services = [
    { title: "Strategy", items: ["Optimizing for Growth", "Talent Enablement", "Mergers & Acquisitions", "Project to Product", "Generative AI Advisory", "Transformative Research & Insights"] },
    { title: "Engineering", items: ["Platform & Product Development", "DevOps", "Agile Ways of Working", "Quality Engineering", "IoT", "Open Source", "Metaverse", "API & Integration", "Modernization", "Core & Enterprise Systems", "Composable", "Physical Product Development"] },
    { title: "Cloud", items: ["Data & Analytics", "Cloud Data Migration", "Artificial Intelligence", "Responsible AI", "Generative AI", "AI Security by Design", "AI-Accelerated Engineering", "EPAM AI/Run™"] },
    { title: "Cybersecurity", items: ["Managed Detection & Response", "Digital Risk Management", "Outside-In Validation", "Cybersecurity Advisory", "Cloud & Data Security", "Ransomware Protection", "Zero Trust Implementation"] },
  ];

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <button 
                  onClick={() => setModalOpen(true)} 
                  className="hover:text-blue-500 focus:outline-none"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToFooter} 
                  className="hover:text-blue-500 focus:outline-none"
                >
                  Contact us
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <button 
            onClick={closeModal} 
            className="close-button"
          >
            &times;
          </button>
          <div className="modal-text">
            <h2>Our Services</h2>
            {services.map((service, index) => (
              <div key={index} className="service-category">
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
