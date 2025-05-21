import React from 'react'
import Banner from '../../components/sections/banner/Banner'
import Facility from '../../components/sections/facility/Facility.jsx'
import FeaturedProduct from '../../components/featuredproduct/FeaturedProduct.jsx'
import OfferSection from '../../components/offer/OfferSection.jsx'
import NewProduct from '../../newproduct/NewProduct.jsx'


const Home = () => {
  return (
    <>
      <Banner/>
      <Facility/>
      <FeaturedProduct/>
      <OfferSection/>
      <NewProduct/>
    </>
  )
}

export default Home
