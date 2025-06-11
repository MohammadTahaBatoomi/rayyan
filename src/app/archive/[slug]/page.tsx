import React, { Fragment } from 'react'
import Header from '@/components/ui/shared-header'
import Herosection from '@/components/archive/hero-section'
import ActorsList from '@/components/archive/actorsList'
import Footer from '@/components/ui/shared-footer'
import { actors , directors } from '@/data/db'

function page() {
  return (
    <Fragment>
      <Header />
      <Herosection />
      <ActorsList title="بازیگران" iconName="FaTheaterMasks" data={actors} />
      <ActorsList title="کارگردان" iconName="FaTheaterMasks" data={directors} />
      <Footer />
    </Fragment>
  )
}

export default page