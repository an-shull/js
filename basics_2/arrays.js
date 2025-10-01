// arrays =>
// js arrays are resizable
// arrays make a shallow copy in js : copies share the same reference point 

const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr[2])

// methods =>

//myArr.push(6)
//myArr.push(7)
//myArr.pop()
//myArr.unshift(9)
//myArr.shift(9)

//console.log(myArr.includes(3))
//console.log(myArr.indexOf(4))

//const newArr = myArr.join()
// adds all elements into a string

//console.log(myArr)
//console.log(newArr)
//console.log(typeof newArr)

// slice vs splice

console.log("A", myArr)

const a1 = myArr.slice(1, 3)

console.log(a1)
console.log("B", myArr)

const a2 = myArr.splice(1, 3)

console.log("C", myArr)
console.log(a2)

// slice does not manipulate the original array 
// splice manipulates the original array