
const kueche = {
  kuehlschrank: "Fridgy 123",
  ofen: "Oven Owen",
  spuelmaschine: "Spueli S45"
}


// take ofen & spuelmaschine and increase price by 20%!
// so we are just interested in a PART / SLICE of the object

// GRAB stuff from object MANUALLY
// const ofen = kueche.ofen
// const spuelmaschine = kuecheCopy.spuelmaschine

// ALTERNATIV => deconstruction
let { ofen, spuelmaschine } = kueche

ofen = "Neues Ofen-Modell"

kueche.mikrowelle = "Mikro MX 1000"

console.log( kueche)

