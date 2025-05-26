import React from 'react'
import Banner from '../../components/sections/banner/Banner'
import Facility from '../../components/sections/facility/Facility.jsx'
import FeaturedProduct from '../../components/featuredproduct/FeaturedProduct.jsx'
import OfferSection from '../../components/offer/OfferSection.jsx'
import NewProduct from '../../newproduct/NewProduct.jsx'
import BestSeller from '../../components/bestseller/BestSeller.jsx'
import FaqPart from '../../components/faq/FaqPart.jsx'
import SpringSale from '../../components/springsale/SpringSale.jsx'
import BandSelection from '../../components/bandselection/BandSelection.jsx'



const Home = () => {
  return (
    <>
      <Banner/>
      <Facility/>
      <FeaturedProduct/>
      <OfferSection/> 
      <NewProduct/>
      <SpringSale/>
      <BestSeller/>
      <FaqPart />
      <BandSelection/>
    </>
  )
}

export default Home
