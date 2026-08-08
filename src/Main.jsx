// src/Main.jsx

import {useState} from "react"
import ClaudeRecipe from "./components/ClaudeRecipe"
import IngredientList from "./components/IngredientList"

export default function Main(){

    const [recipeShown, setRecipeShown] = useState(false)
    const ingredients = ["Chicken", "Rice"]
      const [Ingredients, setIngredients] = useState(ingredients)


    function handleSubmit(data){
        const newIngredient = data.get("ingredient");  
        
        if (!newIngredient) return;

    setIngredients([...Ingredients, newIngredient]);

}

    function getRecipe(){
        setRecipeShown(prevstate => true)
    }

    return (
   <main>
   <form action = {handleSubmit} className = "Add-ingredient-Form" >
    <input
        type = "text" 
        placeholder = "e.g. pepper"
        aria-label = "Add ingredient"
        name = "ingredient" 
        />

    <button> Add ingredient </button>
   </form>
   {
        Ingredients.length > 0 && <IngredientList Ingredients = {Ingredients}
                                                  getRecipe = {getRecipe}/>
            }
            { recipeShown? <ClaudeRecipe/> : null}
   </main>
    )}
  