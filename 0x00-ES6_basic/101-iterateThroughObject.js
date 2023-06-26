#!/usr/bin/node
// Dealing with Complex Functions.

export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  for (const [, department] of reportWithIterator) {
    for (const [, employees] of department) {
      employeeNames.push(...employees);
    }
  }

  return employeeNames.join(' | ');
}
