// Create a new variable called user, set the value to: tom
// Write an if statement: if the user's name is tom, say 'Hello Tom'
// Add an else condition: say 'Hello someone other than Tom'
// Add a new variable called age, set the value to: 18
// If the user is 18, say 'welcome to the casino!'
// Research 'prompt'. Use it in your code to ask the user for their age.
// If the user is less than 18 years old, use the alert method to deny entry.

let user = prompt('what is your name?')

if (user == 'tom') {
  alert(`hello ${user}`)
} else if (user != 'tom') {
  alert('hi not tom')
}

let age = prompt('what is your age?')

if (age >= 18) {
    alert('welcome to the casino!')
  } else {
    alert('ACCESS DENIED HUMAN ERASE IMMINENT')
  }


// temp = prompt('what is the temperature?')

// if (temp >= 50) {
//   alert('Dress to impress!')
// }  else if (!temp){
//   alert('WHAT')
// } else if (temp <= 0) {
//   alert('stee insoid!')
// } else if (temp < 30 && temp < 50) {
//   alert('put on cha jekket, ind ya heyat!')
// } else if (temp < 50) {
//   alert('put on cha jekket!')
// }