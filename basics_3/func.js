function add(num1, num2){
    
    return num1 + num2
}

const result = add(6, 9)
console.log("result =", result)

function loginmsg(username){
    return `${username} just logged in`
}

console.log(loginmsg("anshul"));

function calCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calCartPrice(3,6,9,12));

// ...num1 is used to push multiple inputs in to an arary


const user = {
    username: "anshul",
    price: 699
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)

handleObject({
    username: "sam",
    price: 969
})

const myArr = [100, 200, 300, 400]

function returnVal2(getArr){
    return getArr[1]
}

console.log(returnVal2(myArr));