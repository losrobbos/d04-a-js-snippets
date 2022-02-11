
const a = "a"
const b = "b"

function child() {
  const c = "c"

  console.log(a)
  console.log(b)
  console.log(c)
}

// we will see: child gets ALL variables declared in parent right away!
// but all variables declared INSIDE child (like c) are just know to the child
// so "c" cannot get accessed by the parent!
// we say that "c" belongs to the "SCOPE" of the function
// And "c" does NOT belong to the scope of the parent!
child()

