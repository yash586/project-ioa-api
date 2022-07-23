const readTransactionQuery =
  "select t.transaction_id as ID, t.transaction_type as 'Type',c.first_name as First_Name, c.last_nme as Last_Name, c.email as Email, c.phone_number as Phone_Number from transactions t left join customers c on t.customer_id = c.customer_id";

module.exports = { readTransactionQuery };
