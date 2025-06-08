import React, { Fragment } from 'react'

import Header from '@/components/ui/shared-header'
import Collabration from '@/components/gucciBox/collabration'
import Footer from '@/components/ui/shared-footer'

function page() {
  return (
    <Fragment>
      <Header />
      <Collabration />
      <Footer />
    </Fragment>
  )
}

export default page