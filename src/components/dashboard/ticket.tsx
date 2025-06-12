"use client";
import React, { useState } from 'react'
import Landinglogin from "../alert/";


function Ticket() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <div className="h-[80vh] md:h-[97vh] md:mt-0 mt-17 bg-[var(--color-black)] shadow-sm rounded-xl mr-0 md:mr-4 p-7">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">بلیت های من</h2>

        <button
          onClick={() => setShowLogin(true)}
          className="rounded-full w-8 h-8 flex items-center justify-center text-3xl cursor-pointer"
        >
          +
        </button>
      </div>
      <div className="rounded-lg overflow-hidden h-[60vh] flex flex-col">
        <table className="w-full text-right rtl">
          <thead>
            <tr className="border-b bg-[#252525]">
              <th className="py-3 px-2.5">شناسه</th>
              <th className="py-3 px-2.5">نمایش</th>
              <th className="py-3 px-2.5">کد رزرو</th>
              <th className="py-3 px-2.5">سانس</th>
              <th className="py-3 px-2.5">تعداد نفرات</th>
            </tr>
          </thead>
        </table>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-gray-300 text-md mt-[200px]">هیچ اطلاعات وجود ندارد !</span>
        </div>
      </div>
    </div>
    <div className="md:hidden">
        <br />
        <br />
        <br />
        <br />
      </div>
      {showLogin && <Landinglogin onClose={() => setShowLogin(false)} />}

    </>
  )
}

export default Ticket