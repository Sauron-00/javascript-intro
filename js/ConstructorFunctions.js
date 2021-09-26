function User(name, isAdmin) {
    this.name = name
    this.isAdmin = isAdmin
    this.sayHi = function () {
        console.log('Hi Iam ' + this.name)
    }
}

let user = new User("Marsil", true)

console.log(user.name) // Marsil
console.log(user.isAdmin) // true
console.log(user.sayHi())


/**
 Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.




When a function is executed with new, it does the following steps:

A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.


 */