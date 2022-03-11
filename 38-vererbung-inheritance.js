// KLASSE => Objects eines TYPS erzeugen

// HERO => ENEMIES! => VIELE! VIELE ARTEN!

// DROSTEN, LAUTERBACH, FAUCI, AngryBird, FuryBanana, Zombie, Snake

// Angry => FLAP attack
// FuryBanana => throws bombs
// Zombie => creeping

class Enemy {

  constructor(name, hardness = 1, health = 100) {
    this.name = name
    this.hardness = hardness
    this.health = health
  }

}

class PowerVaccinator extends Enemy {

  constructor(name, hardness, health, vaccineAttack = 10 ) {

    super( name,hardness, health ) // create BASE ENEMY first
    // this.name = name
    // this.hardness = hardness
    // this.health = health
    this.vaccineAttack = vaccineAttack // extend base enemy by something SPECIAL 
  }

}

// SUBCLASS / CHILD CLASS / INHERITED CLASS
class AngryBird extends Enemy {

  // if we do NOT wanna have different properties in our subclass
  // we COULD omit the constructor

  // constructor( name, hardness, health) {
  //   super(name, hardness, health) // create BASE Enemey  //   // no new property!
  // }

  flapAttack() {
    console.log( "FLAP FLAP DIE! ")  
  }
}

const drosten = new Enemy("Drosten", 1)
const fauci = new PowerVaccinator("Fauci", 2, 100, 9)
const angryBird = new AngryBird("Birdy", 55, 100)

console.log( drosten )
console.log( fauci )
console.log( angryBird )
angryBird.flapAttack() // call specialized method of the Angry Bird