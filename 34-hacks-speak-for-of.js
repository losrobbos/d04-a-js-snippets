// 6. c4n y0u r34d th15?
// Erstellen Sie eine Funktion, die eine Zeichenkette als Argument nimmt 
// und eine kodierte (h4ck3r 5p34k) Version der Zeichenkette zurückgibt. 
//NB: Damit Ihr Programm richtig funktioniert, 
// sollte die Funktion alle 'a's durch 4, 'e's durch 3, 'i's durch 1, 
// 'o's durch 0 und 's's durch 5 ersetzen.

// Beispiele:

const hackerSpeak = (str) => {

  const arrString = str.split("")

  let strNew = ""

  // char = character

  // loope durch jedes ZEICHEN (Char) des strings
  for( let char of arrString ) {

    switch( char ) {
      case "a": char = 4; break;
      case "e": char = 3; break;
      case "i": char = 1; break;
      case "o": char = 0; break;
      case "s": char = 5; break;
      case 9: char = $; break;
    }

    strNew += char
    // strNew += char == "a" ? 4 :  char == "e" ? "3" : char
  }

  console.log( strNew )

  return strNew // [ a => 4, e => 3, i => 1, o => 0, s => 5 ]
}

// EXPECTED INPUT => OUTPUT
hackerSpeak("javascript 9st cool") // ➞ "j4v45cr1pt 15t c00l"
hackerSpeak("Programmieren macht Spaß") // ➞ "pr0gr4mm1ng 15 fun"
hackerSpeak("Werde ein Programmierer") // ➞ "b3c0m3 4 c0d3r" 

