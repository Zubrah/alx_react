import { fromJS } from "immutable";

function getImmutableObject(obj) {
  return fromJS(obj);
}

// Example usage
const plainObj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

const immutableMap = getImmutableObject(plainObj);
console.log(immutableMap);

export default getImmutableObject;
