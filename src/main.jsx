import React from "react"

export default function Main(){
   

  const [ingredients, setIngredients] = React.useState([])
  
  const ingredientListItems = ingredients.map(ingredient => (<li key = {ingredient}>{ingredient}</li>))

  function submit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newIngredient = formData.get("ingredient")
    setIngredients(prev => [...prev, newIngredient])
    

  }

    return(
      <main>
        <form onSubmit={submit}>
          <input 
            aria-label= "Add ingredient" className="input-field" 
            placeholder="e.g oregano" 
            type="text"
            name="ingredient"
          />
          
          <button className = "ingredient-btn">+ Add ingredient</button>
        </form>
          <ul>
            {ingredientListItems}
          </ul>
      </main>  
    )
}