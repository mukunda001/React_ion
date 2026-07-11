// src/Main.jsx

export default function Main(){

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const listItems =  ingredients.map((item) => (
        <li key = {item}> {item} </li>
    ))

    function handleSubmit(event){
        event.preventDefault();
        const fD = new FormData(event.currentTarget)
        const newIngredient = fD.get("ingredient")
        
    }

    return (
   <main>
   <form className = "Add-ingredient-Form" onSubmit = {handleSubmit}>
    <input
        type = "text" 
        placeholder = "e.g. pepper"
        aria-label = "Add ingredient"
        name = "ingredient" 
        />

    <button > Add ingredient </button>
   </form>
   <ul>
    {listItems}
   </ul>
   </main>
    )
}