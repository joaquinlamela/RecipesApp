import React from "react";
import RecipeCard from "../../Components/RecipeCard";

import Container from "./styles/Container";
import RecipesContainer from "./styles/RecipesContainer";

const Recipes = () => {
  const recipes = [
    {
      image: "https://spoonacular.com/recipeImages/1039293-556x370.jpg",
      name: "Pulled Pork Nachos",
      time: 480,
      type: "Vegetarian",
      id: 1039293,
    },
    {
      image: "https://spoonacular.com/recipeImages/1039293-556x370.jpg",
      name: "Pulled Pork Nachos",
      time: 480,
      type: "Vegetarian",
      id: 1039293,
    },
    {
      image: "https://spoonacular.com/recipeImages/1039293-556x370.jpg",
      name: "Pulled Pork Nachos",
      time: 480,
      type: "Vegetarian",
      id: 1039293,
    },
    {
      image: "https://spoonacular.com/recipeImages/1039293-556x370.jpg",
      name: "Pulled Pork Nachos",
      time: 480,
      type: "Vegetarian",
      id: 1039293,
    },
    {
      image: "https://spoonacular.com/recipeImages/1039293-556x370.jpg",
      name: "Pulled Pork Nachos",
      time: 480,
      type: "Vegetarian",
      id: 1039293,
    },
    {
      image: "https://spoonacular.com/recipeImages/1039293-556x370.jpg",
      name: "Pulled Pork Nachos",
      time: 480,
      type: "Vegetarian",
      id: 1039293,
    },
    {
      image: "https://spoonacular.com/recipeImages/1039293-556x370.jpg",
      name: "Pulled Pork Nachos",
      time: 480,
      type: "Vegetarian",
      id: 1039293,
    },
    {
      image: "https://spoonacular.com/recipeImages/1039293-556x370.jpg",
      name: "Pulled Pork Nachos",
      time: 480,
      type: "Vegetarian",
      id: 1039293,
    },
  ];

  return (
    <Container>
      <RecipesContainer>
        {recipes.map((recipe) => (
          <RecipeCard
            image={recipe.image}
            name={recipe.name}
            type={recipe.type}
            time={recipe.time}
            id={recipe.id}
          />
        ))}
      </RecipesContainer>
    </Container>
  );
};

export default Recipes;
