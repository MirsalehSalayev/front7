import React from 'react'
import OurProducts from '../../sections/ourProducts'
import { Helmet } from "react-helmet-async"

import "./home.scss"
function Home() {
  return (
    <div className='home'>
      <Helmet>
        <title>home</title>
      </Helmet>
      <OurProducts />
    </div>
  )
}

export default Home