import React from 'react'
import { useSelector } from 'react-redux'

import About from './About'
import Contact from './contact'
import Educations from './Education'
import Experiences from './Experiences'
import Footer from './Footer'
import Intro from './intro'
import LeftSide from './LeftSide'
import Header from '../../components/Header'
import Projects from './Projects'

const Home = () => {
  const {protfolioData} = useSelector((state) => state.root)
  return (
    <div >
      
      {protfolioData && (<div className='bg-primary px-20 sm:px-5' >
        <Header/>
      <Intro/>
      <About/>
      <Experiences/>
      <Projects/>
      <Educations/>
      <Contact/>
      <Footer/>
      <LeftSide/>
      </div>)}
    </div>
  )
}

export default Home

