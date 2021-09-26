// What is an Array?
// An array is a special variable, which can hold more than one value at a time.


// Syntax:
// const array_name = [item1, item2, ...]

const names = ['Marsil', 'Alashkar', 'Mark']
console.log(names[0])


const brands = [
    'Bild',
    'Welt',
    'Idealo'
]
console.log(brands.sort())
console.log(brands[1])
console.log(brands.length)

// loop Array
for (let x = 0; x < brands.length; x++) {
    console.log('==> ' + brands[x])
}