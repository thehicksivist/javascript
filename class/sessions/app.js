const express = require('express')
const session = require('express-session')
const morgan = require('morgan')


let app = express()

app.use(morgan('dev'))

app.use(session({
  secret: 'many Bothans died to bring us this information',
  cookie: {
    maxAge: 60000  // One minute
  } 
}))

app.get('/', function(req, res, next) {
    if (req.session.views) {
      req.session.views++
      res.setHeader('Content-Type', 'text/html')
      res.write('<p>views: ' + req.session.views + '</p>')
      res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
      res.end()
    } else {
      req.session.views = 1
      res.end('welcome to the session demo. refresh!')
    }

  //   req.session.destroy(err => {
  //     // Session does not exist at this point
  // })
  })

app.listen(3000)

