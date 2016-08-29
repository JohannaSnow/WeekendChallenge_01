console.log(' script is sourced ');

//create an empty array to hold the information
var employees = [];
var combinedSalary = 0
var calculateIncome = function(salary){
  console.log('calculateIncome');
  var monthlyIncome = salary / 12;
  return monthlyIncome;
}

var newEmployee = function () {

var empObj = {
    firstName: document.getElementById('firstNameIn').value,
    lastName: document.getElementById('lastNameIn').value,
    idNumber: document.getElementById('idNumberIn').value,
    jobTitle: document.getElementById('jobTitleIn').value,
    annualSalary: parseInt(document.getElementById('annualSalaryIn').value)
  }; //end newEmployee
  console.log(empObj);
  //alert user if something is left blank
  if (newEmployee.firstName === '' || newEmployee.lastName === '' || newEmployee.idNumber === '' || newEmployee.jobTitle === '' || newEmployee.annualSalary === ''){
    alert('Please fill this in with correct information');
  }else{
     //clearInputs(); ///clears the boxes so it doesnt post twice //////
    // push employees entered into program
    employees.push(empObj);
    //display employees
    displayEmployees();

  }

};

var displayEmployees = function(){
  var displayEmployees = {};
  console.log('inDisplayEmployees');
  console.log('employees');
  // empty our div element
  document.getElementById('allEmployees').innerHTML = '';
}; //end display employees

for ( var i = 0; i < employees.length; i++){
    //Employee information (name, id number, salary)
    var employeeInfo = '<h2 class="empname">' + empolyees[i].firstName + ' ' + employees[i].lastName + '</h2>Employee Number: ' + Number(employees[i].idNumber) + '<br />JobTitle: ' + employees[i].jobTitle + '<br />Annual Salary: ' + Number(employees[i].annualSalary) + '<br /><button onClick="removeEmployee(' + i + ')">Remove Employee</button>';
         document.getElementById('allEmployees').innerHTML += employeeInfo;
       } // end displayEmployees

// I was going to make an employee object but I decided that I didn't need it.


//   //made a new employee object
// var newEmployees = {
//     firstName: firstName,
//     lastName: lastName,
//     idNumber: idNumber,
//     jobTitle: jobTitle,
//     annualSalary: annualSalary,
// }; //end newEmployee
//
// console.log (addEmployee);
// return addEmployee;

//clear the inputs
var clearInputs = function(){
document.getElementById('firstNameIn').value='';
document.getElementById('lastNameIn').value='';
document.getElementById('idNumberIn').value='';
document.getElementById('jobTitleIn').value='';
document.getElementById('annualSalaryIn').value='';
};

//end clearInput
var displayEmployees = function () {
  console.log('inDisplayEmployees');
  console.log('newEmployee');
  console.log('clearInputs');
  // empty our div element
  document.getElementById('allEmployees').innerHTML= '';
  for ( var i = 0; i < employees.length; i++){
//Employee information (name, id number, salary)
var employeeInfo = '<h2 class="empname">' + employees[i].firstName + ' ' + employees[i].lastName + '</h2>Employee Number: ' + Number(employees[i].idNumber) + '<br />JobTitle: ' + employees[i].jobTitle + '<br />Annual Salary: ' + Number(employees[i].annualSalary) + '<br /><button onClick="removeEmployee(' + i + ')">Remove Employee</button>';
     document.getElementById('allEmployees').innerHTML += employeeInfo;
   }
};
//
  var removeEmployee = function( index ){
    console.log( 'taking out the ' + employees[ index ].firstName + ' ' + employees[ index ].lastName + '' + employees[ index ].idNumber + '' + employees[ index ].jobTitle);
    //splice the employee at this index from out array
   //ARRAY.splice( Index, NumbertoRemove)
   employees.splice( index, 4 );
   //show employees on DOM
   displayEmployees();
 }; //end removeEmployee

  // Calculate combined employee salary/cost to the company
  calculateSalary = function (){
    var calculateSalary = {};
    document.getElementById('addInfo').innerHTML='';
    var newEmployee;
    combinedSalary = 0;
    for (var i = 0; i < employees.length; i++) {
      combinedSalary += Number(employee[i].annualSalary);
      combinedSalary += Salary;
      newEmployeeInfo += '<h1>' + information[ i ].firstName + ' ' + information[ i ].lastName + ' ' + information[ i ].idNumber + ' ' + information[i].jobTitle + ' ' + monthly +  ' ' + '</h1>';


  console.log(combinedSalary);
      return combinedSalary;
    }
  };


   // end calculateSalary
