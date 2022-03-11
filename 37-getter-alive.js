
class HeroCharacter {
  constructor( name, health = 100, experience = 0, weapons = [ "Sword", "Shield", "Gun" ] ) {
    this.name = name
    this.health = health
    this.experience = experience 
    this.weapons = weapons
  }

  // this should CHECK if we still got health!
  // if so => we are alive. if no health points => we are dead
  get isAlive() {
    return this.health > 0 // alive = true / false 
  }

}

const michael = new HeroCharacter("Michael")

console.log( michael )
michael.health -= 50
console.log(  michael.isAlive )

console.log( michael )
michael.health -= 50
console.log( michael )
console.log(  michael.isAlive )



