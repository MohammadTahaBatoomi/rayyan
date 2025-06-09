import React from "react";

import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCube } from "react-icons/fa";

const socialLinks = [
  {
    label: "اینستاگرام",
    username: "   RayyanInfo@",
    icon: <FaInstagram />,
    gradient: true,
    gradientClass: "from-[#8134af] via-[#dd2a7b] to-[#f58529]", // گرادینت اینستاگرام نارنجی، صورتی و بنفش
    href: "https://instagram.com/rayyaninfo_",
  },
  {
    label: "تلگرام",
    username: "   RayyanInfo@",
    icon: <FaTelegram />,
    gradient: true,
    gradientClass: "from-white to-[#298fc8]",
    href: "https://telegram.me/rayyaninfo",
  },
  {
    label: "بله",
    username: "   RayyanInfo@",
    icon: <FaCircleCheck />,
    gradient: true,
    gradientClass: "from-[#88bda9] to-[#323d62]",
    href: "https://bale.ir/rayyaninfo",
  },
  {
    label: "روبیکا",
    username: "   RayyanInfo@",
    icon: <FaCube />,
    gradient: true,
    gradientClass: "from-[#3d83cb] via-[#dd2a7b] to-[#a4cb2c]",
    href: "https://rubika.ir/rayyaninfo",
  },
];

export default function SocialLinks() {
  return (
    <div className="bg-[#141414] min-h-[80vh] flex flex-col items-center justify-center">
      <div className="max-w-4xl text-right space-y-4 mt-17 mb-6 md:mb-16 p-10 md:p-0">
        <p className="text-[16px] md:text-[18px] leading-loose text-white">
          موسسه فرهنگی هنری رَیّان -متشکل از جوانان علاقه مند به حوزه هنرهای
          نمایشی- در سال ۱۳۹۷ تاسیس و هسته اصلی آن از اعضای
          <br />
          هیئت احباب الرضا علیه السلام تهران تشکیل شده است.
          <br />
          رسالت این موسسه تبیین و تبلیغ معارف اهل بیت و اسلام انقلابی، در قالب
          تئاتر می‌باشد. همچنین رَیّان یک تشکل مستقل است و به
          <br />
          هیچ نهادی وابسته نیست.
          <br />
          این موسسه بر آن است تا در طی سال نمایش‌هایی را تقدیم حضور دوستداران
          هنر و فرهنگ و مذهب ایران زمین نماید.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] md:max-w-4xl mb-10">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold rounded-xl block"
          >
            {item.gradient ? (
              <div
                className={`p-[5px] rounded-xl bg-gradient-to-r ${item.gradientClass}`}
              >
                <div
                  className={`flex items-center justify-center gap-3 font-bold text-2xl px-8 py-8 bg-[#141414] rounded-xl border-2 border-transparent`}
                >
                  {item.icon}
                  <span>
                    {item.label}:<span className="mx-2">{item.username}</span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between px-8 py-8 rounded-xl border-2">
                {item.icon}
                <span>
                  {item.label}:<span className="mx-2">{item.username}</span>
                </span>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
