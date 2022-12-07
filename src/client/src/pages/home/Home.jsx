import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbarz from '../../components/Navbarz/Navbarz'


import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      <Navbarz/>
      <Header/>
      <div className="hfeature">
        <p>this is Feature.</p> 
      </div>
      <Footer/>
    </div>
  )
}

export default Home