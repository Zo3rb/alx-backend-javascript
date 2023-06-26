#!/usr/bin/node
// Dealing with Iterators.

export default function createIteratorObject(report) {
  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;

  const departments = Object.keys(report);

  return {
    next() {
      if (currentDeptIndex < departments.length) {
        const employees = report[departments[currentDeptIndex]];
        if (currentEmployeeIndex < employees.length) {
          const employee = employees[currentEmployeeIndex];
          currentEmployeeIndex++;
          return { value: employee, done: false };
        } else {
          currentDeptIndex++;
          currentEmployeeIndex = 0;
          return this.next();
        }
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
