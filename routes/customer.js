const { json, response } = require("express");
const customerController = require("../controllers/customers.controller");
const { addUserValidation } = require("../validation/users/user.validation");

module.exports = function (app) {
  app.get("/customers", async function (request, response) {
    try {
      const result = await customerController.readCustomers();
      response.json(result);
    } catch (error1) {
      response.json(error1);
    }
  });

  app.get("/customers/:id?", async function (request, response) {
    try {
      const ans = await customerController.readOneCustomer(request.params.id);
      response.json(ans);
    } catch (error) {
      response.json(error);
    }
  });

  app.post("/customers", addUserValidation, async function (request, response) {
    try {
      const ans = await customerController.createOneCustomer(request.body);
      response.json(ans);
    } catch (error) {
      response.json(error);
    }
  });

  app.delete("/customers/:id?", async (request, response) => {
    try {
      const result = await customerController.deleteOneCustomer(
        request.params.id
      );
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  });
  app.patch("/customers/:id?", async (request, response) => {
    try {
      const result = await customerController.updateOneCustomer(
        request.body,
        request.params.id
      );
      return response.json(result);
    } catch (error) {
      response.json(error);
    }
  });
  app.patch("/test", async (request, response) => {
    try {
      console.log(request.body);
    } catch (error) {
      response.json("Patch unsuccessful");
    }
  });
};
