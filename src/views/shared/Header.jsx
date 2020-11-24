import React from "react";
import ThemeToggler from "./ThemeToggler";

const Header = props => {
	return (
		<>
			<header>
				<h1>Style-Gen</h1>
				<ThemeToggler />
			</header>
		</>
	)
}

export default Header;