document.addEventListener('DOMContentLoaded', () => {
    console.log("Recipe Journal Loaded");

    
    alert("Welcome to Recipe Journal! Start exploring amazing recipes.");

    
    const recipes = [
        { name: "Alfredo Pasta", cuisine: "Italian", meal: "Dinner", image: "images/pasta.jpg", link: "recipedetails.html?recipe=alfredo-pasta" },
        { name: "Chocolate Cake", cuisine: "Vegan", meal: "Dessert", image: "images/cc.jpg", link: "recipedetails.html?recipe=chocolate-cake" },
        { name: "Masala Maggi", cuisine: "Indian", meal: "Breakfast", image: "images/maggie.jpg", link: "recipedetails.html?recipe=masala-maggi" },
        { name: "Vegan Tofu Scramble", cuisine: "Vegan", meal: "Breakfast", image: "images/vegan.jpg", link: "recipedetails.html?recipe=vegan-tofu-scramble" },
        { name: "Shakshuka", cuisine: "Indian", meal: "Breakfast", image: "images/best-shakshuka-recipe-3.jpg", link: "recipedetails.html?recipe=shakshuka" },
        { name: "Chilaquiles", cuisine: "Mexican", meal: "Breakfast", image: "images/chi.jpg", link: "recipedetails.html?recipe=chilaquiles" },
        { name: "Pizza", cuisine: "Italian", meal: "Dinner", image: "images/pizza.jpg", link: "recipedetails.html?recipe=pizza" },
        { name: "Pancakes", cuisine: "Vegan", meal: "Breakfast", image: "images/pc.jpg", link: "recipedetails.html?recipe=pancakes" },
        { name: "Aloo Paratha", cuisine: "Indian", meal: "Breakfast", image: "images/ap.jpg", link: "recipedetails.html?recipe=aloo-paratha" },
        { name: "French Toast", cuisine: "Vegan", meal: "Breakfast", image: "images/images.jpg", link: "recipedetails.html?recipe=french-toast" },
        { name: "Sushi", cuisine: "Chinese", meal: "Dinner", image: "images/ss.jpg", link: "recipedetails.html?recipe=sushi" }
    ];

    const form = document.getElementById('recipe-filter-form');
    const recipeCardsContainer = document.getElementById('recipe-cards-container');

    
    function displayRecipes(filteredRecipes) {
        recipeCardsContainer.innerHTML = ''; 
        if (filteredRecipes.length === 0) {
            recipeCardsContainer.innerHTML = '<p>No recipes found for your filter criteria.</p>';
        } else {
            filteredRecipes.forEach(recipe => {
                const card = document.createElement('div');
                card.classList.add('recipe-card');
                card.innerHTML = `
                    <a href="${recipe.link}">
                        <img src="${recipe.image}" alt="${recipe.name}" />
                        <h3>${recipe.name}</h3>
                        <p>${recipe.cuisine} - ${recipe.meal}</p>
                    </a>
                `;
                recipeCardsContainer.appendChild(card);
            });
        }
    }

    
    function filterRecipes() {
        const cuisine = form.cuisine.value.toLowerCase();
        const meal = form.meal.value.toLowerCase();

        const filteredRecipes = recipes.filter(recipe => {
            const matchesCuisine = cuisine ? recipe.cuisine.toLowerCase() === cuisine : true;
            const matchesMeal = meal ? recipe.meal.toLowerCase() === meal : true;
            return matchesCuisine && matchesMeal;
        });

        displayRecipes(filteredRecipes);
    }

    
    displayRecipes(recipes);

    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        filterRecipes();
    });
});
