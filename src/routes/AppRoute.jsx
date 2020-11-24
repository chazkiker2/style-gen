import React from "react";
import { Route } from "react-router-dom";

const AppRoute = ({ component: Component, path, ...props }) => {
	return (
		<Route path={path} render={(pr) => <Component {...pr} />} {...props} />
	);
};

export default AppRoute;