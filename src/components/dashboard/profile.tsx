import React from "react";
import { IoPersonCircle } from "react-icons/io5";

function Profile() {
  return (
    <>
      <div className="h-[80vh] md:h-[97vh] md:mt-0 mt-17 bg-[var(--color-black)] shadow-sm rounded-xl mr-0 md:mr-4 flex items-center justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center px-4">
          <div className="flex flex-col items-center mb-8 w-full">
            <div className="rounded-full flex items-center justify-center mb-3">
              <IoPersonCircle className="w-32 h-32 text-[#757575]" />
            </div>
            <form className="flex flex-col items-center w-full">
              <div className="flex flex-col md:flex-row gap-6 mb-6 w-full">
                <input
                  type="text"
                  placeholder="نام"
                  className="w-full py-4 bg-transparent border border-[#4b4b4b] rounded-lg hover:border-white px-6  text-right text-white placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300"
                  dir="rtl"
                />
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  className="w-full py-4 bg-transparent border border-[#4b4b4b] rounded-lg hover:border-white px-6  text-right text-white placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300"
                  dir="rtl"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[var(--color-yellow)] hover:bg-[#a18c55] text-black font-bold  rounded-md transition-colors duration-200 text-lg"
              >
                ویرایش اطلاعات
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
export default Profile;
