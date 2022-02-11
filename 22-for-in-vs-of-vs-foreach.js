const arrPizzas = ['hawaii', 'funghi', 'teriyaki']

// for .. in => loopt over INDEXES / KEYS of array
for(let index in arrPizzas) {
  console.log( index )
}

// for .. of => loopt over VALUES of array
for(let value of arrPizzas) {
  console.log( value )
}

// forEach => if we need BOTH, value & index 
arrPizzas.forEach( (value, index) => {
  console.log( index, value)
})
