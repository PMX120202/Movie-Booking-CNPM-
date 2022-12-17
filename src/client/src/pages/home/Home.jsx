import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbarz from '../../components/Navbarz/Navbarz'


import "./home.css"

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