import namespace from "./namespace";
import merge from "./merge";

type Indexed<T = unknown> = {
  [key in string]: T;
};

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== "object" || object === null || Array.isArray(object)) {
    return object;
  }
  checkPath(path);
  const newObj: Indexed = namespace(path, value);
  return merge(object as Indexed, newObj);
}

function checkPath(part: string) {
  if (typeof part !== "string") {
    throw new Error("path must be string");
  }
}

export default set;