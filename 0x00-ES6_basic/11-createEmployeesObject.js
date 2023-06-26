#!/usr/bin/node
// Dealing with Objects, Arrays and Spread operator.

export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: [...employees],
  };
}
