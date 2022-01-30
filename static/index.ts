import {render} from "../src/utils/render";
import LoginPage from "../src/pages/login/login";
import {ProfilePage} from "../src/pages/newprofile/profile";



const page = new LoginPage();
render("body", page);
