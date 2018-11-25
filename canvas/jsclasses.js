// Challenge
// Create a Dog class. Each dog should have a name and a location.
// Add a speak method that logs "Woof! my name is {name}"
// Add a walk method that accepts two arguments: location (string) and distance (integer)
// Add a display_walks method that console.logs all of the dog's walks
// Add a total_distance method that returns the total distance of all the walks
// Research: what's the difference between console.log and return? Make sure you have a solid understanding

// Beast Mode
// Create a Walk class with properties: location and distance
// Update your Dog class: when the walk method is called, use this new Walk class to create a walk
// Introduce a timestamp to each walk, automatically add the current time when you instantiate a walk

// Beast Mode++
// Create a basic GUI in the browser to interact with your classes. Use buttons, prompts and lists to create 
// and display dogs (view example).
// Add walks to the GUI. I.e. add a `New Walk` button to each dog and display their walks under their name.

// Create a Dog class. Each dog should have a name and a location.

let walks = {}
let i = parseInt(0)

class Dog {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

// Add a speak method that logs "Woof! my name is {name}"
    
    bark() {
       return `Woof! my name is ${name}`
    }

// Add a walk method that accepts two arguments: location (string) and distance (integer)
    walk(location, distance) {
        walks[i] = [location, distance]
        i++
    }

// Add a display_walks method that console.logs all of the dog's walks
    display_walks() {
        console.log(`${this.name} the doggo has been on these walks: ${Object.values(walks)}`)
    }
// Add a total_distance method that returns the total distance of all the walks
    total_distance() {

        let total = 0
        let values = Object.values(walks)

        values.forEach(function(value) {
            value.forEach(function (num) {
                if (Number.isInteger(num)) {
                    total += num
                }
            })
           
        })
        console.log(`The total distance walked is ${total} kilometers`)
    }
}

let dog = new Dog('bork', 'Brisbane')
dog.walk('Sydney', 30)
dog.walk('Melbourne', 40)
dog.display_walks()
dog.total_distance()


// Research: what's the difference between console.log and return? Make sure you have a solid understanding