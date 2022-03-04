
const words = [ "Jack", "Yamen", "Michael", "Alaa" ] // Jack, Alaa

// wir wollen nur einen TEIL des Arrays => filter

// wiederverwendbare Suche => mit einer Function!
const searchWord = ( strSearch ) => {
  const wordsFiltered = words.filter( (word) => {
    return word.includes( strSearch ) // true
  })  
  return wordsFiltered
}

console.log( searchWord( "e" ) )



// DYNAMIC SEARCH => wiederverwendbare SEARCH (mal such ich nach a, mal nach e)
