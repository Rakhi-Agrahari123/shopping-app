import React from 'react'
import TopStrip from '../component/TopStrip'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import GridSection from '../component/GridSection'
import Features from '../component/Features'
import FitGuide from '../component/FitGuide'
import EmailSubscribtion from '../component/EmailSubscribtion.jsx'
import Footer from '../component/Footer.jsx'


const Home = () => {
  return (
    <div>
        <TopStrip />
         <Navbar />
         <Hero/>
         <GridSection />
         <Banner/>
         <FitGuide />
         <EmailSubscribtion />
         <Features />
         <Footer />
         </div>


  )
}


export default Home