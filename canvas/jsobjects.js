// Assign a new empty object to a variable called me
// On the next line, add one key 'age' and set its value to your age
// On the next line, add one key 'current location' and set its value to your current location
// Use console.log to display the age and current location on screen
// Use code to add an array of hobbies to your me object
// Use code to delete your age key
// Iterate through me.hobbies and log each hobby to the screen

// BM
// Add another item to the end of the hobbies array
// Delete the first item in the hobbies array
// Add a mother key, set its value to an empty object
// Add name, age and location keys to the mother object
// Add a print_details function to the me object.
// Call the function to log some details about yourself. I.e. me.print_details() should work
// Note the difference between calling me.print_details and me.print_details()

// Assign a new empty object to a variable called me
let me = {
// On the next line, add one key 'age' and set its value to your age
age: 28,
// On the next line, add one key 'current location' and set its value to your current location
currentLoc: 'Brisbane'
}
// Use console.log to display the age and current location on screen
console.log(`My age is ${me.age}, and I am from ${me.currentLoc}.`)
// Use code to add an array of hobbies to your me object
me.hobbies = ['hiking', 'guitar', 'phonetography']
console.log(me.hobbies)
// Use code to delete your age key
delete me.age
console.log(me)
// Iterate through me.hobbies and log each hobby to the screen
for (hobby of me.hobbies) {
    console.log(hobby)
}