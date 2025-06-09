import React from "react";

const Collabration = () => {
  return (
    <div className="bg-[#141414] min-h-[100vh] ">
    <div className="max-w-4xl mx-auto text-right space-y-4 mb-6 md:mb-16 p-4 md:p-10 ">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-20">
        <input type="text" placeholder="نام *" className="bg-transparent border border-[#4b4b4b] rounded-lg hover:border-white px-4 py-4 text-right text-white placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300" />
        <input type="text" placeholder="نام خانوادگی *" className="bg-transparent border border-[#4b4b4b] rounded-lg hover:border-white px-4 py-4 text-right text-white placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300" />
        <select defaultValue="" className="bg-transparent appearance-none border border-[#4b4b4b] rounded-lg hover:border-white px-4 py-4 text-right text-[#9da4ab] placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300">
          <option value="" disabled hidden>جنسیت *</option>
          <option value="male">مرد</option>
          <option value="female">زن</option>
        </select>
        <input type="text" placeholder="شغل *" className="bg-transparent border border-[#4b4b4b] rounded-lg hover:border-white px-4 py-4 text-right text-white placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300" />
        <input type="text" placeholder="سن *" className="bg-transparent border border-[#4b4b4b] rounded-lg hover:border-white px-4 py-4 text-right text-[#9da4ab] placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300" />
        <select defaultValue="" className="bg-transparent border border-[#4b4b4b] appearance-none rounded-lg hover:border-white px-4 py-4 text-right text-[#9da4ab] placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300">
          <option value="" disabled hidden>زمینه همکاری (مهارت) *</option>
          <option value="design">طراحی</option>
          <option value="dev">برنامه‌نویسی</option>
          <option value="other">سایر</option>
        </select>
        <input type="text" placeholder="شهر محل سکونت *" className="bg-transparent border border-[#4b4b4b] rounded-lg hover:border-white px-4 py-4 text-right text-white placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300" />
        <input type="text" placeholder="شماره تلفن *" className="bg-transparent border border-[#4b4b4b] rounded-lg hover:border-white px-4 py-4 text-right text-white placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300" />
        <div className="md:col-span-2">     
          <textarea placeholder="توضیحات..." rows={4} className="w-full resize-none bg-transparent border border-[#4b4b4b] rounded-lg hover:border-white px-4 py-4 text-right text-white placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300" />
        </div>
        <div className="md:col-span-2 flex justify-center">
          <button type="submit" className="w-full bg-[var(--color-yellow)] hover:bg-[#a18c55] text-black font-bold   py-4 rounded-md transition-colors duration-200">ارسال</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Collabration;
