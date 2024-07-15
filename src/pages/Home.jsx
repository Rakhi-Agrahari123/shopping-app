import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import GridSection from '../component/GridSection'
import Features from '../component/Features'
// import Footer from '../component/Footer.jsx'
import ProductList from '../component/ProductList.jsx'
// import FooterData from '.
import FooterData from './../Data/FooterData.jsx'


const Home = () => {
  return (
    <div>
     
        <Hero/>
         <GridSection />
         <Banner/>
         <Features />
         <ProductList />
         {/* <Footer /> */}
         </div>


  )
}


export default Home