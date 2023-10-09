const express = require("express");
const apiRouter = express.Router();

apiRouter.get("/ingredients", async (req, res, next) => {
  try {
    const { search } = req.query;

    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${search}&number=10`
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/fullRecipe/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
