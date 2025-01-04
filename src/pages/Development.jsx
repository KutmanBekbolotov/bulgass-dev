import React from "react";

const DevelopmentPage = () => {
  return (
    <div className="DevelopmentPage">
      <section className="hero bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Разработка современных решений для бизнеса</h1>
          <p className="text-lg mb-6">Создаем веб-сайты, e-commerce и CRM для ваших нужд.</p>
          <div className="flex justify-center gap-4">
            <button className="btn-primary">Связаться с нами</button>
            <button className="btn-secondary">Посмотреть портфолио</button>
          </div>
        </div>
      </section>
      <section className="services py-12 bg-black-600">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Веб-разработка</h3>
              <p>Создаем быстрые, адаптивные сайты с использованием передовых технологий, таких как React и Tailwind CSS.</p>
            </div>
            <div className="service-card p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">E-commerce</h3>
              <p>Онлайн-магазины с интеграцией платежных систем, удобным управлением и высокой производительностью.</p>
            </div>
            <div className="service-card p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">CRM-системы</h3>
              <p>Автоматизация бизнес-процессов и кастомизированные решения для повышения эффективности.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="process py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Как мы работаем</h2>
          <ul className="timeline space-y-8">
            <li className="flex items-center gap-4">
              <div className="step-number">1</div>
              <p>Идея и обсуждение: Анализ требований и мозговые штурмы.</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="step-number">2</div>
              <p>Прототипирование: Создание дизайна и интерактивных прототипов.</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="step-number">3</div>
              <p>Разработка: Кодинг, интеграция и тестирование.</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="step-number">4</div>
              <p>Релиз и поддержка: Обеспечение стабильности и обновления.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="portfolio py-12 bg-black-600">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Наши проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="project-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Проект 1</h3>
              <p>Описание проекта, его цели и результаты.</p>
            </div>
            <div className="project-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Проект 2</h3>
              <p>Описание проекта, его цели и результаты.</p>
            </div>
            <div className="project-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Проект 3</h3>
              <p>Описание проекта, его цели и результаты.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta bg-indigo-600 text-white py-12 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Готовы начать проект?</h2>
          <p className="text-lg mb-6">Свяжитесь с нами, и мы поможем вам воплотить ваши идеи в жизнь.</p>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentPage;
