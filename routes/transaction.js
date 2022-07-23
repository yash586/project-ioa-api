const transactionController = require("../controllers/transaction.controller");

module.exports = function (app) {
  app.get("/transactions/:id", async (request, response) => {
    try {
      const result = await transactionController.readOneTransaction(
        request.params.id
      );
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  });
  app.get("/transactions", async function (request, response) {
    try {
      const result = await transactionController.readTransc();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  });

  // const mockTrasnferBody = {
  //   customer_id: 1,
  //   type: 'debit'
  // }

  app.post("/transact", async function (request, response) {
    try {
      const ans = await transactionController.transact(request.body);
      response.json(ans);
    } catch (error) {
      response.json(error);
    }
  });

  app.get("pay", function (request, response) {});
};
