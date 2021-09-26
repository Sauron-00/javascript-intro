function varTest() {
    var x = 31
    if (true) {
        var x = 71 // gleiche Variable!
        console.log(x)  // 71
    }
    console.log(x)  // 71
}


//let is Block Scoped
//The let keyword is block-scoped (variable can be accessed only in the immediate block).
function letTest() {
    let x = 31
    if (true) {
        let x = 71  // andere variable
        console.log(x)  // 71
    }
    console.log(x)  // 31
}


function letRedeclared() {
    // Variables defined with let cannot be redeclared
    let j = "John Doe"
    //let j = 0
    console.log(j) // SyntaxError: Identifier 'j' has already been declared
}

function varsType() {
    let name = "Marsil"
    let age = 27
    let isOnline = true

    console.log('type of name is: ' + typeof (name))
    console.log('type of age is: ' + typeof (age))
    console.log('type of isOnline is: ' + typeof (isOnline))
}


// varTest()
// letTest()
// letRedeclared()
// varsType()