import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {

  // Declaring a new state for my Recipe data
  const [recipes, setRecipes] = useState(RecipeData);

  // Declaring function to create the recipes, this will flow down into RecipeCreate.js
  const createRecipe = (newRecipe) =>
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);

  // Declaring function to delete the selected recipe, this will flow down into RecipeList.js
  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    );

  // Returning the required JS to run the app.
  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
