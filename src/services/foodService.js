const foodModel = require("../models/foodModel");

const createFood = async (foodData) => {
  const food = new foodModel(foodData);
  await food.save();
  return food;
};

const getAllFood = async () => {
  const foods = await foodModel.find();
  return foods;
}

const getById = async (id) => {
  return await foodModel.findById(id);
};

const updateFood = async (id, foodData) => {
  const food = await foodModel.findByIdAndUpdate(id, foodData, {new: true});
  return food;
};

const deleteFood = async (id) => {
  return await foodModel.findByIdAndDelete(id);
};

module.exports = {
  createFood,
  getAllFood,
  getById,
  updateFood,
  deleteFood
};
