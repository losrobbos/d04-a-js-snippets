// AUFGABE 6. c4n y0u r34d th15?
// Erstellen Sie eine Funktion, die eine Zeichenkette als Argument nimmt 
// und eine kodierte (h4ck3r 5p34k) Version der Zeichenkette zurückgibt. 
// NB: Damit Ihr Programm richtig funktioniert, 
// sollte die Funktion alle 'a's durch 4, 'e's durch 3, 'i's durch 1, 
// 'o's durch 0 und 's's durch 5 ersetzen.

// Beispiele:

const hackerSpeak = (str) => {

  const arrString = str.split("") // split string up in characters

  // mappe über jeden character
  // prüfe jeden character mit switch case und ersetze 
  const arrCryptonized = arrString.map( (char) => {
    switch( char ) {
      case "a": return 4; // map a to 4
      case "e": return 3;
      case "i": return 1;
      case "o": return 0;
      case "s": return 5;
      case 9: return $;
      default: 
        return char // leave character as it is if it does not match any of the above
    }
  })

  const strCryptonized = arrCryptonized.join("") // => joins all array elements together again to a string

  console.log( strCryptonized )

  return strCryptonized
}

// EXPECTED INPUT => OUTPUT
hackerSpeak("javascript 9st cool") // ➞ "j4v45cr1pt 15t c00l"
hackerSpeak("Programmieren macht Spaß") // ➞ "pr0gr4mm1ng 15 fun"
hackerSpeak("Werde ein Programmierer") // ➞ "b3c0m3 4 c0d3r" 



// another way: split a string into an array by using SPREAD operator!
const strTest = "hallo"
const arrTest = [...strTest]
console.log( arrTest ) // gives us ['h', 'a', 'l', 'l', 'o']