const express = require("express");
const request = require("request");
const apiRouter = express.Router();

apiRouter.get("/ingredients", async (req, res, next) => {
  try {
    const { search } = req.query;

    request(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${search}&number=10`,
      (error, response, body) => {
        res.send(body);
      }
    );
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/fullRecipe/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    request(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`,
      (error, response, body) => {
        res.send(body);
      }
    );
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
