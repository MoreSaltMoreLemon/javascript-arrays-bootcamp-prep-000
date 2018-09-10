let chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  let arrayy = array;
  return arrayy.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  let arrayy = array;
  return arrayy.push(element);
}

function addElementToEndOfArray(array, element) {
  return array.push(element);
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  return array.shift(element);
}

function removeElementFromBeginningOfArray(array, element) {
  let arrayy = array;
  return arrayy.shift(element);
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  return array.pop(element);
}

function removeElementFromEndOfArray(array, element) {
  let arayy = array;
  return arrayy.pop(element);
}