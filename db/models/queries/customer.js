const readCustomerQuery = (id = null) => {
  const baseCustomerQuery =
    "select c2.customer_id as ID, t2.transaction_type as 'Type',c2.first_name as First_Name, c2.last_nme as Last_Name, c2.email as Email, c2.phone_number as Phone_Number from transactions t2 left join customers c2 on c2.customer_id = t2.transaction_id";
  if (id) {
    return `${baseCustomerQuery} WHERE t2.transaction_id = ${id};`;
  }
  return baseCustomerQuery;
};

const insertCustomerQuery = (customerQuery) => {
  return `INSERT INTO jxc8n9pckz9j8a4a.customers (first_name, last_nme, dob, password, email, phone_number) VALUES('${customerQuery.first_name}', '${customerQuery.last_name}', '${customerQuery.dob}', '${customerQuery.password}', '${customerQuery.email}', '${customerQuery.phone_number}');`;
};

module.exports = {
  readCustomerQuery,
  insertCustomerQuery,
};
