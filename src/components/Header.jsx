import {  useState, useContext } from 'react';
import "./Header.css";
import logo from '../assets/logo.png';
import { LanguageContext } from "../language-config/LanguageContext";



const Header = ({ scrollToFooter }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const services = [
    { 
      title: { en: "Strategy", ru: "Стратегия" },
      items: {
        en: ["Optimizing for Growth", "Talent Enablement", "Mergers & Acquisitions", "Project to Product", "Generative AI Advisory", "Transformative Research & Insights"],
        ru: ["Оптимизация роста", "Развитие талантов", "Слияния и поглощения", "От проекта к продукту", "Консультации по генеративному ИИ", "Трансформационные исследования и аналитика"]
      }
    },
    {
      title: { en: "Engineering", ru: "Разработка" },
      items: {
        en: ["Platform & Product Development", "DevOps", "Agile Ways of Working", "Quality Engineering", "IoT", "Open Source", "Metaverse", "API & Integration", "Modernization", "Core & Enterprise Systems", "Composable", "Physical Product Development"],
        ru: ["Разработка платформ и продуктов", "DevOps", "Гибкие методологии", "Контроль качества", "Интернет вещей", "Открытый код", "Метавселенная", "API и интеграции", "Модернизация", "Корпоративные системы", "Композитная архитектура", "Разработка физических продуктов"]
      }
    },
    {
      title: { en: "Cloud", ru: "Облачные технологии" },
      items: {
        en: ["Data & Analytics", "Cloud Data Migration", "Artificial Intelligence", "Responsible AI", "Generative AI", "AI Security by Design", "AI-Accelerated Engineering"],
        ru: ["Данные и аналитика", "Миграция данных в облако", "Искусственный интеллект", "Ответственный ИИ", "Генеративный ИИ", "Безопасность ИИ", "ИИ-ускоренная разработка"]
      }
    },
    {
      title: { en: "Cybersecurity", ru: "Кибербезопасность" },
      items: {
        en: ["Managed Detection & Response", "Digital Risk Management", "Outside-In Validation", "Cybersecurity Advisory", "Cloud & Data Security", "Ransomware Protection", "Zero Trust Implementation"],
        ru: ["Управляемое обнаружение и реагирование", "Управление цифровыми рисками", "Внешняя валидация", "Консультации по кибербезопасности", "Облачная безопасность и защита данных", "Защита от программ-вымогателей", "Внедрение Zero Trust"]
      }
    }
  ];

  const translations = {
    en: {
      services: "Services",
      contactUs: "Contact us",
    },
    ru: {
      services: "Услуги",
      contactUs: "Свяжитесь с нами",
    },
  };

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
                  {translations[language].services}
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToFooter} 
                  className="hover:text-blue-500 focus:outline-none"
                >
                  {translations[language].contactUs}
                </button>
              </li>
               <li>
              <button onClick={toggleLanguage}>
              {language === "en" ? "RU" : "EN"}
            </button>
               </li>
            </ul>
          </nav>
        </div>
      </header>

      {isModalOpen && (
        <div className="modal-backdrop">
          <button 
            onClick={closeModal} 
            className="close-button"
          >
            &times;
          </button>
          <div className="modal-text">
            <h2>{language === "en" ? "Our Services" : "Наши услуги"}</h2>
            {services.map((service, index) => (
              <div key={index} className="service-category">
                <h3>{service.title[language]}</h3>
                <ul>
                  {service.items[language].map((item, idx) => (
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
