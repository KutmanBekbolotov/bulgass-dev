import { useContext } from "react";
import { LanguageContext } from "../language-config/LanguageContext";
import "./MainSection.css"; 
import screen1 from "../assets/screen1.jpeg";
import screen2 from "../assets/screen2.jpeg";
import screen3 from "../assets/screen3.png";
import screen4 from "../assets/screen4.png";
import Mars1 from "../assets/Mars1.gif";
import Mars2 from "../assets/Mars2.gif";

const MainSection = () => {
  const { language } = useContext(LanguageContext);
  const translations = {
    en: {
      title: "Welcome to Our Website",
      description: "Explore our innovative solutions and cutting-edge technologies.",
      projects: "Our projects:",
      spaceExploration: "Exploring space:",
    },
    ru: {
      title: "Добро пожаловать на наш сайт",
      description: "Исследуйте наши инновационные решения и передовые технологии.",
      projects: "Наши проекты:",
      spaceExploration: "Изучение космоса:",
    },
  };

  return (
    <div className="main-section">
      {/* Waves Background */}
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      {/* Text Content */}
      <div className="content">
        <h1>{translations[language].title}</h1>
        <p>{translations[language].description}</p>
        <p>{translations[language].projects}</p>
      </div>

      <div className="slider">
        <div className="slide">
          <img src={screen1} alt="Project 1" />
        </div>
        <div className="slide">
          <img src={screen2} alt="Project 2" />
        </div>
        <div className="slide">
          <img src={screen3} alt="Project 3" />
        </div>
        <div className="slide">
          <img src={screen4} alt="Project 4" />
        </div>
        <div className="slide">
          <img src={Mars1} alt="Project 5" />
        </div>
        <div className="slide">
          <img src={Mars2} alt="Project 6" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
