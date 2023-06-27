#!/usr/bin/node
// Using ES6 Rest parameter.

export default function returnHowManyArguments(...args) {
  return args.length;
}
