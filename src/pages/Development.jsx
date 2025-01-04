import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Crypto1 from "../assets/Projects/Crypto1.png";
import Crypto2 from "../assets/Projects/Crypto2.png";
import Crypto3 from "../assets/Projects/Crypto3.png";
import VideoShare from "../assets/Projects/VideoShare.png";
import CRM from "../assets/Projects/CRM.png";
import CRM2 from "../assets/Projects/CRM2.png";

const DevelopmentPage = () => {
  return (
    <div className="DevelopmentPage">
      <section className="portfolio py-12 bg-black-600">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
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
              <p className="mt-4">Fullstack-Crypto-Marketplace.
              Live Data Fetching: Get real-time updates with free and fixed limits
              Theme Options: Toggle between Dark and Light themes
              Trending Coins & NFTs: Stay up-to-date with the hottest assets 
              Top Coins Overview: See key coins with a sparkline chart
              BTC Holder Companies: Discover companies holding Bitcoin
              </p>
            </div>

            <div className="project-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Video sharing platform</h3>
              <img src={VideoShare} alt="Проект 2 - Скрин 1" className="w-full h-auto rounded-lg" />
              <p>An in-depth walkthrough of the key components of a video sharing platform UI.
                 Tips and tricks for creating a seamless user experience, from navigation to content discovery.
                 Design principles and best practices to make your platform stand out in a crowded digital landscape.
                 Insightful commentary on the latest trends and innovations shaping the future of UI design in the realm of web coding..</p>
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
              <p>CRM systems for anoher kinds of business
                High perfomance, user friendly and with nice UX/UI design
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentPage;
