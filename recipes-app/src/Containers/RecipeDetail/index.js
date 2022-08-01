import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { recipeListAtom } from "../../recoil/atom/recipesAtom";

import Title from "../../Components/Title";
import Toggle from "../../Components/Toggle";
import Table from "../../Components/Table";

import { ICONS_TYPES } from "../../utils/constants";
import { getDescription } from "../../utils/functions";

import Container from "./styles/Container";
import RecipeInformation from "./styles/RecipeInformation";
import RecipeInstructions from "./styles/RecipeInstructions";
import TimeContainer from "./styles/TimeContainer";
import RecipeImage from "./styles/RecipeImage";
import RecipeDetailContainer from "./styles/RecipeDetailContainer";
import Description from "./styles/Description";
import Loading from "../../Components/Loading";
import SubTitle from "../../Components/SubTitle";
import Instruction from "../../Components/Instruction";

import { db } from "../../Firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { isEmpty } from "lodash";
import ErrorMessage from "../Home/styles/ErrorMessage";
import Ingredient from "../../Components/Ingredient";

const RecipeDetail = () => {
  const params = useParams();
  const recipeId = parseInt(params.id);
  const recipes = useRecoilValue(recipeListAtom);
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [recipeSteps, setRecipeSteps] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      setIsLoading(true);
      const docRef = doc(db, "recipes", `${recipeId}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setRecipe(data);
        setRecipeSteps(data.analyzedInstructions[0].steps);
        setRecipeIngredients(data.extendedIngredients);
        setIsLoading(false);
      } else {
        setHasError(true);
      }
    };

    setIsLoading(true);
    recipes.forEach((element) => {
      if (element.id === recipeId) {
        setRecipe(element);
        setRecipeSteps(element.analyzedInstructions[0].steps);
        setRecipeIngredients(element.extendedIngredients);
      }
    });
    setIsLoading(false);

    if (isEmpty(recipe)) {
      fetchRecipe().catch(console.error);
    }
  }, [recipe, recipeId, recipes]);

  const getTypesOfRecipe = () => {
    const items = [];
    items.push({
      variable: "Sustainable",
      value: recipe.sustainable ? "Yes" : "No",
    });
    items.push({
      variable: "Vegetarian",
      value: recipe.vegetarian ? "Yes" : "No",
    });
    items.push({
      variable: "Vegan",
      value: recipe.vegan ? "Yes" : "No",
    });
    items.push({
      variable: "Gluten free",
      value: recipe.glutenFree ? "Yes" : "No",
    });
    items.push({
      variable: "Dairy free",
      value: recipe.dairyFree ? "Yes" : "No",
    });
    items.push({
      variable: "Low Fodmap",
      value: recipe.lowFodmap ? "Yes" : "No",
    });
    return items;
  };

  return (
    <Container>
      {isLoading ? (
        <>
          <Loading id="loading-icon" />
          {hasError && (
            <ErrorMessage>
              Apologies for the inconvenience caused. We have not found the
              recipe you were looking for.
            </ErrorMessage>
          )}
        </>
      ) : (
        <>
          <RecipeInformation>
            <Title>{recipe.title}</Title>
            <TimeContainer>
              <Toggle
                icon={ICONS_TYPES.timer}
                title="Cook time"
                value={`${recipe.readyInMinutes} minutes`}
              />
              <Toggle
                icon={ICONS_TYPES.like}
                title="Liked by"
                value={`${recipe.aggregateLikes} people`}
              />
              <Toggle
                icon={ICONS_TYPES.cook}
                title="Healthy"
                value={recipes.veryHealthy ? "Yes" : "No"}
              />
            </TimeContainer>
            <RecipeDetailContainer>
              <RecipeImage src={recipe.image} />
              <Table
                items={getTypesOfRecipe()}
                tableTitle="Recipe details"
                tableFooter="This information is added by users, take it with caution and check the data."
              />
            </RecipeDetailContainer>
            <Description>{getDescription(recipe.summary)}</Description>
          </RecipeInformation>

          <RecipeInstructions>
            <SubTitle>Ingredients</SubTitle>
            {recipeIngredients.map((ingredient) => (
              <Ingredient ingredient={ingredient} />
            ))}
          </RecipeInstructions>

          <RecipeInstructions>
            <SubTitle>Directions</SubTitle>
            {recipeSteps.map((step) => (
              <Instruction instruction={step} />
            ))}
          </RecipeInstructions>
        </>
      )}
    </Container>
  );
};

export default RecipeDetail;
