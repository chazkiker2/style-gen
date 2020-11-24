import views from "../views";

const HOMEPAGE_PATH = "/";
const STYLESHEET_PATH = "/styles";
export const PATHS = {
	HOMEPAGE_PATH,
	STYLESHEET_PATH,
};

export const STYLESHEET = {
	component: views.StylesheetPage,
	path: PATHS.STYLESHEET_PATH,
}

export const HOMEPAGE = {
	component: views.HomePage,
	path: PATHS.HOMEPAGE_PATH
};

const ROUTES = [STYLESHEET, HOMEPAGE];

export default ROUTES;