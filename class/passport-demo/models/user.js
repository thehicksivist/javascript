// mongoose allows us to use models as a layer between the database
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Passport-Local Mongoose will add a username, hash and salt field to store the
// username, the hashed password and the salt value. Additionally Passport-Local
// Mongoose adds some methods to your Schema.
const passportLocalMongoose = require('passport-local-mongoose');

// We'll start with an empty schema, since we only want the fields provided by Passport for now.
// We can add custom fields for our User model later.
// mongoose schema comes with default values of username, password and email
const User = new Schema({});

// connect passportLocalMongoose to the User schema and use 'email' instead of 'username'
// initializes an instance of passportLocalMongoose, and passes the option to substitute the username login
User.plugin(passportLocalMongoose, { usernameField: 'email' });


module.exports = mongoose.model('User', User);