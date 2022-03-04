// OBJECT COPY / SPREAD

const kueche = {
  kuehlschrank: "Fridgy 123",
  ofen: "Oven Owen",
  spuelmaschine: "Spueli S45"
}

// kreire COPY der Kpche
const kuecheCopy = { ...kueche }

kuecheCopy.ofen = "Oven Orlando"

console.log( { kueche } )
console.log( { kuecheCopy } )



// ARRAY COPY / SPREAD

const kitchen = [ 'Ofen', 'Spuelmaschine', 'Kuehlschrank' ]

const kitchenCopy = [ ...kitchen ] // creates copy of ARRAY

console.log( { kitchen } )
console.log( { kitchenCopy } )