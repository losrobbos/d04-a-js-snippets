

// KLASSEN


// _varname 
// => convention with underscore at the beginning => we declare this as a READONLY thing we will just set ONCE and never CHANGE it again! 
// classical example: ID field => _id

// basic employee
class Employee {
  constructor( _id, firstName, lastName, company, wageMonthly = 2000) {

    this._id = _id
    this.firstName = firstName
    this.lastName = lastName
    
    // BAD PRACTICE => do NEVER hardcode combinations of properties with one another
    // this.fullName = firstName + " " + lastName
    
    this.company = company
    this.wageMonthly = wageMonthly

  } // secretly returned der constructor ein neues OBJECT => this

  // classical GETTER use case => COMBINE infos to a new field
  get fullName() {
    return this.firstName + " " + this.lastName
  }

  // set new fullname means => set new FIRSTNAME and new LASTNAME
  set fullName( fn ) // Donald Trump => firstName = Donald, lastName = Trump 
  {
    console.log( fn ) // Joey Tribiani
    const arrFirstnameLastname = fn.split(" ")
    this.firstName = arrFirstnameLastname[0] // firstname
    this.lastName = arrFirstnameLastname[1] // lastname
    // no return
  }

  // other use cases => get a propertiy in different FORMAT, e.g. UPPERCASE

}


const employee = new Employee( "12345", "Robert", "Ristock", "DCI"  ) // secretly calls constructor and returns me a new object

console.log(employee.fullName)

employee.firstName = "Umberto"

console.log(employee.fullName)

// CALL a setter
employee.fullName = "Joey Tribiani" // set => fullName => fullName("Joey Tribiani")
console.log(employee.fullName)





