// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = []




// Collect employee data                       // TODO: Get user input to create and return an array of employee objects
const collectEmployees = function() {
  
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
//   displayAverageSalary()
 return employeesArray;  
}

// Display the average salary

const displayAverageSalary = function(employeesArrayParam) {
  // TODO: Calculate and display the average salary
  
   

  let totSalary = 0; 
 

for (let i = 0; i < employeesArrayParam.length; i++) {
    console.log(employeesArrayParam[i].salary);
    totSalary += parseInt(employeesArrayParam[i].salary);
    
}
 console.log(totSalary)      
let avgSalary = totSalary / employeesArrayParam.length;
console.log(`the average salary is ${avgSalary}`)
}

// Select a random employee // TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {
   const index = Math.floor(Math.random() * employeesArray.length);
   const rndEmployeeFN = (employeesArray[index].firstName);
   const rndEmployeeLN = (employeesArray[index].lastName);
   console.log(` a random employee is: ${rndEmployeeFN} , ${rndEmployeeLN}`);
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
