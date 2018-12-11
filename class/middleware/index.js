const express = require('express')
// body parser allows the request to access the body of the page
const bodyParser = require('body-parser')
const app = express()

const students = ['Jane', 'Jack', 'John', 'Jan', 'Jake', 'Jill', 'Jone', 'June']

// Insert the body parser and tell it we want to parse request bodies as JSON
// use is the direction to use a type of middleware
app.use(bodyParser.json())

app.get('/api/students', (req, res) => {
 console.log('Getting a list of students')
 res.json(students)  // return a JSON response
})

app.get('/addStudent', (req, res) => {
    res.send(`
        <form action="/api/students" method="post">
            <input name="student">
            <button type="submit">Add Student</button>
        </form>
    `)
})

// post allows the creation of a new student
app.post('/api/students', (req, res) => {
    const newStudent = req.body.student
    console.log('Adding a new student:', newStudent)
    students.push(newStudent)
    res.json(newStudent)
   })   

   /* Landing page */
app.get('/', (req, res) => {
    // Randomly sort the array (shuffle)
    students.sort(x => Math.random() < 0.5 ? -1 : 1)
    res.send(
      `<h1>Lunchify</h1>
      <p>Matched: ${students[0]} with ${students[1]}</p>`
    )
   })
   

app.listen(3000)