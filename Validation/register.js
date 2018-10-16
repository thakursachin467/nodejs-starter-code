const validator = require('validator');
const isEmpty = require('./is-Empty');

module.exports = function validateRegisterUser(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.rePassword = !isEmpty(data.rePassword) ? data.rePassword : '';
  if (!validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = 'Name must be between 3 and 30 characters';
  }
  if (validator.isEmpty(data.name)) {
    errors.name = 'Name is required';
  }
  if (validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }
  if (!validator.isEmail(data.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }
  if (validator.isEmpty(data.rePassword)) {
    errors.rePassword = 'Confirm password is required';
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be between 6 and 30 characters';
  }
  if (!validator.equals(data.password, data.rePassword)) {
    errors.rePassword = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}