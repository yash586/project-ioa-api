const { json, response } = require("express");
const employeeController = require("../controllers/employee.controller");

module.exports = function (app) {
  // reademployee
  app.get("/employee", async function (request, response) {
    try {
      const employeeResult = await employeeController.readEmployee();
      response.json(employeeResult);
    } catch (error) {
      response.json(error);
    }
  });
  //readoneemployee
  app.get("/employee/:id?", async function (request, response) {
    try {
      const result = await employeeController.readOneEmployee(
        request.params.id
      );
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  });
  //new employee
  app.post("/employee", async function (request, response) {
    try {
      const result = await employeeController.createNewEmployee(request.body);
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  });
  //delete existing employee
  app.delete("/employee/:id?", async (request, response) => {
    try {
      const result = await employeeController.deleteExistingEmployee(
        request.params.id
      );
      return response.json(result);
    } catch (error) {
      return response.json(error);
    }
  });
  app.patch("/employee/:id", async (request, response) => {
    try {
      const result = await employeeController.updateOneEmployee(
        request.body,
        request.params.id
      );
      return response.json(result);
    } catch (error) {
      return response.json(error);
    }
  });
};
