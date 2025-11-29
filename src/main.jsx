export default function Main(){

  const ingredients = ["Tomatoes", "Chicken", "Soup"]
  
  const ingredientListItems = ingredients.map(ingredient => (<li key = {ingredients}>{ingredient}</li>))

  function submit(e) {
    e.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
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