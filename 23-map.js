// MAP => wir wollen durch JEDES ITEM des Arrays loopen und jedes item UMWANDELN (=map)

// map & filter => fast immer genutzt bei ARRAYS of OBJECTS

const books = [
  {  title: "Das Café am Rande der Welt", author: "Johann Kafka" },
  {  title: "Stolz und Vorteil", author: "Jane Austen" },
  {  title: "Love & Devolution", author: "Erica James" },
]


console.log({ books })

// Map kann man nutzen, um Infos zu EXTRACTEN (also nur TEIL-Informaton)
const bookTitles = books.map( (book) => {
  return book.title // wir wollen von allen Objects NUR den Titel!
})

console.log( bookTitles )


// update title von JEDEM BUCH zu uppercase
const booksUpdated = books.map( ( book ) => {
  // update the title => achtung => hier verändern wir das ORIGINAL object
  book.title = book.title.toUpperCase()
  return book // map PUSHT (!) das returnte item in den booksUpdated array !
}) // ACHTUNG: wenn wir ein Object in map updaten, wird das ORIGINAL verändert!

console.log({ booksUpdated })
console.log({ books })
