let myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof(Date))
console.log(typeof(myDate))

let newDate =  new Date(2025, 9, 1)
console.log(newDate.toLocaleString())

let myTimestamp = Date.now()

console.log(myTimestamp)
console.log(myDate.getTime())
console.log(Math.floor(Date.now()/1000)) // seconds

console.log(myDate.getDay())
console.log(myDate.getMonth())
console.log(myDate.getFullYear())

console.log(myDate.toLocaleString('default', {
    weekday: "long",
}))

