#!/usr/bin/node
// Dealing with Loops.

export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    idx = appendString + idx;
  }

  return array;
}
