"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegUserCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: { x: "100%", opacity: 0, transition: { ease: "easeInOut" } },
};

const navItems = [
  { label: "صفحه اصلی", href: "/" },
  { label: "درباره ما", href: "/about-us" },
  { label: "همکاری با ما", href: "/collabration" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsVisible(y < lastY || y < 0);
      if (y > lastY && y > 100) setMenuOpen(false);
      setLastY(y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        bg-[#030301cc] backdrop-blur-2xl shadow-xl ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1750px] mx-auto flex justify-between items-center px-4 py-1">
          <div className="flex items-center gap-14">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden text-2xl"
                aria-label="باز کردن منو"
              >
                <FiMenu />
              </button>
              <Link href="/">
                <img
                  src="/images/landing/white-logo.f488a9170613a1bdfa4e.webp"
                  width={34}
                  height={34}
                  alt="لوگوی موسسه رایان"
                />
              </Link>

              <p>موسسه فرهنگی هنری رَیّان</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 text-[17px]">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    pathname === item.href ? "text-[var(--color-yellow)]" : ""
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex gap-6 items-center text-xl">
            <img
              src="/images/landing/Screenshot from 2025-06-08 18-19-44-Photoroom.png"
              width={22}
              height={22}
              alt=""
              className="cursor-pointer"
            />
            <Link href="/login">
              <FaRegUserCircle className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50"
            />
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs backdrop-blur-lg bg-black/10 z-50 p-3 flex flex-col"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="self-start text-2xl"
                aria-label="بستن منو"
              >
                <FiX />
              </button>

              <div className="flex justify-center items-center mt-4">
                <img
                  className="rounded-4xl"
                  src="/images/landing/full-logo.f45dfc98e5bef00eb337.webp"
                  width={100}
                  height={100}
                  alt="لوگوی کامل رایان"
                />
              </div>

              <nav className="flex flex-col mt-8 mr-3 gap-6 text-lg font-semibold">
                {navItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`transition-colors duration-200 ${
                      pathname === item.href ? "text-[var(--color-yellow)]" : ""
                    }`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
