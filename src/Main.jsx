// src/Main.jsx

import {useState} from "react"

export default function Main(){

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
      const [Ingredients, setIngredients] = useState(ingredients)


    function handleSubmit(data){
        const newIngredient = data.get("ingredient");  
        
        if (!newIngredient) return;

    setIngredients([...Ingredients, newIngredient]);

}

    const listItems =  Ingredients.map((item) => (
        <li key = {item}> {item} </li>
    ))

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
   <ul>   
    {listItems}
   </ul>
   </main>
    )
}