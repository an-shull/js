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

const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// const heroes = marvel.concat(dc)
// console.log(heroes)

const heroes = [...marvel, ...dc]
console.log(heroes)

const moreArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_moreArr = moreArr.flat(Infinity)
console.log(real_moreArr)

console.log(Array.isArray("anshul"))
console.log(Array.from("anshul"))

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3))