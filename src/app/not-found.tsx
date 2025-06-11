"use client";

import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#151515] text-white p-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-8">
        {/* Text Content */}
        <div className="text-center md:text-right space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-2">۴۰۴</h1>
          <p className="text-xl md:text-2xl text-white mb-4">
            صفحه مورد نظر یافت نشد :(
          </p>
          <p className="text-md md:text-lg text-gray-400">
            می‌توانید برگردید صفحه قبل یا از صفحه خانه شروع کنید.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 mt-6 bg-[var(--color-yellow)] text-black font-semibold rounded-lg shadow-md hover:bg-[#a18c55] transition-colors duration-300"
          >
            <img src="/images/home-icon.svg" alt="خانه" className="w-5 h-5 ml-2" />
            خانه
          </Link>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 mt-8 md:mt-0">
          <img
            src="/images/404.webp" // Assuming the 404 image will be here
            alt="صفحه یافت نشد"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
} 