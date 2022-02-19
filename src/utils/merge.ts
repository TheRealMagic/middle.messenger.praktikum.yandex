type Indexed<T = unknown> = {
  [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  Object.keys(rhs).reduce( (result: Indexed, key: string): Indexed => {
    const left = result[key], right = rhs[key];
    if (key in result && checkObject(left) && checkObject(right)) {
      return merge(left, right);
    }
    result[key] = rhs[key];
    return result;
  }, lhs);
  return lhs;
}

function checkObject(value: any): value is Indexed {
  return typeof value === "object" && value && !Array.isArray(value);
}

export default merge;