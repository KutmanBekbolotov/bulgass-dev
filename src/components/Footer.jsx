import { useContext } from "react"; 
import { LanguageContext } from "../language-config/LanguageContext";
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'; 

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const translations = {
    en: {
      title: "Company",
      services: "Services",
      contact: "Contact",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      aboutUs: "About Us",
      blog: "Blog",
      consulting: "Consulting",
      development: "Development",
      allRightsReserved: "All rights reserved.",
    },
    ru: {
      title: "Компания",
      services: "Услуги",
      contact: "Контакты",
      privacyPolicy: "Политика конфиденциальности",
      termsOfService: "Условия использования",
      aboutUs: "О нас",
      blog: "Блог",
      consulting: "Консультации",
      development: "Разработка",
      allRightsReserved: "Все права защищены.",
    },
  };
  return (
    <footer className="bg-gray-800 text-white py-8 mt-0">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{translations[language].title}</h3>
            <ul>
              <li><a href="/about" className="hover:text-blue-500">{translations[language].aboutUs}</a></li>
              <li><a href="/blog" className="hover:text-blue-500">{translations[language].blog}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{translations[language].services}</h3>
            <ul>
              <li><a href="#consulting" className="hover:text-blue-500">{translations[language].consulting}</a></li>
              <li><a href="/development" className="hover:text-blue-500">{translations[language].development}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{translations[language].contact}</h3>
            <ul>
              <li>
                <a href="https://www.instagram.com/bulgass.it" className="flex items-center space-x-2 hover:text-blue-500">
                  <FaInstagram size={20} />
                  <span>bulgass.it</span>
                </a>
              </li>
              <li>
                <a href="tel:+996508522911" className="flex items-center space-x-2 hover:text-blue-500">
                  <FaWhatsapp size={20} />
                  <span>+996 508 522 911</span>
                </a>
              </li>
              <li>
                <a href="https://t.me/your_username" className="flex items-center space-x-2 hover:text-blue-500">
                  <FaTelegramPlane size={20} />
                  <span>Telegram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p>&copy; 2025 Bulgass. {translations[language].allRightsReserved}</p>
          <div className="mt-4">
            <a href="#privacy-policy" className="text-gray-400 hover:text-blue-500 mr-6">{translations[language].privacyPolicy}</a>
            <a href="#terms-of-service" className="text-gray-400 hover:text-blue-500">{translations[language].termsOfService}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
