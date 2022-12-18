import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/Navbar/Navbar";

import "./home.css";

const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<Header />
			<div className="hfeature">
				<p>This is feature.</p>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
