function cloneDeep<T extends object = object>(obj: T) {
  if (checkIsArray(obj)) {
    return obj.reduce(copyArrayValue, []);
  } else if (checkIsObject(obj)) {
    if (obj === null) {
      return null;
    }
    return Object.entries(obj).reduce(copyObjValue, {});
  } else {
    return obj;
  }
}

function checkIsObject(obj: unknown): obj is object {
  return typeof obj === "object";
}

function checkIsArray(obj: unknown): obj is Array<any> {
  return Array.isArray(obj);
}

function copyObjValue(result: Record<string, any>, [key, value]: [string, any]) {
  if (!checkIsObject(value) && !checkIsArray(value) || value === null) {
    result[key] = value;
  } else {
    result[key] = cloneDeep(value);
  }
  return result;
}

function copyArrayValue(result: Record<string, any>, item: any) {
  if (!checkIsObject(item) && !checkIsArray(item) || item === null) {
    result.push(item);
  } else {
    result.push(cloneDeep(item));
  }
  return result;
}

export default cloneDeep;
