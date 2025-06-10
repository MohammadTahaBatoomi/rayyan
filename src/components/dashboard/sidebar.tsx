import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoPersonCircle } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { BsTicketPerforated } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Landinglogin from "../alert/loguot";


const desktopVariants = {
  hidden: { x: 300, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { x: 300, opacity: 0, transition: { duration: 0.3 } },
};

const mobileVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: 100, opacity: 0, transition: { duration: 0.3 } },
};

function Sidebar() {
  const pathname = usePathname();
  const [showLogin, setShowLogin] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth <= 768);
    }
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isTicketsActive = pathname?.startsWith("/dashboard/ticket");
  const isAccountActive = pathname?.startsWith("/dashboard/profile");
  const isHomeActive = pathname === "/";

  return (
    <>
      <AnimatePresence mode="wait">
        {!isMobile ? (
          <motion.div
            key="desktopSidebar"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={desktopVariants}
            className="w-68 h-[97vh] bg-[var(--color-black)] shadow-sm rounded-xl"
          >
            <div className="flex justify-center items-center pt-1">
              <IoPersonCircle className="w-20 h-20 text-[#757575]" />
            </div>
            <p className="text-center text-[17px] mt-3 font-bold">
              خوش آمدید <span>mohammad taha batoomi</span>
            </p>
            <ul className="mt-10 px-2">
              <Link href="/dashboard/ticket">
                <li
                  className={`flex items-center justify-start gap-6 text-[18px] font-bold mb-2 cursor-pointer p-3 rounded-lg ${
                    isTicketsActive
                      ? "text-[var(--color-yellow)] bg-[#f4efdc]"
                      : ""
                  }`}
                >
                  <BsTicketPerforated className="text-[26px]" />
                  بلیت های من
                </li>
              </Link>
              <Link href="/dashboard/profile">
                <li
                  className={`flex items-center justify-start gap-6 text-[18px] font-bold mb-2 cursor-pointer p-3 rounded-lg ${
                    isAccountActive
                      ? "text-[var(--color-yellow)] bg-[#f4efdc]"
                      : ""
                  }`}
                >
                  <FaRegUser className="text-[24px]" />
                  حساب کاربری
                </li>
              </Link>
              <Link href="/">
                <li className="flex items-center justify-start gap-6 text-[18px] font-bold mb-2 cursor-pointer p-3 rounded-lg">
                  <AiOutlineHome className="text-[26px]" />
                  صفحه اصلی
                </li>
              </Link>
              <li className="flex items-center justify-start gap-6 text-[18px] font-bold mb-2 cursor-pointer p-3 rounded-lg" onClick={() => setShowLogin(true)}>
                <IoIosLogOut className="text-[26px]" />
                خروج
              </li>
            </ul>
          </motion.div>
        ) : (
          <>
            <motion.div
              key="mobileProfile"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="fixed top-4 left-3 right-3 bg-[var(--color-black)] rounded-xl py-2 px-4 z-50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <IoPersonCircle className="w-8 h-8 text-[#757575]" />
                  <span className="text-[13px] font-bold text-white"><span>mohammad taha batoomi</span> خوش آمدید</span>
                </div>
                <Link href="/" className="flex items-center">
                  <AiOutlineHome className="text-xl text-[#757575]" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              key="mobileSidebar"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileVariants}
              className="fixed bottom-4 left-3 right-3 bg-[var(--color-black)] rounded-xl flex justify-around items-center h-14 z-50"
            >
              <Link
                href="/dashboard/ticket"
                className="flex flex-col items-center justify-center text-[14px]"
              >
                <BsTicketPerforated
                  className={`text-2xl mb-1 ${
                    isTicketsActive
                      ? "text-[var(--color-yellow)]"
                      : "text-[#757575]"
                  }`}
                />
                <span
                  className={
                    isTicketsActive
                      ? "text-[var(--color-yellow)]"
                      : "text-[#757575]"
                  }
                >
                </span>
              </Link>
              <Link
                href="/dashboard/profile"
                className="flex flex-col items-center justify-center text-[14px]"
              >
                <FaRegUser
                  className={`text-2xl mb-1 ${
                    isAccountActive
                      ? "text-[var(--color-yellow)]"
                      : "text-[#757575]"
                  }`}
                />
                <span
                  className={
                    isAccountActive
                      ? "text-[var(--color-yellow)]"
                      : "text-[#757575]"
                  }
                >
                </span>
              </Link>
              <button
                className="flex flex-col items-center justify-center text-[#757575] text-[14px]"
                onClick={() => setShowLogin(true)}
              >
                <IoIosLogOut className="text-2xl mb-1" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {showLogin && <Landinglogin onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Sidebar;
