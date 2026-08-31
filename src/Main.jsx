// src/Main.jsx

import {useState} from "react"
import ClaudeRecipe from "./components/ClaudeRecipe"
import IngredientList from "./components/IngredientList"
import { getRecipeFromGemini } from "./ai"

export default function Main(){

      const [ingredients, setIngredients] = useState(["Chicken", "Rice", "Onion", "Garlic"])

        const [recipe, setRecipe] = useState()


      async function getRecipe() {
        const recipeMarkdown = await getRecipeFromGemini(ingredients)
        setRecipe(recipeMarkdown)
    }


    function handleSubmit(data){
        const newIngredient = data.get("ingredient");  
        
        if (!newIngredient) return;

    setIngredients([...ingredients, newIngredient]);

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
        ingredients.length > 0 && <IngredientList Ingredients = {ingredients}
                                                  getRecipe = {getRecipe}/>
            }
            { recipe && <ClaudeRecipe recipe={recipe} /> }
   </main>
    )}
  