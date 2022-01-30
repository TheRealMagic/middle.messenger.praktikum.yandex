import {render} from "../src/utils/render";
import LoginPage from "../src/pages/login/login";

const page = new LoginPage();
render("body", page);
