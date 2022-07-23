const { connection } = require("../db/models/connection");
const { readTransactionQuery } = require("../db/models/queries/transaction");
const readOneTransaction = async (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `${readTransactionQuery} WHERE t.transaction_id = ${id};`,
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
};
const readTransc = async () => {
  return new Promise((resolve, reject) => {
    connection.query(`${readTransactionQuery};`, (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};

const transact = async (transData) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO transactions (customer_id, transaction_type) VALUES(${transData.customer_id}, '${transData.transaction_type}')`,
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
};

const emiPay = () => {};

module.exports = {
  readOneTransaction,
  readTransc,
  transact,
  emiPay,
};
