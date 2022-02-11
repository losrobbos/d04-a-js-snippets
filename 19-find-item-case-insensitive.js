

// const arrKeywords = [ "shit", "fuck", "fuck the corona", "corona", "bill gates" ]

// const strPostUser = " Bill gates invented corona and the vaccine passes, chips and so on"


const pizzas = [ "hawaii", "funghi", "salmone" ]

const searchPizza = ( search  ) => {
  for(let pizza of pizzas) {
    if( pizza.toUpperCase() === search.toUpperCase() ) {
      return pizza
    }
  }

}

let found = searchPizza( "haWAii" )

console.log( found )