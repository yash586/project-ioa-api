const Joi = require("joi");

const schema = {
  user: Joi.object({
    first_name: Joi.string().max(100).required(),
    last_name: Joi.string().max(100).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    email: Joi.string().email().required(),
    phone_number: Joi.number()
      .integer()
      .min(100000000)
      .message("Invalid mobile number")
      .max(9999999999)
      .message("Invalid mobile number")
      .required(),
    dob: Joi.string(),
  }),
};

module.exports = schema;
