import { Map, is } from "immutable";

// Checks for areMapsEqual
export function areMapsEqual(map1, map2) {
  return is(map1, map2);
}

// Test
const map1 = Map({
  firstName: "Fred ",
  lastName: "Swaniker ",
});
const map2 = Map({
  firstName: "Fred",
  lastName: "Swaniker",
});
const map3 = Map({
  firstName: "Fred ",
  lastName: "ALX",
});

console.log(areMapsEqual(map1, map2)); // should output true
console.log(areMapsEqual(map1, map3)); // should output false
