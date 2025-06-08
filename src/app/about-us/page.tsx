import React, { Fragment } from 'react'
import Header from '@/components/ui/shared-header'
import About from '@/components/gucciBox/about-us'
import Footer from '@/components/ui/shared-footer'

function page() {
  return (
    <Fragment>
      <Header />
      <About />
      <Footer />
    </Fragment>
  )
}

export default page