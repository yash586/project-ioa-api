const { connection } = require("../db/models/connection");
const {
  readCustomerQuery,
  insertCustomerQuery,
} = require("../db/models/queries/customer");
const { encrypt } = require("../services/encryption.service");
const readCustomers = async () => {
  return new Promise((resolve, reject) => {
    connection.query(readCustomerQuery(), (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};

const readOneCustomer = async (customerId) => {
  return new Promise((resolve, reject) => {
    connection.query(readCustomerQuery(customerId), (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};

const createOneCustomer = async (customerData) => {
  return new Promise(async (resolve, reject) => {
    const pass = await encrypt(customerData.password);
    customerData.password = pass;
    connection.query(insertCustomerQuery(customerData), (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};

const updateOneCustomer = (customerData, customerId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `update customers set email = '${customerData.email}' where customer_id =${customerId};`,
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
};

const deleteOneCustomer = (customerId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM jxc8n9pckz9j8a4a.customers WHERE customer_id= ${customerId} ;`,
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
};

module.exports = {
  readCustomers,
  readOneCustomer,
  createOneCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
