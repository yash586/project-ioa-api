const { json } = require("express");
const userController = require("../controllers/user.controller");

module.exports = function (app) {
  app.post("/login", async function (request, response) {
    try {
      const result = await userController.verifyLogin(request.body);
      response.json(result);
    } catch (error) {
      response.status(401).json(error);
    }
  });
};
