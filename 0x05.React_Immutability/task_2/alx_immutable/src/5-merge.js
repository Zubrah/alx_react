import { List, Map } from "immutable";

// ConcatElement function
export function concatElements(page1, page2) {
  return List(page1.concat(page2));
}

// MergeElement function and it uses spread operator to merge two pages
export function mergeElements(page1, page2) {
  const mergedObj = { ...page1, ...page2 };
  const values = Object.values(mergedObj);
  return List(values);
}

// Test Implementation
const page1 = {
  "user-1": {
    id: 1,
    name: "test",
    likes: {
      1: {
        uid: 1234,
        id: 1,
      },
    },
  },
};

// page two
const page2 = {
  "user-1": {
    likes: {
      2: {
        uid: 134,
        id: 2,
      },
    },
  },
};

// call the function with page1 and page2
const merged = mergeElements(page1, page2).toJS();
console.log(merged);

// call the concat function with page1 and page2
const concat = concatElements(page1, page2).toJS();
console.log(concat);
