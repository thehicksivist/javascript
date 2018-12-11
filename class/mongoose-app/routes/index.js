var express = require('express');
var router = express.Router();
const Ingredient = require('../models/Ingredient')


/* GET home page. */
router.get('/', (req, res) => {
  Ingredient.find().then(ingredients => {
    res.render('index', {
      title: 'Ingredients',
      ingredients: ingredients
    })
  })
})  

// POST route
router.post('/', (req, res) => {
  const name = req.body.ingredient_name
  let ingredient = new Ingredient()
  ingredient.name = name
  ingredient.save().then(() => {
    res.redirect('/')
  })
})


module.exports = router;

