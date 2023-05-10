export default function accessImmutableObject(object, array) {
  if (Array.isArray(array) && array.length > 0) {
    let currentValue = object;
    for (let i = 0; i < array.length; i++) {
      const key = array[i];
      if (typeof currentValue === "object" && currentValue !== null) {
        currentValue = currentValue[key];
      } else {
        return undefined;
      }
    }
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
