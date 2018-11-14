// CONVERT DECIMAL TO BINARY 
function decToBinary(decimal) { 
    // array to store binary number 
    let arr = [] 
  
    // counter for binary array 
    let i = 0
    while (decimal > 0) { 
  
        // storing remainder in binary array
        arr[i] = decimal % 2
        decimal = parseInt(decimal / 2)
        i++
    }
  
    // printing binary array in reverse order 
    return arr.reverse().join('')
} 

console.log(decToBinary(5))
console.log(decToBinary(15))
console.log(decToBinary(345))