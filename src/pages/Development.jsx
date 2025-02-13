import { useContext } from "react";
import { LanguageContext } from "../language-config/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import Crypto1 from "../assets/Projects/Crypto1.png";
import Crypto2 from "../assets/Projects/Crypto2.png";
import Crypto3 from "../assets/Projects/Crypto3.png";
import VideoShare from "../assets/Projects/VideoShare.png";
import CRM from "../assets/Projects/CRM.png";
import CRM2 from "../assets/Projects/CRM2.png";
import ImageDetector from "../assets/Projects/ImageDetector.png";
import NFT1 from "../assets/Projects/NFT1.jpeg";
import NFT2 from "../assets/Projects/NFT2.jpeg";
import NFT3 from "../assets/Projects/NFT3.jpeg";
import DNA from "../assets/Projects/DNA.mp4";
import Starchik from "../assets/Projects/Starchik.png";
import Starchik2 from "../assets/Projects/Starchik2.png";
import Foody from "../assets/Projects/Foody.mp4";
import Fukoka from "../assets/Projects/Fukoka.gif";

const DevelopmentPage = () => {
  const { language } = useContext(LanguageContext);
  const translations = {
    en: {
      title: "Our Projects",
      description1: "Fullstack-Crypto-Marketplace. Live Data Fetching: Get real-time updates with free and fixed limits Theme Options: Toggle between Dark and Light themes Trending Coins & NFTs: Stay up-to-date with the hottest assets Top Coins Overview: See key coins with a sparkline chart BTC Holder Companies: Discover companies holding Bitcoin",
      description2: "An in-depth walkthrough of the key components of a video sharing platform UI. Tips and tricks for creating a seamless user experience, from navigation to content discovery. Design principles and best practices to make your platform stand out in a crowded digital landscape. Insightful commentary on the latest trends and innovations shaping the future of UI design in the realm of web coding.",
      description3: "CRM systems for anoher kinds of business High perfomance, user friendly and with nice UX/UI design",
      description4: "Tagging and Color Extraction: See how to analyze images, extract relevant tags, and identify dominant colors to create stunning user experiences. Optimize for Performance: Tips and tricks to ensure your AI image detector runs efficiently on all devices!",
      description5: `An NFT store is an online platform where users can buy, sell and exchange unique digital assets (NFTs) based on blockchain technology. The store can include collections of digital art, music, videos, gaming items and other tokenized assets, ensuring their authenticity, rarity and ownership.`,
      description6: `Project in the field of medicine. Research in genetics. How the IT industry helps develop medicine. Joint project with IBM`, 
      description7: `For Starbucks London, we created a unique digital solution that not only improved the brand's online presence, but also significantly increased customer engagement. Inspired by the concept of "the third place," we developed a platform that combines innovative technology with the simplicity and convenience that has become the hallmark of Starbucks.`,
      description8: `We are proud of our project for a chain of health food stores, which became a real example of how digital technologies can help develop a brand that strives to improve the quality of life of its customers. The main concept was to create an online platform that supports the brand philosophy of “A healthy body, a healthy mind”, offering a convenient shopping interface and useful information about a healthy lifestyle.`,
      description9: `For the Korean restaurant Fukoku, we created a unique digital solution that emphasizes its traditions and modern style, and also makes the process of ordering and interacting with customers as convenient and enjoyable as possible. Our goal was not only to improve the restaurant's online presence, but also to create a platform that conveyed the atmosphere and spirit of Korean culture.`,
    },
    ru: {
      title: "Наши проекты",
      description1: `Fullstack-Crypto-Marketplace.
Live Data Fetching: Получайте обновления в реальном времени с бесплатными и фиксированными лимитами.
Theme Options: Переключайтесь между темной и светлой темами.
Trending Coins & NFTs: Оставайтесь в курсе самых популярных активов.
Top Coins Overview: Смотрите ключевые монеты с графиком мини-данных.
BTC Holder Companies: Узнайте о компаниях, которые держат Биткойн.
`,
      description2: "Подробный обзор ключевых компонентов пользовательского интерфейса платформы для обмена видео. Советы и рекомендации по созданию бесшовного пользовательского опыта, от навигации до открытия контента. Принципы дизайна и лучшие практики, которые помогут вашей платформе выделиться в насыщенном цифровом ландшафте. Проницательные комментарии о последних тенденциях и инновациях, формирующих будущее дизайна пользовательских интерфейсов в сфере веб-разработки.",
      description3: "CRM системы для других типов бизнеса. Высокая производительность, удобство в использовании и привлекательный UX/UI дизайн.",
      description4: "Маркировка и извлечение цвета: узнайте, как анализировать изображения, извлекать соответствующие теги и определять доминирующие цвета для создания потрясающего пользовательского опыта. Оптимизация производительности: советы и рекомендации, которые помогут обеспечить эффективную работу вашего детектора изображений AI на всех устройствах!",
      description5: "NFT магазин — это онлайн-платформа, где пользователи могут покупать, продавать и обменивать уникальные цифровые активы (NFT) на основе технологии блокчейн. Магазин может включать коллекции цифрового искусства, музыки, видео, игровых предметов и других токенизированных активов, обеспечивая их подлинность, редкость и владение.",
      description6: "Проект в области медецины. Исследование в области генетики. Как IT индустрия помогает развивать медецину. Совместный проект с IBM",
      description7: "Для Starbucks в Лондоне мы создали уникальное цифровое решение, которое не только улучшило онлайн-присутствие бренда, но и значительно повысило уровень взаимодействия с клиентами. Вдохновленные концепцией третьего места, мы разработали платформу, которая сочетает инновационные технологии с простотой и удобством, которые стали отличительной чертой Starbucks.",
      description8: `Мы гордимся нашим проектом для сети магазинов здорового питания, который стал настоящим примером того, как цифровые технологии могут помочь развивать бренд, который стремится улучшить качество жизни своих клиентов. Основной концепцией было создание онлайн-платформы, которая поддерживает философию бренда "В здоровом теле – здоровый дух", предлагая удобный интерфейс для покупок и полезную информацию о здоровом образе жизни.`,
      description9: `Для ресторана корейской кухни Fukoku мы создали уникальное цифровое решение, которое подчеркивает его традиции и современный стиль, а также делает процесс заказа и взаимодействия с клиентами максимально удобным и приятным. Нашей целью было не только улучшить онлайн-присутствие ресторана, но и создать платформу, которая бы передавала атмосферу и дух корейской культуры.`,
    },
  };

  return (
    <div className="DevelopmentPage">
      <section className="portfolio py-12 bg-black-600">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">{translations[language].title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="project-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Crypto Market place</h3>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="rounded-lg shadow-lg"
              >
                <SwiperSlide>
                  <img src={Crypto1} alt="Проект 1 - Скрин 1" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Crypto2} alt="Проект 1 - Скрин 2" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Crypto3} alt="Проект 1 - Скрин 3" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
              </Swiper>
              <p className="mt-4">{translations[language].description1}</p>
            </div>

            <div className="project-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Video sharing platform</h3>
              <img src={VideoShare} alt="Проект 2 - Скрин 1" className="w-full h-auto rounded-lg" />
              <p>{translations[language].description2}</p>
            </div>
            <div className="project-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">CRM systems</h3>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="rounded-lg shadow-lg"
              >
                <SwiperSlide>
                  <img src={CRM} alt="Проект 3 - Скрин 1" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={CRM2} alt="Проект 3 - Скрин 2" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
              </Swiper>
              <p>{translations[language].description3}</p>
            </div>
            <div className="project-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Generative AI</h3>
              <img src={ImageDetector} alt="Project 4 - screen 1" className="w-full h-auto rounded-lg" />
              <p>{translations[language].description4}</p>
            </div>
            <div className="project-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">NFT Artworks market</h3>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="rounded-lg shadow-lg"
              >
                <SwiperSlide>
                  <img src={NFT1} alt="Проект 3 - Скрин 1" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={NFT2} alt="Проект 3 - Скрин 2" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={NFT3} alt="Проект 3 - Скрин 3" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
              </Swiper>
              <p>{translations[language].description5}</p>
            </div>
            <div className="project-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Exploring DNA</h3>
              <video
                src={DNA}
                className="w-full h-auto rounded-lg shadow-lg"
                controls
                autoPlay
                loop
                muted
              />
              <p className="mt-4">{translations[language].description6}</p>
            </div>
            <div className="project-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Starbucks London</h3>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="rounded-lg shadow-lg"
              >
                <SwiperSlide>
                  <img src={Starchik} alt="Проект 6 - Скрин 1" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Starchik2} alt="Проект 6 - Скрин 2" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
              </Swiper>
              <p>{translations[language].description7}</p>
            </div>
            <div className="project-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">
              "A healthy mind in a healthy body"</h3>
              <video
                src={Foody}
                className="w-full h-auto rounded-lg shadow-lg"
                controls
                autoPlay
                loop
                muted
              />
              <p className="mt-4">{translations[language].description8}</p>
            </div>
            <div className="project-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Korean kitchen</h3>
              <img src={Fukoka} alt="Project 4 - screen 1" className="w-full h-auto rounded-lg" />
              <p>{translations[language].description9}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentPage;
