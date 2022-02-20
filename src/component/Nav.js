/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../images/logo.svg";

const Nav = () => {
	return (
		<nav className="nav">
			<img className="nav__logo" src={Logo} alt="" />
			<ul className="nav__ul">
				<li className="nav__item">
					<a className="nav__link" href="#">
						Features
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#">
						Team
					</a>
				</li>
				<li className="nav__item">
					<a className="nav__link" href="#">
						Sign In
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
