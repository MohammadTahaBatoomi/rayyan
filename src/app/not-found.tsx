"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#151515] p-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-8">
        {/* Text Content */}
        <div className="flex-shrink-0 mt-8 md:mt-0">
          <img
            src="/images/landing/not-found.a10af18a790de180ffe6.webp" // Assuming the 404 image will be here
            alt="صفحه یافت نشد"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
        <div className="text-center md:text-right space-y-4">
          <h1 className="text-6xl font-bold mb-2">خطای ۴۰۴</h1>
          <p className="text-xl md:text-3xl mb-4">
            صفحه مورد نظر یافت نشد :(
          </p>
          <p className="text-md md:text-lg ">
            می‌توانید برگردید صفحه قبل یا از صفحه خانه شروع کنید.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-between gap-2 px-40 md:px-6 py-3 mt-6 bg-[var(--color-yellow)] text-black font-semibold rounded-lg shadow-md hover:bg-[#a18c55] transition-colors duration-300"
          >
            خانه
            <AiOutlineHome />
          </Link>
        </div>

        {/* Image */}
      </div>
    </div>
  );
} 