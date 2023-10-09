import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Search from "./Search";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  return (
    <>
      <h1>👨‍🍳 What Should I Cook? 👨‍🍳</h1>
      <p>
        Don't know what to make for your next meal? Input some ingredients that
        you have and we will find some recipes for you!
      </p>
      <Search search={search} setSearch={setSearch} setRecipes={setRecipes} />
      {recipes && recipes.length ? (
        recipes.map((recipe) => {
          return (
            <div key={recipe.id} className="recipe">
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} />
              <div className="ingredients">
                {recipe.missedIngredients.length ? (
                  <div className="ingredient-list">
                    <h4>Missing Ingredients</h4>
                    <ol>
                      {recipe.missedIngredients.map((ingredient) => {
                        return <li key={ingredient.id}>{ingredient.name}</li>;
                      })}
                    </ol>
                  </div>
                ) : null}
                {recipe.usedIngredients.length ? (
                  <div className="ingredient-list">
                    <h4>Used Ingredients</h4>
                    <ol>
                      {recipe.usedIngredients.map((ingredient) => {
                        return <li key={ingredient.id}>{ingredient.name}</li>;
                      })}
                    </ol>
                  </div>
                ) : null}
                {recipe.unusedIngredients.length ? (
                  <div className="ingredient-list">
                    <h4>Unused Ingredients</h4>
                    <ol>
                      {recipe.unusedIngredients.map((ingredient) => {
                        return <li key={ingredient.id}>{ingredient.name}</li>;
                      })}
                    </ol>
                  </div>
                ) : null}
              </div>
              <button
                onClick={async (ev) => {
                  ev.preventDefault();

                  const data = await axios.get(`/api/fullRecipe/${recipe.id}`);
                  console.log(data);
                  window.open(data.data.sourceUrl);
                }}
              >
                Go to Full Recipe
              </button>
            </div>
          );
        })
      ) : (
        <h1>No Recipes</h1>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
