const kueche = {
  kuehlschrank: "Fridgy 123",
  ofen: "Oven Owen",
  spuelmaschine: "Spueli S45"
}

// ALLOW USER to insert new key value data 
const addItemToKueche = (key, value) => {
  kueche[key] = value // => kueche.mikrowwelle = value
}

addItemToKueche("mikrowelle", "Mikro MX 1000" )
addItemToKueche("wasserkocher", "Kochi K2")


// HARDCODED => mikrowelle, wasserkocher
// NACHTEIL => wir, die Coder, müssen wissen, was ins Object soll
kueche.mikrowelle = "Mikro MX 1000"
kueche.wasserkocher = "Kochi K2"

console.log( kueche )