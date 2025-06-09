import React, { Fragment } from 'react'
import Header from '@/components/ui/shared-header'
import Herosection from '@/components/archive/hero-section'
import ActorsList from '@/components/archive/actorsList'
import Footer from '@/components/ui/shared-footer'

function page() {
  return (
    <Fragment>
      <Header />
      <Herosection />
      <ActorsList />
      <Footer />
    </Fragment>
  )
}

export default page