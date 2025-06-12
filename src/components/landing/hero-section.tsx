import Link from "next/link";
import Landinglogin from "../alert/personalInfo";
import { useState } from "react";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* بک‌گراند دسکتاپ */}
      <img
        src="/images/landing/poster616.webp"
        alt="Full screen background desktop"
        className="absolute inset-0 w-full h-full object-cover hidden lg:block"
      />

      {/* بک‌گراند موبایل/تبلت */}
      <img
        src="/images/landing/poster69.webp"
        alt="Full screen background mobile"
        className="absolute inset-0 w-full h-[90vh] object-cover block lg:hidden"
      />

      {/* لایه بور + تیرگی */}
     <div className="absolute bottom-0 left-0 right-0 h-[90vh] bg-gradient-to-t from-black/70 via-black/70 to-black/0" />



      {/* دکمه‌ها در پایین سمت چپ */}
      <div className="absolute bottom-45 md:bottom-15 right-5 md:right-70 z-10 flex flex-col items-start gap-3">
        <button
          onClick={() => setShowLogin(true)}
          className="md:px-24 px-12 py-3 md:py-4 bg-[var(--color-yellow)] text-md text-black font-900 rounded-lg shadow cursor-pointer transition-all duration-500 hover:bg-[#a18c55]"
        >
          رزرو رایگان بلیت
        </button>
        <Link
          href="/archive/1404"
          className="md:px-21 px-9 py-3 md:py-4 border border-[var(--color-yellow)] text-md text-[var(--color-yellow)] rounded-lg hover:bg-[#ddcea61f] transition-all duration-500 font-bold"
        >
          اطلاعات بیشتر نمایش
        </Link>
      </div>
      {showLogin && <Landinglogin onClose={() => setShowLogin(false)} />}
    </div>
  );
}
