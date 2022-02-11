
const persons = [ 'Rob', 'Ahmed', 'Alaa' ]

// actually this for loop variant (with incrementing the i) is not needed that often!
// for(let i=0; i<persons.length; i++) {
//   console.log( persons[i] )
// }
// console.log()


const displayPeopleUppercases = () => {

  // nice alternative to for loop for looping through fu**** arrays!
  for( let person of persons ) {
    console.log( person.toUpperCase() )
  }
  // no return! 
  // => because we don't want any NEW info!
  // => just display EXISTING (already known) info!
}

displayPeopleUppercases()

console.log() // create empty line


// pleaee GIVE ME BACK all people uppercase!
// return => change stuff / update stuff, manipulate stuff, change format, NEW information
// return => always delivers us something we do not know YET ! / something new we dont have
const getPeopleUppercased = () => {

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
