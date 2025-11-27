export default function Main(){
    return(
      <main>
        <form>
          <input aria-label= "Add ingredient" className="input-field" placeholder="e.g oregano" type="text" />
          <button onclick ="ingredient()" className = "ingredient-btn">+ Add ingredient</button>
        </form>
      </main>
    )
}