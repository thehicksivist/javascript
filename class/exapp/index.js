const express = require('express');
const app = express();

const options = {
    root: __dirname + '/'
}

//creating a variable that will act as a middleware
const getServerTime = function(req, res, next){
    req.requestTime = new Date();
    next();
  };

//tell the app to use the middleware
app.use(getServerTime);


app.get('/', function(req, res, next){
    res.sendFile("home.html", options);
  })

  app.get('/cats/:name', function(req, res) {
    res.send(`${req.params.name} says: Meow! at ${req.requestTime.toString()}`);
  })
  
  app.get('/dogs/:barks', function(req, res) {
    res.send('woof' .repeat(req.params.barks));
  })

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});