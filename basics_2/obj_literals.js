
// objects literals=>

const mySym = Symbol("key1")


const jsUser = {
    name: "Anshul",
    age: 21,
    location: "shimla",
    isLoggedin: false, 
    email: "s.anshul0311@gmial.com",

    [mySym]: "mykey1"

}

console.log(jsUser.email) // wrong way to access

console.log(jsUser["email"]) // right way

console.log(jsUser[mySym])
console.log(typeof(jsUser[mySym]))

jsUser.email = "s.anshul0311@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "s.anshul0311@meta.com"

console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user")
}

console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(jsUser.greetingTwo())

