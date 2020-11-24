import React from "react";
import styled from "styled-components";

import layout from "../layout";

const { Heading } = layout;

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
	h5 {
		text-transform: uppercase;
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
	return (
		<SSwatch color={color}>
			<Heading h5>{color}</Heading>
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