var { MongoClient, ObjectID } = require('mongodb')
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db('test')

    const Cars = db.collection('cars')

    Cars.find()
        .toArray()
        .then(cars => {
          console.log(cars); // Show complete collection of cars in the terminal
          cars.forEach(car => console.log(car.brand)); // Show each car brand in the terminal
        });

        
        const carID = new ObjectID('5c0dca7592d4bdc110603494');
        // Now delete the car of your choice
        Cars.findOneAndDelete({ _id: carID })
        .then(deleteLog => {
          console.log(deleteLog);
        })


        const newCar = new ObjectID('5c0dca7592d4bdc110603495');
  
        Cars.findOneAndUpdate(
            { _id: newCar }, // Find car with matching ID
            { $set: { brand: 'Subaru' } } 
            // Change brand with operator $set
          )
          .then(updateLog => {
            console.log(updateLog);
          });

    client.close();
});