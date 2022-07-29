export const getDescription = (description) =>
  description.replace(/<\/?[^>]+(>|$)/g, "");

export const getFoodType = (recipe) => {
  if (recipe.vegetarian && !recipe.vegan) return "Vegetarian";
  if (recipe.vegan) return "Vegan";
  return "Not vegan";
};
