import React, { useState } from "react"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/Navbar/Navbar";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HomeCard from "../../pages/Home/home1/HomeCard"
import { homeData } from "../../data"


import "./home.css";

const SampleNextArrow = (props) => {
	const { onClick } = props
	return (
	  <div className='control-btn' onClick={onClick}>
		<button className='next'>
		  <i class='fa fa-chevron-right'></i>
		</button>
	  </div>
	)
  }
  const SamplePrevArrow = (props) => {
	const { onClick } = props
	return (
	  <div className='control-btn' onClick={onClick}>
		<button className='prev'>
		  <i class='fa fa-chevron-left'></i>
		</button>
	  </div>
	)
  }


  
const Home = () => {
	const [items, setItems] = useState(homeData)
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	  }
	return (
		<div className="home">
			<Navbar />
			<Header />
	
			<div className="homeContainer">
				
				<Slider {...settings}>
					{items.map((item) => {
						return (
							<>
								<HomeCard key={item.id} item={item} />
							</>
						)
					})}
				</Slider>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
