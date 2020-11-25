import React, { useState } from "react";
import styled from "styled-components";
// import assets from "../../assets";
import Locked from "../../assets/001-unlock.svg";
import unlocked from "../../assets/002-open-lock.svg";
import filter from "../../assets/004-filter.svg";
import copy from "../../assets/003-copy.svg";
import layout from "../layout";

const { Heading, Button } = layout;

const darkArr = [
	"#000000",
	"#080708",
	"#242525",
	"#404342",
	"#5c615f",
	"#787e7c",
	"#999f9d"
];

const lightArr = [
	"#9ba1a8",
	"#b9c0c7",
	"#ced4da",
	"#e0e4e8",
	"#e9ecef",
	"#f1f3f5",
	"#f8f9fa"
];

const themeArr2 = [
	"#004578",
	"#005A9E",
	"#0078D4",
	"#C7E0F4",
	"#DEECF9"
];

const ColorsContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	background-color: var(--pDark);
	width: 80%;
	margin: 0 auto;
	padding: 2rem;
	/* height: 60vh; */
	border-radius: 20px;
`;

const StyledSwatch = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	h5 {
		text-transform: uppercase;
	}
	
`;

const ColorSwatch = styled.div`
	background-color: ${props => props.color};
	height: 50%;
	width: 100%;
`;

const ButtonContainer = styled.div`
	display: flex;
	/* display: ${props => props.shown ? "flex" : "none"}; */
	flex-flow: column nowrap;
	width: 100%;
	justify-content: center;
	align-items: center;
	Button, button {
		margin: 0.5rem;
		border-radius: 8px;
		width: 50%;
		height: 20px;
		background-color: var(--pBase);
		color: var(--pText);
	}
`;

const SCollection = styled.div`
	display: flex;
	width: 100%;
	height: 160px;
	flex-flow: row nowrap;
	margin: 0 auto;
	justify-content: space-evenly;
`;

const Options = styled.div`
	display: flex;
	flex-flow: row nowrap;
	width: 100%;
	justify-content: space-evenly;
	align-items: center;
	img {
		fill: white;
		&:hover {
			opacity: 1;
		}
	}
`;

const Icon = styled.a`
	display: block;
	/* background: transparent url("../../assets/001-unlock.svg") no-repeat; */
	background: transparent url(../../assets/001-unlock.svg) no-repeat;
	background-position: 50%;
	background-size:  1.2em;
	margin-right: 0;
`;

const Swatch = ({ color, ...props }) => {
	const [hover, setHover] = useState(false);

	const onMouseIn = () => {
		setHover(true);
	}
	const onMouseOut = () => {
		setHover(false);
	}

	return (
		<StyledSwatch>
			<ColorSwatch color={color} onMouseEnter={onMouseIn} onMouseLeave={onMouseOut} />
			<Options>
				<h5>{color}</h5>
				{/* <Locked /> */}
				<Icon />
				{/* <img src={Locked} alt="lock icon" style={{ width: 20 }} /> */}
				<img src={copy} alt="copy icon" style={{ width: 20 }} />
				<img src={filter} alt="filter icon" style={{ width: 20 }} />
			</Options>
		</StyledSwatch>
	);
};

const Collection = ({ colorArr, name }) => {
	return (
		<>
			<Heading h4>{name}</Heading>
			<SCollection>
				{
					colorArr.map(x => {
						return (<Swatch key={x} color={x} />);
					})
				}
			</SCollection>
		</>
	)
}

const StyleColors = props => {
	return (
		<ColorsContainer>
			<Heading h1>Colors</Heading>
			<Collection colorArr={darkArr} name="Dark Primary" />
			<Collection colorArr={lightArr} name="Light Primary" />
			<Collection colorArr={themeArr2} name="Theme" />
		</ColorsContainer>
	);
};

export default StyleColors;