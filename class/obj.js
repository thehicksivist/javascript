// OBJECT
// let recipe = { recipeTitle: 'pbnj', 
//                 servings: 1, 
//                 letsCook: function(){
//                     console.log(`I\'m hungry! Let\'s make ${this.recipeTitle}!`)
//                 },
//                 ingredients: ['2 slices of bread', 'penabudda', 'jelleh'], 
//                 directions: 'Get da bread, put penabudda on one slice, put jelleh on da other, put the 2 slices together, eat dat good thang up.'} 
// console.log(recipe.recipeTitle)

// for (let ingredient of recipe.ingredients) {
//     console.log(ingredient)
// }

// recipe.letsCook()


// CONSTRUCTOR FUNCTION VERSION --------------------------------------------------------------------------------
// function Recipe(recipeTitle, servings, ingredients, directions){
//     this.recipeTitle = recipeTitle;
//     this.servings = servings;
//     this.ingredients = ingredients;
//     this.directions = directions;
// }

// Recipe.prototype.letsCook = function(){
//     console.log(`I\'m hungry! Let\'s make ${this.recipeTitle}!`)
// }

// Recipe.prototype.listIngredients = function(){
//     console.log(`${this.ingredients}`)
// }

// let lunch = new Recipe('pbnj', 1, ['2 slices of bread', 'penabudda', 'jelleh'], 'Get da bread... yadda yadda')
// lunch.letsCook()
// lunch.listIngredients()


// CLASS REFACTOR ---------------------------------------------------------------------------------------
class Recipe {
    constructor(recipeTitle, servings, ingredients, directions) {
        this.recipeTitle = recipeTitle;
        this.servings = servings;
        this.ingredients = ingredients;
        this.directions = directions;
    }
    // Getter
    get listIngredients() {
        return this.ingredients
    }
    // Method
    letsCook() {
          console.log(`I\'m hungry! Let\'s make ${this.recipeTitle}!`)

    }
  }


let lunch = new Recipe('pbnj', 1, ['2 slices of bread', 'penabudda', 'jelleh'], 'Get da bread... yadda yadda')
lunch.letsCook()
console.log(lunch.listIngredients)