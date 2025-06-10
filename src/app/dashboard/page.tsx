'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      router.push("/dashboard/ticket");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#151515] text-white">
      <img
        src="/images/landing/loading.ac091c47a714fb287b8c.png"
        alt="Loading..."
        className="w-25 mb-7 rounded-4xl"
      />
      <p className="text-lg"> موسسه فرهنگی هنری رَیّان</p>
    </div>
  );
};

export default Page;
