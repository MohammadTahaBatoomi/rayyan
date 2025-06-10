'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          <h2 className="text-center text-2xl font-bold mb-6 text-white">ورود</h2>
          <input
            type="text"
            placeholder="شماره موبایل"
            className="w-full mb-6 bg-transparent border border-[#4b4b4b] rounded-lg hover:border-white px-4 py-4 text-right text-white placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300"
          />
          <button className="w-full bg-[var(--color-yellow)] hover:bg-[#a18c55] text-black font-bold py-4 rounded-md transition-colors duration-200">
            ارسال کد تاییید
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
