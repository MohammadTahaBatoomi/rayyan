"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Landinglogin({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 backdrop-blur-sm flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-black/70 backdrop-blur-sm rounded-xl shadow-xl p-8 w-full max-w-md relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* فرم لاگین */}
          <button
            onClick={onClose}
            className="absolute top-8 right-6 text-xl font-bold cursor-pointer"
          >
            ✕
          </button>
          <h2 className="text-center text-2xl font-bold mb-6 text-white">
            رزرو بلیت
          </h2>
          <select
            defaultValue=""
            className="w-full mb-6 bg-transparent border border-[#4b4b4b] appearance-none rounded-lg hover:border-white px-4 py-4 text-right text-[#9da4ab] placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300"
          >
            <option value="" disabled hidden>
              سانس ها
            </option>
            <option value="۱">۱</option>
            <option value="۲">۲</option>
            <option value="۳">۳</option>
            <option value="۴">۴</option>
            <option value="۵">۵</option>
            <option value="۶">۶</option>
            <option value="۷">۷</option>
            <option value="۸">۸</option>
            <option value="۹">۹</option>
            <option value="۱۰">۱۰</option>
            <option value="۱۱">۱۱</option>
            <option value="۱۲">۱۲</option>
            <option value="۱۳">۱۳</option>
            <option value="۱۴">۱۴</option>
            <option value="۱۵">۱۵</option>
          </select>
          <input
            type="number"
            placeholder="تعداد"
            className="w-full bg-transparent border border-[#4b4b4b] rounded-lg hover:border-white px-4 py-4 text-right text-white placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300"
          />
          <p className="py-6 pr-1.5">برای رزرو گروهی (بالای ۱۵ نفر)<br />با پشتیبانی "<span className="text-[var(--color-yellow)] font-bold cursor-pointer">50 49 094 0990</span>" تماس بگیرید!</p>
          <button className="w-full bg-[var(--color-yellow)] hover:bg-[#a18c55] text-black font-bold py-4 rounded-md transition-colors duration-200">
              تاییید / ثابت
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
