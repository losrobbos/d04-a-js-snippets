
class HeroCharacter {
  constructor( name, health = 100, experience = 0, weapons = [ "Sword", "Shield", "Gun" ] ) {
    this.name = name
    this.health = health 
    this.experience = experience 
    this.weapons = weapons
    this.alive = true
  }

  // SETTER => sets a property BUT additionally
  // checks if something ELSE needs to get changes as a CONSEQUENCE!
  set healthUpdate( h ) {

    this.health = h
    console.log( this.health )

    // at certain health => weapons get lost
    if(this.health < 50) {

      const shieldPosition = this.weapons.indexOf("Shield") // get me the position of weapon in array 
      console.log( { shieldPosition })

      this.weapons.splice(shieldPosition, 1)

      // this.weapons.pop() // eliminate LAST item in array
    }

    // check consequences
    if( this.health <= 0 ) {
      this.alive = false
    }
  }

  // we set a new experience to the character hero
  // IF experience reaches a certain level => we UPGRADE some other item
  set experienceUpdate ( experienceNew ) {
    this.experience = experienceNew

    if(this.experience >= 10) {
      // 10 => weapon => "Laser Sword"
      this.weapons.push( "Laser Sword ")
    }
  }
  
}

const michael = new HeroCharacter("Michael")

console.log( michael )

// BATTLE AGAINST ENEMIES
michael.healthUpdate = 80
michael.healthUpdate = 60

console.log( michael )
michael.healthUpdate = 40 // this should now trigger => weapon loss!
console.log( michael )


// michael.experienceUpdate = 5
// console.log( michael )

// michael.experienceUpdate = 10
// console.log( michael )