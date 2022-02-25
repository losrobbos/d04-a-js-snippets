const books = [
  {  title: "Das Café am Rande der Welt", author: "Johann Kafka" },
  {  title: "Stolz und Vorteil", author: "Jane Austen" },
  {  title: "Anna", author: "Jane Austen" },
  {  title: "Jane Austen Self Biography", author: "Jane Austen" },
  {  title: "Love & Devolution", author: "Erica James" },
]


// FILTER 
// => durchloopt einen Array und sucht Items nach einem bestimmten Kriterium
// => alle Items, die auf das Kriterium passen => pushe sie in einen Array

const booksJaneAusten = books.filter( (book) => {
  return book.author === "Jane Austen" // true / false
})

console.log( books )
console.log( booksJaneAusten )



// FILTER by partial term somewhere in the word (we dont know the exact position!)
const booksAusten = books.filter( (book) => {
  // includes helps to find something in a string (position does not matter
  return book.author.includes("Austen") // true / false
})

console.log( books )
console.log( booksAusten )


