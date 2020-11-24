import React from "react";
import styled from "styled-components";
import layout from "../layout";
import Header from "../shared/Header";
import StyleColors from "./StyleColors";

const { Heading } = layout;

const StylesheetPage = props => {
	return (
		<>
			<Header />
			<Heading h1>Design Language</Heading>
			<StyleColors />
		</>
	);
};

export default StylesheetPage;