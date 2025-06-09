"use client";

import React, { Fragment, useState, useEffect } from 'react';
import Header from '@/components/ui/shared-header';
import Herosection from '@/components/landing/hero-section';
import Pastshows from '@/components/landing/past-shows';
import Footer from '@/components/ui/shared-footer';

const Page: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#151515]">
        <img
          src="/images/landing/loading.ac091c47a714fb287b8c.png"
          alt="Loading..."
          className="w-25 mb-7 rounded-4xl"
        />
        <p className="text-lg"> موسسه فرهنگی هنری رَیّان</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Header />
      <Herosection />
      <Pastshows />
      <Footer />
    </Fragment>
  );
};

export default Page;

