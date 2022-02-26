import {BaseController} from "../../controllers/BaseController";

export type Constructable<T = BaseController> = new (...args: any[]) => T;