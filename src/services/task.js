const Task = require('../models/task');

const create = async (data) => {
  return Task.create(data);
};

const update = async (id, updates) => {
  return Task.findByIdAndUpdate(id, updates, { new: true });
};

const getOneByQuery = async (query) => {
  return Task.findOne(query);
};

const getAll = async () => {
  return Task.find();
};

module.exports = { create, update, getOneByQuery, getAll };
