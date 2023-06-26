#!/usr/bin/node
// Dealing with Objects, shallow copy of it.

import createEmployeesObject from './11-createEmployeesObject.js';

export default function createReportObject(employeesList) {
  allEmployees = {
    ...createEmployeesObject(dpName, employeesList),
  };

  const getNumberOfDepartments = (employeesList) => Object.keys(allEmployees).length;
}
