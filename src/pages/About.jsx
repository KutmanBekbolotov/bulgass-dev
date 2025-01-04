import { useContext } from "react";
import "./About.css";
import { LanguageContext } from "../language-config/LanguageContext";
import TeamMate1 from "../assets/TeamMates/TeamMate1.JPG";
import TeamMate2 from "../assets/TeamMates/TeamMate2.jpeg";
import TeamMate3 from "../assets/TeamMates/TeamMate3.jpeg";
import TeamMate4 from "../assets/TeamMates/TeamMate4.png";
import TeamMate5 from "../assets/TeamMates/TeamMate5.jpeg";
import TeamMate6 from "../assets/TeamMates/TeamMate6.png";

const translations = {
  en: {
    title: "About Us",
    whoWeAre: "Who We Are",
    mission: "Our Mission",
    meetTeam: "Meet Our Team",
    description1: `
      At Bulgass, we specialize in delivering cutting-edge software solutions that drive business success.
      Our mission is to empower organizations with innovative, efficient, and scalable digital products
      tailored to their unique needs. With years of experience in web development, e-commerce, CRM systems,
      and beyond, we are committed to excellence and customer satisfaction.
    `,
    description2: `
      Our mission is to transform ideas into reality through technology. We believe in the power of 
      collaboration, creativity, and a client-centric approach to deliver outstanding results. By leveraging 
      modern technologies and best practices, we aim to help businesses achieve sustainable growth and digital 
      transformation.
    `,
  },
  ru: {
    title: "О нас",
    whoWeAre: "Кто мы",
    mission: "Наша миссия",
    meetTeam: "Наша команда",
    description1: `
      В Bulgass мы специализируемся на предоставлении передовых программных решений, которые способствуют успеху бизнеса.
      Наша миссия — предоставлять инновационные, эффективные и масштабируемые цифровые продукты, 
      адаптированные к уникальным потребностям клиентов. Мы стремимся к совершенству и удовлетворению клиентов.
    `,
    description2: `
      Наша миссия — превращать идеи в реальность с помощью технологий. Мы верим в силу 
      сотрудничества, креативности и ориентации на клиента, чтобы достигать выдающихся результатов.
    `,
  },
};

const teamMembers = [
  {
    name: "Kutman Bekbolotov",
    roles: {
      en: "Full Stack Software Engineer",
      ru: "Full Stack инженер-программист",
    },
    descriptions: {
      en: "A highly skilled Full Stack Software Engineer with extensive experience in both frontend and backend development, delivering end-to-end solutions for complex applications.",
      ru: "Высококвалифицированный Full Stack инженер-программист с обширным опытом в разработке как фронтенд, так и бэкенд решений, предоставляющий комплексные решения для сложных приложений.",
    },
    img: TeamMate1,
  },
  {
    name: "Paul Fischer",
    roles: {
      en: "Experienced Backend Engineer",
      ru: "Опытный бэкенд инженер",
    },
    descriptions: {
      en: "A senior backend engineer with extensive expertise in building scalable, secure, and high-performance systems.",
      ru: "Старший инженер бэкенда с обширным опытом в создании масштабируемых, безопасных и высокопроизводительных систем.",
    },
    img: TeamMate2,
  },
  {
    name: "Ilyaz Zulpiev",
    roles: {
      en: "Lead Developer",
      ru: "Ведущий разработчик",
    },
    descriptions: {
      en: "A strategic Lead Developer with a strong background in full-stack development, capable of driving technical innovation and overseeing the development lifecycle.",
      ru: "Стратегический ведущий разработчик с сильным опытом в full-stack разработке, способный внедрять технические инновации и управлять жизненным циклом разработки.",
    },
    img: TeamMate3,
  },
  {
    name: "Aiza Abditair",
    roles: {
      en: "SEO & Founder",
      ru: "SEO специалист и основатель",
    },
    descriptions: {
      en: "An entrepreneurial SEO expert and founder, combining technical SEO knowledge with business acumen to create high-performing websites and successful digital marketing strategies.",
      ru: "Предприимчивый SEO специалист и основатель, объединяющий технические знания в области SEO с деловой хваткой для создания высокоэффективных сайтов и успешных стратегий цифрового маркетинга.",
    },
    img: TeamMate4,
  },
  {
    name: "Shernazar Alykulov",
    roles: {
      en: "Marketing Lead",
      ru: "Руководитель отдела маркетинга",
    },
    descriptions: {
      en: "A results-oriented Marketing Lead skilled in developing and executing innovative marketing strategies, analyzing market trends, and enhancing customer engagement.",
      ru: "Ориентированный на результат руководитель отдела маркетинга, обладающий навыками разработки и реализации инновационных маркетинговых стратегий, анализа рыночных тенденций и повышения вовлеченности клиентов.",
    },
    img: TeamMate5,
  },
  {
    name: "Nazik Alymseitova",
    roles: {
      en: "Lead Developer",
      ru: "Ведущий разработчик",
    },
    descriptions: {
      en: "A strategic Lead Developer with a strong background in full-stack development, capable of driving technical innovation and overseeing the development lifecycle.",
      ru: "Стратегический ведущий разработчик с сильным опытом в full-stack разработке, способный внедрять технические инновации и управлять жизненным циклом разработки.",
    },
    img: TeamMate6,
  },
];


const AboutUs = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const TeamMember = ({ name, img, roles, descriptions }) => (
    <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
      <img
        src={img}
        alt={`${name} photo`}
        className="w-32 h-44 mx-auto rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <h6 className="text-lg text-gray-600">{roles[language]}</h6>
      <p className="text-gray-600">{descriptions[language]}</p>
    </div>
  );

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
        <h1 className="text-4xl font-bold text-white text-center mb-8">{t.title}</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">{t.whoWeAre}</h2>
          <p className="text-white leading-relaxed">{t.description1}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">{t.mission}</h2>
          <p className="text-white leading-relaxed">{t.description2}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">{t.meetTeam}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                img={member.img}
                roles={member.roles}
                descriptions={member.descriptions}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
