"use client"
import React, { Fragment, useState, useEffect } from 'react'
import Header from '@/components/ui/shared-header'
import Herosection from '@/components/archive/hero-section'
import ActorsList from '@/components/archive/actorsList'
import Footer from '@/components/ui/shared-footer'
import { archiveData } from '@/data/db'
import { notFound } from 'next/navigation'
// import { FaTheaterMasks } from 'react-icons/fa' // No longer needed as iconName is a string

interface PageProps {
  params: Promise<{ slug: string }>;
}

function Page({ params }: PageProps) {
  const [loading, setLoading] = useState(true);
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;

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

  if (slug === '1404') {
    const data = archiveData['1404'];
    return (
      <Fragment>
        <Header />
        <Herosection {...data.heroSectionData} />
        {data.actors && data.actors.length > 0 && <ActorsList title="بازیگران" iconName="FaTheaterMasks" data={data.actors} />}
        {data.writers && data.writers.length > 0 && <ActorsList title="بازیگران فرم" iconName="FaTheaterMasks" data={data.writers} />}
        {data.directors && data.directors.length > 0 && <ActorsList title="عوامل" iconName="FaUserFriends" data={data.directors} />}
        <Footer />
      </Fragment>
    );
  } else if (slug === '1403') {
    const data = archiveData['1403'];
    return (
      <Fragment>
        <Header />
        <Herosection {...data.heroSectionData} />
        {data.actors && data.actors.length > 0 && <ActorsList title="بازیگران" iconName="FaTheaterMasks" data={data.actors} />}
        {data.directors && data.directors.length > 0 && <ActorsList title="عوامل" iconName="FaUserFriends" data={data.directors} />}
        <Footer />
      </Fragment>
    );
  } else if (slug === '1402') {
    const data = archiveData['1402'];
    return (
      <Fragment>
        <Header />
        <Herosection {...data.heroSectionData} />
        {data.actors && data.actors.length > 0 && <ActorsList title="سخنرانان" iconName="FaTheaterMasks" data={data.actors} />}
        {data.directors && data.directors.length > 0 && <ActorsList title="عوامل" iconName="FaUserFriends" data={data.directors} />}
        <Footer />
      </Fragment>
    );
  } else if (slug === '1401') {
    const data = archiveData['1401'];
    return (
      <Fragment>
        <Header />
        <Herosection {...data.heroSectionData} />
        {data.actors && data.actors.length > 0 && <ActorsList title="بازیگران" iconName="FaTheaterMasks" data={data.actors} />}
        {data.directors && data.directors.length > 0 && <ActorsList title="عوامل" iconName="FaUserFriends" data={data.directors} />}
        <Footer />
      </Fragment>
    );
  } else if (slug === '1400') {
    const data = archiveData['1400'];
    return (
      <Fragment>
        <Header />
        <Herosection {...data.heroSectionData} />
        {data.actors && data.actors.length > 0 && <ActorsList title="بازیگران" iconName="FaTheaterMasks" data={data.actors} />}
        {data.directors && data.directors.length > 0 && <ActorsList title="عوامل" iconName="FaUserFriends" data={data.directors} />}
        <Footer />
      </Fragment>
    );
  } else if (slug === '1397') {
    const data = archiveData['1397'];
    return (
      <Fragment>
        <Header />
        <Herosection {...data.heroSectionData} />
        {data.actors && data.actors.length > 0 && <ActorsList title="محققان" iconName="FaTheaterMasks" data={data.actors} />}
        {data.directors && data.directors.length > 0 && <ActorsList title="عوامل" iconName="FaUserFriends" data={data.directors} />}
        <Footer />
      </Fragment>
    );
  } else {
    notFound();
  }
}

export default Page