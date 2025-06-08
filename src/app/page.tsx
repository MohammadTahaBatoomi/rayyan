import React, { Fragment } from 'react'

import Header from '@/components/ui/shared-header'
import Herosection from '@/components/landing/hero-section'
import Pastshows from '@/components/landing/past-shows'
import Footer from '@/components/ui/shared-footer'

function page() {
  return (
    <Fragment>
      <Header />
        <Herosection /> 
        <Pastshows />
      <Footer />
    </Fragment>
  )
}

export default page