import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {

  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { archiveData } from "@/data/db";
import Link from "next/link";

function PastShows() {
  return (
    <section>
    <div
      className="w-full h-auto md:h-[50vh] mx-auto p-4 relative md:-mt-0 -mt-25"
      style={{
        backgroundImage: 'url("/images/landing/bg-cinema.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0" />
      <div className="relative z-10 mx-0 md:mx-10">
        <h2 className="text-2xl font-bold text-center my-8">آرشیوها</h2>
        <Swiper
          modules={[Scrollbar, A11y, Mousewheel]}
          spaceBetween={15}
          slidesPerView={2.6}
          loop={false}
          navigation={false}
          pagination={false}
          scrollbar={{ draggable: true }}
          mousewheel={true}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 15,
            },

            1024: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
          }}
        >
          {Object.keys(archiveData)
            .filter(slug => {
              const year = Number(archiveData[slug].heroSectionData.year);
              return year >= 1397 && year <= 1403 && year !== 1404;
            })
            .sort((a, b) => Number(archiveData[b].heroSectionData.year) - Number(archiveData[a].heroSectionData.year))
            .map((slug) => {
              const item = archiveData[slug];
              return (
                <SwiperSlide key={slug}>
                  <Link href={`/archive/${slug}`} passHref>
                    <div className="flex flex-col md:flex-row-reverse bg-white/7 backdrop-blur-2xl rounded-xl shadow-lg overflow-hidden border border-[#2A2A2A] h-auto md:h-full">
                      {/* متن در سمت چپ */}
                      <div className="w-full md:w-2/3 pb-4 pt-0 md:py-4 px-6 flex flex-col justify-between">
                      <div className="w-full md:hidden md:w-1/3 p-4 flex justify-center">
                        <img
                          src={item.heroSectionData.posterImage}
                          alt={item.heroSectionData.title}
                          className="w-35 h-50 object-cover rounded-xl"
                        />
                      </div>
                        <div>
                          <h3 className="text-md md:text-xl font-bold mb-4 md:mb-16 text-right">
                            {item.heroSectionData.title} -{" "}  
                            {item.heroSectionData.year}
                          </h3>
                          <p className="text-gray-300 text-sm md:text-md font-bold leading-relaxed text-right mb-4">
                            {item.heroSectionData.shortDescription}
                          </p>
                        </div>
                        <span className="text-[var(--color-yellow)] text-sm text-left">
                          مشاهده
                        </span>
                      </div>
                      {/* عکس در سمت راست */}
                      <div className="w-full hidden md:block md:w-1/3 p-4">
                        <img
                          src={item.heroSectionData.posterImage}
                          alt={item.heroSectionData.title}
                          className="w-45 h-60 object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
    <style jsx>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
        :global(.swiper-scrollbar) {
          display: none !important;
        }
      `}</style>
    </section>
  );
}

export default PastShows;
 