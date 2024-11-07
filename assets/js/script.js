// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  let addEmployee = true;

  while (addEmployee) {
    const firstName = prompt("Enter the employee's first name:");
    const lastName = prompt("Enter the employee's last name:");
    let salary;

    while (true) {
      salary = prompt('Enter the salary (numeric value):');
      salary = Number(salary);
      if (!isNaN(salary) && salary > 0) { // Ensure salary is a positive number
        break;
      } else {
        alert('Please enter a valid numeric salary.');
      }
    }

    if (firstName && lastName) {
      const newEmployee = {
        firstName,
        lastName,
        salary,
      };
      employeesArray.push(newEmployee);
    } else {
      alert("Please provide both a first and last name.");
    }

    addEmployee = confirm("Would you like to add another employee?");
  }

  return employeesArray;
};

// Calculate the average salary
const calculateAverageSalary = function(employees) {
  if (employees.length === 0) return 0;

  const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
  return totalSalary / employees.length;
};

// Display the average salary
const displayAverageSalary = function(employees) {
  const avgSalary = calculateAverageSalary(employees);
  console.log(`The average salary is ${avgSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}`);
};

// Select and display a random employee
const getRandomEmployee = function(employees) {
  if (employees.length === 0) return;

  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  console.log(`A random employee is: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
};

// Sort employees by last name
const sortEmployees = function(employees) {
  return employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
};

// Display employee data in an HTML table
const displayEmployees = function(employees) {
  const employeeTable = document.querySelector('#employee-table');
  employeeTable.innerHTML = '';

  employees.forEach(employee => {
    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = employee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = employee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = employee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  });
};

// Main function to track employee data
const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);
  displayAverageSalary(employees);
  console.log('==============================');
  getRandomEmployee(employees);

  const sortedEmployees = sortEmployees(employees);
  displayEmployees(sortedEmployees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
