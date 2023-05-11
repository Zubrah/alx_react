export default function accessImmutableObject(object, array) {
  if (Array.isArray(array) && array.length > 0) {
    const immutableMap = fromJS(object);
    const currentValue = immutableMap.getIn(array);
    if (typeof currentValue === "string" || currentValue instanceof Map) {
      return currentValue;
    }
  }
  return undefined;
}

// Test Case :
const obj = {
  name: {
    first: "ALX Student",
    last: "SWE React Course",
  },
};
const path = ["name", "first"];

const result = accessImmutableObject(obj, path);
console.log(result); // should output "ALX Student"
