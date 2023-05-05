import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1" >Dog's Home</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<i className="far fa-user-circle"></i>
					</Link>
				</div>
			</div>
		</nav>
	);
};
