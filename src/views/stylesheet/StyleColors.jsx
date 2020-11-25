import React, { useState } from "react";
import styled from "styled-components";

import layout from "../layout";

const { Heading, Button } = layout;

// const ButtonContainer = styled.div`
// 	display: flex;
// 	flex-flow: column nowrap;
// 	width: 100%;
// 	justify-content: center;
// 	align-items: center;
// 	Button, button {
// 		width: 50%;
// 		height: 20px;
// 	}
// `;

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

const SSwatch = styled.div`
	background-color: ${pr => pr.color};
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	h5 {
		text-transform: uppercase;
	}
`;

const ButtonContainer = styled.div`
	/* display: flex; */
	display: ${props => props.shown ? "flex" : "none"};
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

const Swatch = ({ color, ...props }) => {
	const [hover, setHover] = useState(false);

	const onMouseIn = () => {
		setHover(true);
	}
	const onMouseOut = () => {
		setHover(false);
	}



	return (
		<SSwatch color={color} onMouseEnter={onMouseIn} onMouseLeave={onMouseOut}>
			<Heading h5>{color}</Heading>
			<ButtonContainer shown={hover}>
				<Button>Edit</Button>
				<Button>Copy Hex</Button>
			</ButtonContainer>
		</SSwatch>
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