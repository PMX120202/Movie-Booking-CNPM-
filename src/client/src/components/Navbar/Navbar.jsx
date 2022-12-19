import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
	const { user } = useContext(AuthContext);
	console.log(user.username)
	return (
		<div className="navbar-container">
			<div className="navbar">
				<Link
					to="/"
					style={{ color: "inherit", textDecoration: "none" }}
				>
					<span className="logo">NGU Cinema</span>
				</Link>

				{user ? (
					<div className="logo-user">
						<Link to="/account"> 
						<span>{user.username}</span>  
						</Link>
					</div>
				) : (
					<div className="navItems">
						{/* <button className="navButton" style={{ color: "black" }}>
							Register
						</button>
						<button className="navButton" style={{ color: "black" }}>
							Login
						</button> */}

						<Link className="navButton" style={{ color: "black", backgroundColor: "white" }} to="/register">
							Register
						</Link>
						<Link className="navButton" style={{ color: "black", backgroundColor: "white" }} to="/login">
							Login
						</Link>
	
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
