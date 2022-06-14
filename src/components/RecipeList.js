const RecipeList = () => {

    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ]
    
    
    const ingredientsList = (ingredients) => {
            let ls = ingredients.map((ingredient, index) => {
                return (
                <li key={index}>{ingredient}</li>
                )
            }) 
            return ls;   
    }

    const cakesList = cakes.map((cake) => {
       return (
       <>
        <h3>{cake.cakeName}</h3>
        <ul>{ingredientsList(cake.ingredients)}</ul>
        <p>Rating: {cake.rating}</p>
        
        </>
       )
    })

    return (
    <>
        <h1>List of Cakes</h1>
        <div>{cakesList}</div>
    </>
    
    );
}

export default RecipeList;