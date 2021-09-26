let user = {
    name: "Marsil",
    age: 27,
    "likes JS": true,
    sayHi() { return `Hello ` + this.name }
}

console.log(user)
console.log(user.name)
console.log(user.age)
console.log(user["likes JS"])
console.log(user.sayHi())


// loop a Object
for (let key in user) {
    console.log(key)
    console.log(user[key])
}

// Objects are associative arrays with several special features.


/**
JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.
 */
let json = JSON.stringify(user)
// console.log(typeof json)
console.log(json)