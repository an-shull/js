
// objects singleton =>

// const tinderUser = new Object() // singleton

const tinderUser = {} // non singleton

 tinderUser.id = "123abc"
 tinderUser.name = "sam"
 tinderUser.isLoggedIn = false

//console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const regUser = {
    emamil: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "anshul",
            lastname: "sharma"
        }
    }
}

// console.log(regUser.fullname)
// console.log(regUser.fullname.userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const users = [
    {
        id: 1,
        email: "id1@gmail.com"
    },
    {
        id: 2,
        email: "id2@gmail.com"
    },
    {
        id: 3,
        email: "id3@gmail.com"
    }
]

console.log(users[1].email)

