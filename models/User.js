const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ = require('lodash');

//create a schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: { createdAt: 'created_on', updatedAt: 'modified_on' },
  autoIndex: false
});

const User = mongoose.model('users', UserSchema);

User.addUser=async (userData)=>{
  const user = new User(userData);
  const result = await user.save();
  try {
    return result;
  } catch (error) {
    return error;
  }
};

User.getUser=async (filter)=>{
  const query = await User.findOne(filter).lean().exec();
  try {
    return query;
  } catch (error) {
    return error;
  }
};

User.getUsers=async (filter,limit,skip)=>{
  const query = await User.find(filter).lean().skip(skip).limit(limit).exec();
  try {
    return query;
  } catch (error) {
    return error;
  }
};

User.editUser=async (filter,update,options={})=>{
  const query = await User.findOneAndUpdate(filter, update, options).lean().exec();
  try {
    if (!_.isUndefined(query)) {
      return query;
    }

  } catch (error) {
    return error;
  }
};

module.exports = User;
