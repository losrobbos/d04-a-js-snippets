const books = [
  {  _id: "b1", title: "Das Café am Rande der Welt", author: "Johann Kafka" },
  {  _id: "b2", title: "Stolz und Vorurteil", author: "Jane Austen" },
  {  _id: "b3", title: "Emma", author: "Jane Austen" },
  {  _id: "b4", title: "Love & Devolution", author: "Erica James" },
]

console.log( { books })









// CRUD - CREATE - READ - UPDATE - DELETE

// Add NEW BOOK OBJECT at end of array
const addBook = (books, bookNew) => {
  // books.push( bookNew ) // => ACHTUNG: Push ändert Original Array!
  const booksCopy = [...books] // created COPY of books
  booksCopy.push( bookNew ) // push item on COPY
  return booksCopy // return NEW array (copy des Originals + new item)
}

// Delete a book from array
const deleteBook = (strId) => {

  // DELETE objects in array using filter
  const booksFiltered = books.filter( (book) => {

    // just pick those items that do NOT have Jane Austen as author
    // return book.author !== "Jane Austen"

    // or not "Emma" as title
    // return book.title !== "Emma" 
    // return book._id !== "b2" // or delete a VERY SPECIFIC book by its ID!
    return book._id !== strId // or delete by function parameter! => so we can RE-USE delete!
  })

  return booksFiltered // return list of books without the deleted books
}

// Update a book in the array
const updateBook = () => {
  // nächstes Mal ;)
}


// TESTING our CRUD

// ADD a new book to the "books database"
const bookNew = { title: "Schnell denken, langsam denken", author: "Daniel Kahnemann" }
const booksNew = addBook( books, bookNew)
console.log( { booksNew } )



const booksFiltered = deleteBook("b2")
console.log( { booksFiltered } )

