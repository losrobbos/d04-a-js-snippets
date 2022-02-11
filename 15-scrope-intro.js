const persons = [ 'Rob', 'Ahmed', 'Alaa' ]


const getPeopleUppercased = () => {

  // nice alternative to for loop for looping through fu**** arrays!

  const arrPersonsUc = []

  for( let person of persons ) {
    const personUc = person.toUpperCase()
    arrPersonsUc.push( personUc )
  }
  // return our NEW info
  return arrPersonsUc

}

const result = getPeopleUppercased() // whatever the function returns, will be stuffed into variable "result"
console.log( result )

// THIS console log below would not work! Because arrPersonU is not visible here.
// It belongs to the function only! (kind of its "property")
// We call that the SCOPE of the function 
// console.log( arrPersonsU )  

