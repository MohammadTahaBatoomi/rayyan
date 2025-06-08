import Link from "next/link";
import React from "react";

import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function LandingFooter() {
  return (
    <footer className="px-4 mt-15">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:gap-8 gap-4 mt-10">
        {/* درباره ما */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-0 md:mb-2 text-center md:text-right">
            درباره ما
          </h3>
          <p className="text-[16px] mb-4 px-5 md:px-0 text-center md:text-right text-[#bbb6b6]">
            ریان، پلتفرمی برای نمایش‌های آنلاین و فروش بلیت تئاتر با تمرکز بر
            تجربه کاربری و پشتیبانی دائمی.
          </p>
          <div className="flex gap-2 justify-center md:justify-start ">
            <Link href="https://instagram.com/rayyaninfo_" aria-label="اینستاگرام" >
              <FaInstagram className="text-xl cursor-pointer" />
            </Link>
            <Link href="https://telegram.me/rayyaninfo" aria-label="تلگرام" >
              <FaTelegram className="text-xl cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* عکس و لینک‌های مفید در کنار هم در موبایل */}
        <div className="flex flex-row justify-between items-start gap-4  flex-1 mt-8 md:mt-0">
          {/* لینک‌های مفید */}
          <div className="flex-1 text-right md:pr-0 pr-5">
            <h3 className="text-lg font-bold mb-2 text-right">لینک‌های مفید</h3>
            <ul className="space-y-2 text-right">
              <li>
                <a
                  href="#"
                  className="text-[#bbb6b6] hover:text-[var(--color-yellow)] transition-all duration-300"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#bbb6b6] hover:text-[var(--color-yellow)] transition-all duration-300"
                >
                  تماس با ما
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#bbb6b6] hover:text-[var(--color-yellow)] transition-all duration-300"
                >
                  سوالات متداول
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#bbb6b6] hover:text-[var(--color-yellow)] transition-all duration-300"
                >
                  قوانین و مقررات
                </a>
              </li>
            </ul>
          </div>

          {/* تصویر */}
          <div className="flex justify-center items-center">
            <Link href="/">
              <img
                src="/images/landing/b0ba83bc-825e-45b6-906c-b5fb70d7af3d.webp"
                width={180}
                height={180}
                alt="لوگو"
                className="mx-auto"
              />
            </Link>
          </div>
        </div>

        {/* عضویت در خبرنامه */}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 text-center md:text-right">
            عضویت در خبرنامه
          </h3>
          <p className="text-sm mb-4 text-center md:text-right text-[#bbb6b6]">
            شماره موبایلتان را وارد کنید تا از جدیدترین نمایش‌ها با خبر شوید.
          </p>
          <form className="flex flex-row-reverse gap-2 mb-5 md:mb-0 md:px-0 px-10">
            <input
              type="text"
              placeholder="شماره موبایل"
              className="rounded px-4 border border-[#525252] py-3 w-full text-right focus:outline-none transition-all duration-1000"
            />
            <button
              type="submit"
              className="bg-[var(--color-yellow)]  font-bold text-[#252525] px-6 py-2 rounded cursor-pointer"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-[#525252] mt-8 pt-4 pb-4 text-center text-[13px] text-[#bbb6b6]">
        کلیه حقوق مادی و معنوی اپلیکیشن «رَیّان» متعلق به موسسه فرهنگی هنری
        «رَیّان» است.
      </div>
    </footer>
  );
}
