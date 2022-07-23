const { connection } = require("../db/models/connection");
const {
  readEmployeesQuery,
  insertEmployeeQuery,
} = require("../db/models/queries/employee");
const { encrypt } = require("../services/encryption.service");

const readEmployee = async () => {
  return new Promise((resolve, reject) => {
    connection.query(readEmployeesQuery(), (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};

const readOneEmployee = async (id) => {
  return new Promise((resolve, reject) => {
    connection.query(readEmployeesQuery(id), (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};

const createNewEmployee = async (newEmployeeData) => {
  return new Promise(async (resolve, reject) => {
    const encryptPass = await encrypt(newEmployeeData.password);
    newEmployeeData.password = encryptPass;
    connection.query(
      insertEmployeeQuery(newEmployeeData),
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
};
const deleteExistingEmployee = (employeeID) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM jxc8n9pckz9j8a4a.employee WHERE employee_id= ${employeeID};`,
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
};
const updateOneEmployee = async (employeeData, employeeId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE employee SET employee_email = '${employeeData.employee_email}' where employee_id =${employeeId};`,
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
  readEmployee,
  readOneEmployee,
  createNewEmployee,
  deleteExistingEmployee,
  updateOneEmployee,
};
