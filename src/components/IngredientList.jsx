// IngredientList.jsx

export default function IngredientList(props){

        const listItems =  props.Ingredients.map((item) => (
        <li key = {item}> {item} </li>
    ))
    
    return(

        <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{listItems}</ul>
                <div className="get-recipe-container" ref = {props.ref}>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick = {props.getRecipe} >Get a recipe</button>
                </div>
            </section>
    )
}