const books = [
  {  title: "Das Café am Rande der Welt", author: "Johann Kafka" },
  {  title: "Die Verwandlung", author: "Kafka" },
  {  title: "Stolz und Vorteil", author: "Jane Austen" },
  {  title: "Anna", author: "Jane Austen" },
  {  title: "Jane Austen Self Biography", author: "Jane Austen" },
  {  title: "Love & Devolution", author: "Erica James" },
]

// Search Function by autor
const searchBooksByAuthor = ( author ) => {

  // loop through all books
  const booksSearched = books.filter( (book) => {
    // if book includes the given author => return true (=> push into new array)
    return book.author.includes( author ) // true / false
  })

  // return the array with all books which were filtered out
  return booksSearched
}

// search by author
console.log( searchBooksByAuthor("Kafka") )
console.log( searchBooksByAuthor("Austen") )
