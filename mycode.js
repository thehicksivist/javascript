// // let thisIsHowCooliAm = 'i am cool'

// // let a = 9
// // let b = 44
// // let c = a + b
// // let d = c * b

// // let firstName = 'Jimmy '
// // let lastName = 'Jams'
// // let fullName = firstName + lastName

// // alert('Hello World!')
// // alert(thisIsHowCooliAm)
// //       console.log('Secret message')
// //     //   below is the first example for printing text in various ways
// //       console.log('Writing to the console<br>')
// //         console.log('there were ', c, ' cockroaches in the kitchen<br>', fullName, ' ate ', d, ' of them')

// // function total() {

// // let pretip = parseInt(prompt('Enter your pre-tip bill', '0.00'))
// // let tipperc = parseInt(prompt('Enter the tip percentage', '15')) / 100
// // let total = pretip + tipperc

// // alert(`Your total bill, with tip, is $${total.toFixed(2)}`)
// // }

// // total()

// // let firstName = Jimmy
// // let lastName = Jams

// // function fullName(firstName, lastName) {
// //   alert(`Welcome ${firstName} ${lastName}`)
// // }

// // fullName(prompt('What is your first name?'), prompt('What is your second name?'))

// // let fullerName = (firstName, lastName) => {
// //   // console.log(firstName + lastName)
// //   return firstName + lastName
// // }

// // console.log(fullerName(prompt('What is your first name?'), prompt('What is your second name?')))


// // WHAT CLOTHES SHOULD I WEAR?
// // temp = prompt('what is the temperature?')

// // if (temp >= 50) {
// //   alert('Dress to impress!')
// // }  else if (!temp){
// //   alert('WHAT')
// // } else if (temp <= 0) {
// //   alert('stee insoid!')
// // } else if (temp < 30 && temp < 50) {
// //   alert('put on cha jekket, ind ya heyat!')
// // } else if (temp < 50) {
// //   alert('put on cha jekket!')
// // }

// // TIMES TABLE
// // for (let i = 1; i <= 12; i++) { 
// //   for (let x = 1; x <= 12; x++) {
// //    console.log(i * x)
// //   //  console.log(" ")
// //   }
// //   console.log('\n')
// // }

// let bestFoods = ['curry', 'pizza', 'burrito', 'strawberry', 'blueberry', 'sushi', 'banana', 'oats', 'spaghetti', 'toast']
// // console.log(`The best of the best are ${bestFoods[0]} and ${bestFoods[2]}`)

// // bestFoods.splice(2,3)
// // console.log(bestFoods)

// // for (let food of bestFoods){
// // console.log(food)
// // }

// // for (let food in bestFoods){
// //   if (food % 3 == 0) {
// //   console.log(`${food} : ${bestFoods[food]} ---`)
// //   } else {
// //   console.log(`${food} : ${bestFoods[food]}`)
// //   }
// //   }

// // bestFoods.map()

// let upFoods = bestFoods.map( x => x.toUpperCase() ) 

// // for (let food in upFoods){
// //   if (food % 3 == 0) {
// //   console.log(`${food} : ${upFoods[food]} ---`)
// //   } else {
// //   console.log(`${food} : ${upFoods[food]}`)
// //   }
// //   }

// // choice = prompt('what would you like to eat?')
// //   if (upFoods.find( x => x == choice.toUpperCase())) {
// //   alert(`Enjoy your ${choice}`)
// //   } else {
// //   alert(`Sorry, we don't have ${choice}`)
// //   }

// let vowels = ['a', 'e', 'i', 'o', 'u']

// // my solution
// let capFoods = upFoods.filter( x => vowels.find( v => v === x[0].toLowerCase())) // [ 5, 7 ]

// // more efficient 
// // let capFoods = upFoods.filter( x => vowels.includes(x[0].toLowerCase()))  // [ 5, 7 ]
// document.write(capFoods)

// CONVERT DECIMAL TO BINARY 
function decToBinary(decimal) 
{ 
    // array to store binary number 
    let arr = [] 
  
    // counter for binary array 
    i = 0;
    while (decimal > 0) { 
  
        // storing remainder in binary array
        arr[i] = decimal % 2
        decimal = parseINT(decimal / 2)
        i++
    }
  
    // printing binary array in reverse order 
    return arr.reverse()
} 

console.log(decToBinary(5))
console.log(decToBinary(15))
console.log(decToBinary(345))
