// **7. Wörterbuch.**
// Erstellen Sie eine Funktion, die eine Zeichenkette und ein Array mit Wörtern annimmt und ein gefiltertes Array 
// mit den Wörtern zurückgibt, die mit denselben Buchstaben beginnen wie die Zeichenkette.
// Anmerkungen:
// * Wenn keines der Wörter übereinstimmt, wird ein leeres Array zurückgegeben.
// * Behalten Sie das gefilterte Array in der gleichen relativen Reihenfolge wie das ursprüngliche Array der Wörter.
// Beispiele:
// * dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// * dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// * dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []



// EXPECTED RESULT
const searchWordsInWordsArray = (arrWords, strSearchWordBegin) => {

  const arrWordsSearch = arrWords.filter( ( word ) => {
    return word.startsWith( strSearchWordBegin )
    // return word.indexOf( strSearchWordBegin ) != -1 // also possible! but more complicated
  })

  return arrWordsSearch
}

// item ist teil von anderem item => includes, startsWith, endsWidth, indexOf  
// search & match => regular expression => braucht man z.B. für GÜLTIGKEIT (VALID FORMAT) => PLZ, Phone, Email, Passwort

const arrWords = [ "hallo", "du", "netter", "nett", "netto", "brutto", "steueroase", "steuerhinterziehung", "mensch" ]
const strSearchWordBegin = "nett"

// CALL der Function
const arrWordsSearch = searchWordsInWordsArray( arrWords, strSearchWordBegin )
console.log(arrWordsSearch)

// SORTIEREN
console.log( arrWordsSearch.sort() )

// BEISPIEL

// INPUT: [ "hallo", "du", "netter", "nett", "netto", "brutto", "steueroase" "mensch" ], "nett"
// OUTUT: [ "netter", "nett" ] // => FILTER





// products.filter( ( product ) => {

// })

// books.filter( (book) => {

// })

// blogPosts.filter( (blogPost) => {

// })