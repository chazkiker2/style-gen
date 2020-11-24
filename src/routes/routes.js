import views from "../views";

const HOMEPAGE_PATH = "/";
export const PATHS = {
	HOMEPAGE_PATH,
};

export const HOMEPAGE = {
	component: views.HomePage,
	path: HOMEPAGE_PATH
};

const ROUTES = [HOMEPAGE];

// ROUTES.concat(HOMEPAGE);

export default ROUTES;