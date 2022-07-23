const readEmployeesQuery = (id = null) => {
  const baseQuery =
    "select e.employee_id as ID, e.employee_first_name as firstName, e.employee_last_name as lastName, e.employee_dob as Dob, e.employee_email as email, r.role_name as role from employee e left join roles r on e.employee_role_id = r.role_id";
  if (id) {
    return `${baseQuery} WHERE employee_id = ${id};`;
  }
  return baseQuery;
};

const insertEmployeeQuery = (newEmployeeData) => {
  return `INSERT INTO jxc8n9pckz9j8a4a.employee (employee_first_name, employee_last_name, employee_role_id, employee_dob, employee_email) VALUES('${newEmployeeData.employee_first_name}','${newEmployeeData.employee_last_name}',${newEmployeeData.employee_role_id},'${newEmployeeData.employee_dob}','${newEmployeeData.employee_email}');`;
};

// const query =
//   "UPDATE employee SET employee_email = 'yashkalan1997@gmail.com' WHERE employee_id = 8";

module.exports = { readEmployeesQuery, insertEmployeeQuery };
