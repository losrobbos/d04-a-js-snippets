const books = [
  {  title: "Das Café am Rande der Welt", author: "Johann Kafka" },
  {  title: "Stolz und Vorteil", author: "Jane Austen" },
  {  title: "Love & Devolution", author: "Erica James" },
]

// get books but all titles uppercase!
// map all items to some NEW format => but dont touch the original !
const booksUpdated = books.map( ( book ) => {
  const bookCopy = { ...book } // creates a COPY of book object
  bookCopy.title = book.title.toUpperCase()
  return bookCopy
})

console.log({ booksUpdated })
console.log({ books })
