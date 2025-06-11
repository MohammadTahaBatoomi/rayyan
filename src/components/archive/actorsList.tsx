'use client';
import React, { FC } from 'react'
import { FaTheaterMasks, FaUserFriends, FaPencilAlt } from 'react-icons/fa';

interface ActorItem {
  name: string;
  img: string;
}

interface ActorsListProps {
  title: string;
  iconName?: string;
  data: ActorItem[];
}

// Map icon names to actual component references
const IconMap: { [key: string]: FC<React.SVGProps<SVGSVGElement>> } = {
  FaTheaterMasks: FaTheaterMasks,
  FaUserFriends: FaUserFriends,
  FaPencilAlt: FaPencilAlt,
  // Add other icons here if needed, e.g., FaFilm: FaFilm,
};

function ActorsList({ title, iconName, data }: ActorsListProps) {
  const CurrentIcon = iconName ? IconMap[iconName] : null;

  return (
    <section className="w-full py-8 pr-4 md:pr-8 pl-4 md:pl-8 bg-[#151515]">
      <div className="flex items-center justify-start mb-6">
        {CurrentIcon && <CurrentIcon className="text-4xl text-[var(--color-yellow)]" />}
        <span className="text-xl font-bold mr-2">{title}</span>
      </div>
      <div className="overflow-x-auto scrollbar-none" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className=" flex-row-reverse gap-x-5 md:gap-x-20 min-w-max pb-4 inline-flex mx-auto">
          {data.map((item: ActorItem, idx: number) => (
            <div key={idx} className="flex flex-col items-center min-w-[120px]">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-2">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-base md:text-lg text-center mt-1">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Custom scrollbar hiding for all browsers */}
      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}

export default ActorsList