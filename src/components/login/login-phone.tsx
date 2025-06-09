import React from 'react'

function LoginPhone() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161616]">
      <div
        className="bg-[var(--color-black)] rounded-lg shadow-lg pb-16 pt-8 px-9 w-full max-w-[560px] flex flex-col items-center"
        dir="rtl"
      >
        {/* لوگو */}
        <img src="/images/landing/b0ba83bc-825e-45b6-906c-b5fb70d7af3d.webp" alt="logo" className="w-26 h-26 mb-6" />
        {/* عنوان */}
        <h2 className="text-2xl font-bold mb-2 text-right w-full">ورود | ثبت‌نام</h2>
        {/* خوش‌آمدگویی */}
        <p className="text-sm mb-2 text-right w-full">سلام!</p>
        {/* توضیح */}
        <p className="text-sm mb-6 text-right w-full">لطفا شماره موبایل خود را وارد کنید.</p>
        {/* ورودی شماره تلفن */}
        <input
          type="text"
          placeholder="شماره تلفن *"
          className="bg-transparent mb-6 w-full appearance-none border border-[#4b4b4b] rounded-lg hover:border-white px-4 py-4 text-right text-[#9da4ab] placeholder-[#9da4ab] focus:outline-none focus:border-[var(--color-yellow)] transition-all duration-300"
        />
        {/* دکمه ارسال */}
        <button
          className="w-full bg-[var(--color-yellow)] hover:bg-[#a18c55] text-[#191919] font-bold py-4 rounded transition-colors duration-200"
        >
          ارسال کد تایید
        </button>
      </div>
    </div>
  )
}

export default LoginPhone
