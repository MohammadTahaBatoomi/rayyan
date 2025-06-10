'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LogoutModal({ onClose, onLogout }: { onClose: () => void, onLogout: () => void }) {
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
          <h2 className="text-center text-2xl font-bold mb-6 text-white">خروج</h2>
          <p>آیا از خروچ اطمینان دارید؟</p>
          <div className="flex gap-4 mt-4">
            <button
              className="w-1/2 bg-[#f44236] hover:bg-[#f44236 font-bold py-2 rounded-md transition-colors duration-200 cursor-pointer"
              onClick={onLogout}
            >
              تاییید / خروج
            </button>
            <button
              className="w-1/2 border border-[var(--color-yellow)] text-white font-bold py-2 rounded-md transition-colors duration-200 cursor-pointer"
              onClick={onClose}
            >
              لغو
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
