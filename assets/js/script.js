// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');





// Collect employee data                       // TODO: Get user input to create and return an array of employee objects
const collectEmployees = function() {
  const employeesArray = []
  let addEmployee = true;
  while(addEmployee){
    let firstName = prompt("enter a first name");
    let lastName = prompt("enter last name");
    let salary = prompt("enter a salary");
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    }
employeesArray.push(newEmployee)
    addEmployee = confirm("would you like to add anothe employee");
  }
  console.log(employeesArray)
 return employeesArray;  
}

// Display the average salary

const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // const totalSalary = [salary];
  // console.log(totalSalary)
  // let avgSalary = (totalSalary.reduce / (totalSalary.length + 1));
  // console.log(avgSalary)

  //for (let i = 0; i < (newEmployee.salary.length()) +1; i++)
 //  totalSalary = totalSalary++;
 // console.log(totalSalary)
  

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
