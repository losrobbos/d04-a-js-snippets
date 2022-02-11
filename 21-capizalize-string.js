// capitalize => just make FIRST letter uppercase
// toUppercase => makes WHOLE WORD uppercase
const capitalize = ( strWord ) => {
  return strWord[0].toUpperCase() + strWord.slice(1) // when => w => W + hen => When 
}

// INPUT = when is all that stuff finally over
// OUTUT = When Is All That Stuff Finally Over

const strText = "when is all that stuff finally over"

const arrWords = strText.split(" ")
console.log( arrWords )

let strTextNew = "" 
for( let word of arrWords ) {
  // word = all
  let wordUc = capitalize( word ) // => All
  console.log(wordUc)
  strTextNew += wordUc + " " // "When " + "Is " + "All " => "When Is All That Stuff Finally Over"
}
console.log( strTextNew )

// console.log( "Old word: ", strWord)
// console.log( strWord[0], strWord[0].toUpperCase(),  )
// console.log( "New word: ", strWord[0].toUpperCase() + strWord.slice(1) )
// console.log( "New word: ", strWord.replace( strWord[0], strWord[0].toUpperCase() ))



return

const strBigText = "when is all that stuff finally over"


const capitalizeWords = ( text ) => {

  // expected output variable
  let capitalizedString = ""


  // logic
  // find all words => take first character => make it uppercase

  // output
  return capitalizedString
}

const result = capitalizeWords( "when is all that stuff finally over" )
console.log( result )


