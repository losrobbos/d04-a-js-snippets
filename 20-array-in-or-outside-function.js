// Where to put f*** array? in or outside function?


// OUTSIDE function => we wanna re-use the array in our program
// INSIDE function => the array JUST matters inside the function and nowhere else



const checkSpam = ( text ) => {
  const arrKeywords = ['shit', 'fuck you', 'bill gates', "fauci"]

  // check every keyword if it is in text
  for( let keyword of arrKeywords) {
    // does text contain any of these????
    if( text.includes( keyword ) ) {
      // flag as SPAM / SCAM whatever
      return true
    }
  }
  return false
}

console.log ( checkSpam("fauci invented the whole thing ") )