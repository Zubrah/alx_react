import { Map } from "immutable";

// map constant and uses Map from immutable;
const map = Map({
  1: "Liam",
  2: "Noah",
  3: "Elijah",
  4: "Oliver",
  5: "Jacob",
  6: "Lucas",
});

// map2 constant and set the index.
const map2 = map.set("2", "Benjamin").set("4", "Oliver");

// export map and map2
export { map, map2 };
