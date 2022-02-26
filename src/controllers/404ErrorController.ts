import {BaseController} from "./BaseController";
import {NotFoundPage} from "../pages/error/errorPage";

export default class NotFoundController extends BaseController {
  constructor() {
    super(new NotFoundPage());
  }
}