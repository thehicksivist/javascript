// Build a basic contact form to post data to our web server. 
// GET /contact should show a contact form. Keep it ugly, we'll style later.
// Create an /enquiries page which lists all of the enquires.

// Beast Mode
// Create a show page for enquiries. E.g. /enquiries/:id should show a specific enquiry.
// Add a 'delete' button to each enquiry.
// Use CSS to improve the look of the contact form.

// Beast Mode++
// Password protect the /enquires page.



const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/portfolio')

const Enquiry = mongoose.model('Enquiry', {
  name: String,
  email: String,
  phone: String,
  message: String
})

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/contact', (req, res) => {
  const enquiry = new Enquiry({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  })

  enquiry.save().then(() => {
    res.send('Thank you for your message. I will get back to you soon!')
  }).catch((err) => {
    res.send(`Something went wrong: ${err}`)
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
