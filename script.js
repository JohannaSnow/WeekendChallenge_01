console.log (' script is sourced ');

//create an empty array to hold the information
var employees = [];
var combinedSalary;

var addEmployees = function() {
  console.log('in addEmployees');



  var firstName = document.getElementById('firstNameIn').value;
  var lastName = document.getElementById('lastNameIn').value;
  var idNumber = document.getElementById('idNumberIn').value;
  var jobTitle = document.getElementById('jobTitleIn').value;
  var annualSalary = document.getElementById('annualSalaryIn').value;
};


  //made a new employee object
  var newEmployees = {
    firstName: firstName,
    lastName: lastName,
    idNumber: idNumber,
    jobTitle: jobTitle,
    annualSalary: annualSalary,

};
//alert user if something is left blank
if( newEmployees.firstname === '' || newEmployees.lastName === '' || newEmployees.idNumber === '' || newEmployees.jobTitle === '' || newEmployees.annualSalary === ''){
alert( 'Please fill this in with correct information');
}

else{
clearInputs(); ///clears the boxes so it doesnt post twice //////
  // push employees entered into program
employees.push(newEmployees);
  //display employees
  displayEmployees();
}


var clearInputs = function(){
  console.log( 'in clearInputs' );
document.getElementById('firstNameIn').value='';
document.getElementById('lastNameIn').value='';
document.getElementById('idNumberIn').value='';
document.getElementById('jobTitleIn').value='';
document.getElementById('annualSalaryIn').value='';
}; //end clearInput

var displayEmployees = function(){
  console.log( 'inDisplayEmployees');
  console.log( allEmployees );
  // empty our div element
  document.getElementById( 'allEmployees' ).innerHTML='';
};

  for( var i = 0; i < employees.length; i++){
    //Employee information (name, id number, salary)
    var employeeInfo =  '<h2>' + employee[ i ].firstName+ ' ' + employee[ i ].lastName + ' ' + employee[ i ].idNumber + '' + employee[i].jobTitle + '' + employee[i].annualSalary +'' + '<button onClick="takeOut(' + i + ')">Remove Employee</button></p>';
    // append Employee info to output div
  document.getElementById( 'allEmployees' ).innerHTML += employeeInfo;
  } // end for
   // end employeeInfo

  var removeEmployee = function( index ){
    console.log( 'taking out the ' + employee[ index ].firstName + ' ' + employee[ index ].lastName + '' + employee[ index ].idNumber + '' + employee[ index ].jobTitle);
    //splice the employee at this index from out array
   //ARRAY.splice( Index, NumbertoRemove)
   employee.splice( index, 4 );
   //show employees on DOM
   displayEmployees();
 }; //end removeEmployee

  // Calculate combined employee salary/cost to the company
  var calculateSalary = function(){
    console.log('in calculateSalary');
    combinedSalary = 0;
    for (var i = 0; i < employees.length; i++) {
      combinedSalary += Number(employees[i].annualSalary);

  console.log(combinedSalary);
      return combinedSalary;
    }
};

   // end calculateSalary
