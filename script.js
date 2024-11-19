function toggleRecipe(recipeId) {
  const recipeContent = document.getElementById(recipeId);
  recipeContent.style.display = recipeContent.style.display === "block" ? "none" : "block";
}
