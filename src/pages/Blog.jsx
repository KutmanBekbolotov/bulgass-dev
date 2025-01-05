import { useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../language-config/LanguageContext";
import blog1 from "../assets/Blogs/blog1.jpeg";
import blog2 from "../assets/Blogs/blog2.jpeg";
import blog3 from "../assets/Blogs/blog3.jpeg";

const Blog = () => {
  const { language } = useContext(LanguageContext);

  const posts = {
    en: [
      {
        title: "Virus for 27 Million",
        description: "Programmer infected Moscow company's network with ransomware.",
        fullText: "In the near future, a Moscow court will consider a criminal case against a hacker-extortionist accused of attempting to extort 27 million rubles from the management of an internet service for unblocking client databases.",
        image: blog1,
        link: "/post/1",
      },
      {
        title: "Linux Father is Aging",
        description: "55th Birthday.",
        fullText: "🔅Today, December 28, Linus Benedict Torvalds celebrates his birthday. He turned 55 years old.",
        image: blog2,
        link: "/post/1",
      },
      {
        title: "🥇 Top 6 Difficult JavaScript Questions (By YeaHub)",
        description: "The most challenging concepts in JavaScript.",
        fullText: "1. Explain the concept of prototype inheritance in JavaScript. It's difficult for beginners because prototype inheritance differs from classical inheritance and requires understanding of prototype work and prototype chains.",
        image: blog3,
        link: "/post/1",
      },
    ],
    ru: [
      {
        title: "Вирус на 27 лям",
        description: "Программист заразил шифровальщиком сеть Московской компании.",
        fullText: "В ближайшее время суд в Москве рассмотрит уголовное дело в отношении хакера-вымогателя, обвиняемого в попытке вымогательства 27 млн руб. у руководства одного из интернет-сервисов за разблокировку клиентских баз.",
        image: blog1,
        link: "/post/1",
      },
      {
        title: "Отец Linux стареет",
        description: "55 день рождения.",
        fullText: "🔅Сегодня, 28 декабря, отмечает день рождения Линус Бенедикт Торвальдс. Ему исполнилось 55 лет.",
        image: blog2,
        link: "/post/1",
      },
      {
        title: "🥇 Топ 6 сложных вопросов в JavaScript (По версии YeaHub)",
        description: "Самые сложные концепции в JavaScript.",
        fullText: "1. Объясните концепцию прототипного наследования в JavaScript. Для новичков это сложно, так как прототипное наследование отличается от классического, и требует понимания работы с prototype и цепочки прототипов.",
        image: blog3,
        link: "/post/1",
      },
    ]
  };

  const translations = {
    blogTitle: {
      en: "Our Blog",
      ru: "Наш Блог"
    },
    popularArticles: {
      en: "Popular Articles",
      ru: "Популярные Статьи"
    },
    readMore: {
      en: "Read more",
      ru: "Читать далее"
    },
    readLess: {
      en: "Read less",
      ru: "Свернуть"
    }
  };

  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  return (
    <div className="relative bg-black-600 py-12 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          {translations.blogTitle[language]}
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            {translations.popularArticles[language]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts[language].map((post, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-49 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <button
                    onClick={() => togglePost(index)}
                    className="text-blue-500 hover:underline"
                  >
                    {expandedPost === index ? translations.readLess[language] : translations.readMore[language]}
                  </button>
                  {expandedPost === index && (
                    <div className="text-gray-600 mt-4">
                      <p>{post.fullText}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
