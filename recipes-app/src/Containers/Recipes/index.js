import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from "firebase/firestore";

import InfiniteScroll from "react-infinite-scroll-component";

import RecipeCard from "../../Components/RecipeCard";

import Container from "./styles/Container";
import RecipesContainer from "./styles/RecipesContainer";

import { db } from "../../Firebase/firebaseConfig";
import { getFoodType } from "../../utils/functions";
import Loading from "../../Components/Loading";
import Title from "../../Components/Title";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [lastRecipe, setLastRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getDocuments = async (response) => {
    const documentSnapshots = await getDocs(response);
    const documents = documentSnapshots.docs;
    const documentData = [];
    documents.forEach((doc) => {
      documentData.push(doc.data());
    });
    const lastElement = documents[documentSnapshots.docs.length - 1];
    return { documentData, lastElement };
  };

  useEffect(() => {
    const getFirstRecipes = async () => {
      setIsLoading(true);
      const first = query(collection(db, "recipes"), orderBy("id"), limit(10));
      const { documentData, lastElement } = await getDocuments(first);
      setRecipes(documentData);
      setLastRecipe(lastElement);
      setIsLoading(false);
    };
    getFirstRecipes();
  }, []);

  const getNextRecipes = async () => {
    const next = query(
      collection(db, "recipes"),
      orderBy("id"),
      startAfter(lastRecipe),
      limit(10)
    );
    const { documentData, lastElement } = await getDocuments(next);
    setRecipes(recipes.concat(documentData));
    setLastRecipe(lastElement);
  };

  return (
    <Container>
      {isLoading ? (
        <Loading id="loading-icon" />
      ) : (
        <>
          <Title>Recipes</Title>

          <InfiniteScroll
            dataLength={recipes.length}
            next={getNextRecipes}
            hasMore={true}
          >
            <RecipesContainer>
              {recipes.map((recipe) => (
                <RecipeCard
                  image={recipe.image}
                  name={recipe.title}
                  type={getFoodType(recipe)}
                  time={recipe.readyInMinutes}
                  id={recipe.id}
                />
              ))}
            </RecipesContainer>
          </InfiniteScroll>
        </>
      )}
    </Container>
  );
};

export default Recipes;
