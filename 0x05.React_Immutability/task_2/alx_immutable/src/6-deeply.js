import { Map } from "immutable";

// takes two param page1 and page with thier map object
export default function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  //merge them with callback functions and return new map object
  const merged = map1.mergeWith((prevValue, nextValue) => {
    if (Map.isMap(prevValue) && Map.isMap(nextValue)) {
      return prevValue.mergeDeep(nextValue);
    } else if (List.isList(prevValue) && List.isList(nextValue)) {
      return prevValue.concat(nextValue);
    } else {
      return nextValue;
    }
  }, map2);

  return merged.toList();
}

// Test Implementation
const page1 = {
  "user-1": {
    id: 1,
    name: "test",
    likes: {
      1: {
        uid: 1234,
      },
    },
  },
};

// page one
const page2 = {
  "user-1": {
    likes: {
      2: {
        uid: 134,
      },
    },
  },
};

const merged = mergeDeeplyElements(page1, page2).toJS();
console.log(merged);
