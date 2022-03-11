

const users = [
  { name: "Susan", admin: true, email: "susan@susan.com" },
  { name: "Rami", admin: true, email: "rami@rami.com" },
  { name: "Hamideh", admin: false, email: "hamideh@hamideh.com" },
  { name: "Ahmad", admin: false, email: "ahmad@ahmad.com" },
]

// BEISPIEL nur mit Console.log - ohne Return
// => wir wollen nur etwas ANZEIGEN, nichts updaten oder weiter verarbeiten! 
users.forEach( user => {
  console.log( user.email )
} )


// BEISPIEL wo RETURN Sinn macht
// => einen Input WEITERVERARBEITEN (z.B. Filtern!)
 
const admins = users.filter( user => {
  return user.admin // user.admin === true
})

console.log( admins )