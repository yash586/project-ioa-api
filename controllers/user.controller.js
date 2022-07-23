const { connection } = require("../db/models/connection");
const { validate } = require("../services/encryption.service");

const verifyLogin = (data) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from customers c where email = '${data.username}';`,
      async (error, elements) => {
        if (error) {
          return reject(error);
        }
        console.log(elements);
        if (elements.length > 0) {
          const comparison = await validate(
            data.password,
            elements[0].password
          );
          if (comparison) {
            return resolve(elements[0]);
          }
        }
        return reject({ message: "Login unsuccesful" });
      }
    );
  });
};

module.exports = {
  verifyLogin,
};
