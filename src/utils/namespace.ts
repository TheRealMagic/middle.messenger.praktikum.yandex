type Indexed<T = unknown> = {
  [key in string]: T;
};

export default function namespace(value: string, start: any): Indexed {
  if (~value.indexOf(",")) {
    throw new Error("Нет точек");
  }
  const arr= value.split(".");
  return arr.reduceRight((result, item, index) => {
    if (index === arr.length - 1 && start !== undefined) {
      result = {[item]: start};
    } else {
      result = {[item]: result};
    }
    return result;
  }, {});
}
