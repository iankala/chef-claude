import React from "react"

export default function Main(){
   

  const [ingredients, setIngredients] = React.useState([])
  
  const ingredientListItems = ingredients.map(ingredient => (<li key = {ingredient}>{ingredient}</li>))

  function addRecipe(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prev => [...prev, newIngredient])
    

  }

    return(
      <main>
        <form action={addRecipe}>
          <input 
            aria-label= "Add ingredient" className="input-field" 
            placeholder="e.g oregano" 
            type="text"
            name="ingredient" 
          />
          
          <button className = "ingredient-btn">+ Add ingredient</button>
        </form>
        {ingredients.length ?
           <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientListItems}</ul>
                {ingredients.length > 3
                 ? <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>: null}
            </section>
          : null}
      </main>  
    )
}