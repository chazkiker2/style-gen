import React, { useState } from "react";
import styled from "styled-components";
import { PATHS } from "../../routes/routes";
import ThemeToggler from "./ThemeToggler";
import layout from "../layout";
import MenuBurger from "./MenuBurger";
const { Heading, Link } = layout;


const StyledHeader = styled.header`
	width: 100vw;
	background-color: var(--pDark);
	color: var(--pText);
	padding: 0 2rem;
	div.container {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
	}
	div {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}
`;


const NavContainer = styled.nav`
	display: ${pr => pr.show ? "flex" : "none"};
	width: 100vw;
	background-color: var(--pDarker);
	flex-flow: row nowrap;
	justify-content: center;
	nav {
		display: flex;
		width: 100%;
		flex-flow: row nowrap;
		justify-content: center;
	}
`;

const Header = props => {
	const [navOpen, setNavOpen] = useState(false);

	const toggleNav = () => {
		setNavOpen(!navOpen);
	}

	return (
		<>
			<StyledHeader>
				<div className="container">
					<div>
						<Heading h1 noMargin>Style.</Heading>
					</div>
					<div>
						<MenuBurger onClick={toggleNav} />
						<ThemeToggler />
					</div>
				</div>
			</StyledHeader>

			<NavContainer show={navOpen}>
				<nav>
					<Link to={PATHS.HOMEPAGE_PATH}>Home</Link>
					<Link to={PATHS.STYLESHEET_PATH}>Stylesheet</Link>
				</nav>
			</NavContainer>
		</>
	);
}

export default Header;