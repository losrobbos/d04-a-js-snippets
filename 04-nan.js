
// const htmlInputPrice = "30" // => we cannot calculate with fucking strings. so dont do it!

const hasNumber = parseInt("123aaaaaa")
const hasNoNumber = parseInt("aaaaaaa")

console.log( { hasNumber } )
console.log( { hasNoNumber } ) // NaN => Not a Number => Javascripts way tp tell us we tried to parse numbers out of shit
