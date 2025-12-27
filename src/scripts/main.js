'use strict';

const employeeList = document.querySelector('ul');
const employees = Array.from(employeeList.children);

const employeesBySalary = sortList(employees, 'salary');
const employeeData = getEmployees(employeesBySalary);

function sortList(list, criteria) {
  const sorted = list.sort(
    (a, b) =>
      parseNumber(b.dataset[criteria]) - parseNumber(a.dataset[criteria]),
  );

  employeeList.replaceChildren(...sorted);

  return sorted;
}

function getEmployees(list) {
  return list.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset['position'],
    salary: parseNumber(li.dataset['salary']),
    age: parseNumber(li.dataset['age']),
  }));
}

function parseNumber(numStr) {
  return Number(numStr.replace(/\D/g, ''));
}

export { employeeData };
