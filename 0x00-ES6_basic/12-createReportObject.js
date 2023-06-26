#!/usr/bin/node
// Dealing with Objects, shallow copy of it.

import createEmployeesObject from "./11-createEmployeesObject.js";

export default function createReportObject(employeesList) {
  allEmployees = {
    ...createEmployeesObject(dpName, employeesList),
  };

  let getNumberOfDepartments = (employeesList) => {
    return Object.keys(allEmployees).length;
  };
}
