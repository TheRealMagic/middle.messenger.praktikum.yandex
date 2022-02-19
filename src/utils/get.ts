export default function get(obj: object, path: string, defaultValue?: any): any {
  const keys: string[] = path.split(".");
  
  let result: any = obj;
  for (let key of keys) {
    result = result[key];
    
    if (result === undefined) {
      return defaultValue;
    }
  }
  
  return result ?? defaultValue;
}
