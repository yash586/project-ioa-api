const bcrypt = require("bcrypt");
const saltRounds = 10;
async function encrypt(password) {
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  return encryptedPassword;
}

async function validate(password, encryptedPassword) {
  const comparison = await bcrypt.compare(password, encryptedPassword);
  return comparison;
}

module.exports = {
  encrypt,
  validate,
};
