import { List } from "immutable";

export function getListObject(array) {
  return List(array);
}

// Used push or concatenate method here
export function addElementToList(list, element) {
  return list.push(element);
}

// Test Cases ::::
const myArray = ["ES7", "Components", "State"];
const myList = getListObject(myArray);
console.log(myList); // List ['ES7', 'Components', 'State']

const newList = addElementToList(myList, "grape");
console.log(newList); // List ['ES7', 'Components', 'State']
