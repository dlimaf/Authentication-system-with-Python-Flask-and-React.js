import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions} = useContext(Context)
	
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1" >Dog's Home</span>
				</Link>
				<div className="ml-auto">
						<Link to="/login">
							<span>Login</span>
						</Link>
				</div>
			</div>
		</nav>
	);
};
