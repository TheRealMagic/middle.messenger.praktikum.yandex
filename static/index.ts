import {Router} from "../src/utils/RouteUtils/Router";
import LoginPageController from "../src/controllers/LoginPageController";
import {ProfilePageController} from "../src/controllers/ProfilePageController";
import {ChatsPageController} from "../src/controllers/ChatsPageController";
import SignUpPageController from "../src/controllers/SignUpPageController";
import {UserApi} from "../src/utils/API/UserApi";
import applicationStore, {StoreEvents} from "../src/modules/ApplicationState/ApplicationStore";
import NotFoundController from "../src/controllers/404ErrorController";


UserApi.getUser()
  .then(() => onCheckUser());

applicationStore.on(StoreEvents.Updated, () => console.dir(applicationStore.getState()));

function onCheckUser() {
  const router = new Router("body");
  router.use("/", LoginPageController)
    .use("/sign-up", SignUpPageController)
    .use("/settings", ProfilePageController)
    .use("/messenger", ChatsPageController)
    .use("/404", NotFoundController)
    .start();
  applicationStore.on(StoreEvents.Updated, (path: string, value: any) => {
    if (path === "user" && value) {
      router.go("/");
    }
  });
}

