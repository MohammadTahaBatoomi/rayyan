"use client";

import React, { useState } from "react";
import Link from "next/link"; // اگر از Next.js استفاده می‌کنی
import Landinglogin from "../alert/personalInfo";
import { IoLocationOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

interface HeroSectionProps {
  title: string;
  year: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  director: string;
  producer: string;
  writer: string;
  backgroundImageLg: string;
  backgroundImageMd: string;
  posterImage: string;
  showReserveButton: boolean;
}

function HeroSection({
  title,
  year,
  location,
  shortDescription,
  fullDescription,
  director,
  producer,
  writer,
  backgroundImageLg,
  backgroundImageMd,
  posterImage,
  showReserveButton,
}: HeroSectionProps) {
  const [showLogin, setShowLogin] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-start lg:justify-start bg-gradient-to-br from-black/90 to-zinc-90 0/90 overflow-hidden">
      {/* پس‌زمینه تار */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImageLg}
          alt="پس‌زمینه"
          className="hidden lg:block w-full h-full object-cover blur-sm opacity-50 bg-black/30"
        />
        <img
          src={backgroundImageMd}
          alt="پس‌زمینه"
          className="w-full h-auto object-cover blur-sm opacity-60 block md:hidden"
        />
      </div>

      {/* محتوای اصلی: عکس + متن + دکمه */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-start w-full px-4 lg:px-15 py-16 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* تصویر و دکمه‌ها */}
        <div className="flex flex-col items-center w-full lg:w-auto">
          <img
            src={posterImage}
            alt="پوستر"
            className="w-[310px] h-[450px] object-cover rounded-lg mb-4 lg:mb-0"
          />

          {/* دکمه‌ها زیر عکس */}
          {showReserveButton && (
            <div className="flex flex-col items-center space-y-2 w-full max-w-[310px] mt-2">
              <button
                onClick={() => setShowLogin(true)}
                className="w-full px-25 py-3 bg-[var(--color-yellow)] text-md text-black font-900 rounded-lg shadow cursor-pointer transition-all duration-500 hover:bg-[#a18c55]"
              >
                رزرو رایگان بلیت
              </button>
              <Link
                href="/archive/1404"
                className="w-full px-30.5 py-3 border border-[var(--color-yellow)] text-md text-[var(--color-yellow)] rounded-lg hover:bg-[#ddcea61f] transition-all duration-500 font-bold text-center"
              >
                مسیریابی
              </Link>
            </div>
          )}
        </div>
        {/* متن کنار عکس */}
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-right space-y-4 max-w-2xl w-full lg:w-auto mx-auto lg:mx-0 lg:mr-5 mt-5">
          <h2 className="text-3xl font-bold w-full">{title}</h2>
          <div className="flex items-center justify-center lg:justify-start text-md space-x-2 w-full">
            <FaCalendarAlt className="ml-3 text-lg" />
            <span>{year}</span>
          </div>
          <div className="flex items-center justify-center lg:justify-start text-md space-x-2 w-full">
            <IoLocationOutline className="ml-3 text-lg" />
            <span>{location}</span>
          </div>
          <p className="text-gray-200 text-md leading-relaxed mt-2 w-full">
            {showMore ? fullDescription : shortDescription}
          </p>
          <button
            className="text-[var(--color-yellow)] cursor-pointer text-md mt-2 p-1.5 rounded-lg hover:bg-[#d5b86e70] transition-all duration-500"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "- کمتر " : "+ بیشتر"}
          </button>
          <div className="text-gray-400 text-md mt-2 w-full">
            <div className="pb-3 text-center lg:text-right">
              کارگردان-
              <span className="text-white">{director}</span>
            </div>
            <div className="pb-3 text-center lg:text-right">
              تهیه کننده-
              <span className="text-white">{producer}</span>
            </div>
            <div className="pb-3 text-center lg:text-right">
              نویسنده-
              <span className="text-white">{writer}</span>
            </div>
          </div>
        </div>
      </div>
      {showLogin && <Landinglogin onClose={() => setShowLogin(false)} />}
    </section>
  );
}

export default HeroSection;
