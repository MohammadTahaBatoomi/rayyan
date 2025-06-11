"use client";

import React, { useState } from "react";
import Link from "next/link"; // اگر از Next.js استفاده می‌کنی
import Landinglogin from "../alert/personalInfo";
import { IoLocationOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

function HeroSection() {
  const [showLogin, setShowLogin] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-end bg-gradient-to-br from-black/90 to-zinc-90 0/90 overflow-hidden">
      {/* پس‌زمینه تار */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/archive/1404/poster616.webp"
          alt="پس‌زمینه"
          className="hidden lg:block w-full h-full object-cover blur-sm opacity-50 bg-black/30"
        />
        <img
          src="/images/archive/1404/poster63.041db728fac54bf488d1.webp"
          alt="پس‌زمینه"
          className="w-full h-auto object-cover blur-sm opacity-60 block md:hidden"
        />
      </div>

      {/* محتوای اصلی: عکس + متن + دکمه */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-start w-full px-0 py-16 pr-15 space-y-4 lg:space-y-0 lg:space-x-8 lg:space-x-reverse">
        {/* تصویر و دکمه‌ها */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src="/images/archive/1404/poster63.041db728fac54bf488d1.webp"
            alt="پوستر"
            className="w-[310px] h-[450px] object-cover rounded-lg mb-4 lg:mb-0"
          />

          {/* دکمه‌ها زیر عکس */}
          <div className="flex flex-col items-stretch space-y-2 w-full mt-2">
            <button
              onClick={() => setShowLogin(true)}
              className="px-25 py-3 bg-[var(--color-yellow)] text-md text-black font-900 rounded-lg shadow cursor-pointer transition-all duration-500 hover:bg-[#a18c55] w-full"
            >
              رزرو رایگان بلیت
            </button>
            <Link
              href="/archive/1404"
              className="px-30.5 py-3 border border-[var(--color-yellow)] text-md text-[var(--color-yellow)] rounded-lg hover:bg-[#ddcea61f] transition-all duration-500 font-bold w-full text-center"
            >
              مسیریابی
            </Link>
          </div>
        </div>
        {/* متن کنار عکس */}
        <div className="flex flex-col items-start justify-center text-right space-y-2 max-w-2xl mr-0 md:mr-5 mt-5">
          <h2 className="text-3xl font-bold">تیر آخر</h2>
          <div className="flex items-center text-md space-x-2">
            <FaCalendarAlt className="ml-3 text-lg" />
            <span>۱۴۰۴</span>
          </div>
          <div className="flex items-center text-md space-x-2">
            <IoLocationOutline className="ml-3 text-lg" />
            <span>مجموعه فرهنگی سرچشمه</span>
          </div>
          <p className="text-gray-200 text-md leading-relaxed mt-2">
            {showMore
              ? "سه سرباز در بحبوحه جنگی در سال های آتی از میدان نبرد فرار می کنند. داستان در کاروانسرایی عجیب همراه با کشمکشی پرتنش میان سکوت، فریاد، زندگی، عشق و مبارزه روایت می شود."
              : "سه سرباز در جبهه جنگی در سال های آتی از میدان نبرد فرار می کنند. داستان در کاروانسرایی عجیب همراه با..."}
          </p>
          <button
            className="text-[var(--color-yellow)] cursor-pointer text-md mt-2 p-1.5 rounded-lg hover:bg-[#d5b86e70] transition-all duration-500"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "- کمتر " : "+ بیشتر"}
          </button>
          <div className="text-gray-400 text-md mt-2">
            <div className="pb-3">
              کارگردان-
              <span className="text-white">محمد امین دست کار</span>
            </div>
            <div className="pb-3">
              تهیه کننده-
              <span className="text-white">دانیال محسنی</span>
            </div>
            <div className="pb-3">
              نویسنده-
              <span className="text-white">محمدسجاد بیگی</span>
            </div>
          </div>
        </div>
      </div>
      {showLogin && <Landinglogin onClose={() => setShowLogin(false)} />}
    </section>
  );
}

export default HeroSection;
