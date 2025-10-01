const hi = "hello"
const rep = 5

console.log(`${hi}, my repo count is ${rep}`)

const stringname = new String('anshul')

console.log(stringname[1])
console.log(stringname.__proto__)

console.log(stringname.length)
console.log(stringname.toUpperCase())

console.log(stringname.charAt(2))
console.log(stringname.indexOf('h'))

const newstring = stringname.substring(0, 4)
console.log(newstring)

const anotherstring = stringname.slice(-8, 4)
// slice can use negative values 
console.log(anotherstring)

const newstringone = "  anshul  "
console.log(newstringone)
console.log(newstringone.trim())
// trim works on white spaces 

const url = "https://abyss.com/abyss%20"
console.log(url.replace('%20', '_'))

const splitstring = "new-js-project"
console.log(splitstring.split('-'))
