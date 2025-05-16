import React from 'react'
import Container from "../../layers/Container"
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <Container className="mt-8 mb-20">
        <Link to="/">
            <img src="images/banner.png" alt="banner" />
        </Link>
    </Container>
      
    </>
  )
}

export default Banner
