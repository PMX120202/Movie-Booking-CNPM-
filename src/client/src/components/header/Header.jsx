import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="headerContainer">
				<div className="headerList">
					

					<div className="headerListItems">
						<span>Phim đang chiếu</span>
					</div>

					<div className="headerListItems">
						<span>Ưu đãi</span>
					</div>

					<div className="headerListItems active">
						<span>
							<Link
								className="book-ticket-btn"
								to="/Movie/MovieShowing"
								// style={{ color: "white" }}
							>
								Mua vé
							</Link>
						</span>
					</div>

					<div className="headerListItems">
						<span>Khám phá</span>
					</div>

					<div className="headerListItems">
						<span>Về chúng tôi</span>
					</div>

					

				</div>
			</div>
		</div>
	);
};

export default Header;
