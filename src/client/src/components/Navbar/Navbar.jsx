import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
	const { user } = useContext(AuthContext);
	console.log(user.username);
	return (
		<div className="navbar">
			<div className="navContainer">
				<Link
					to="/"
					style={{ color: "inherit", textDecoration: "none" }}
				>
					{/* <span className="logo">Fox Cinema</span> */}
					<img
						src={process.env.PUBLIC_URL + "/icon.png"}
						alt="Logo"
						width="200px"
						class="logo"
					/>
				</Link>

				<Link
					className="btn btn-light mx-2"
					style={{ color: "black", backgroundColor: "white" }}
					to="/register"
				>
					Register
				</Link>
				<Link
					className="btn btn-light mx-2"
					style={{ color: "black", backgroundColor: "white" }}
					to="/login"
				>
					Login
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
