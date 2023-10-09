const express = require("express");
const apiRouter = express.Router();

apiRouter.get("/ingredients", async (req, res, next) => {
  const { search } = req.query;

  const response = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${search}&number=10`
  );
  const data = await response.json();
  res.send(data);
});

apiRouter.get("/fullRecipe/:id", async (req, res, next) => {
  const { id } = req.params;
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=60635bdefb2746fa84d9f456e8861252`
  );
  const data = await response.json();
  res.send(data);
});

module.exports = apiRouter;
