const foodService = require("../services/foodService");

const createFood = async (req, res) => {
  try {
    const { name, category, quantity, expirationDate, price } = req.body;
    if (!name || !category || !quantity || !expirationDate || !price) {
      return res.status(400).json({
        message: "Preencha todos os campos para finalizar o cadastro!",
      });
    }

    const food = await foodService.createFood(req.body);

    res.status(201).json({
      message: "Cadastro realizado com sucesso",
      food: food,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllFood = async (req, res) => {
  try {
    const foods = await foodService.getAllFood();

    if (foods.length === 0) {
      return res.status(400).json({
        message: "Não há produtos cadastrado no estoque!",
      });
    }

    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFoodById = async (req, res) => {
  try {
    const food = await foodService.getById(req.params.id);

    if (!food) {
      return res.status(400).json({
        message: "Produto não cadastrado no estoque!",
      });
    }

    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updtFood = async (req, res) => {
  try {
    const id = req.params.id;
    const foodData = req.body;
    const food = await foodService.updateFood(id, foodData);

    if (!food) {
      return res.status(400).json({
        message: "Produto não encontrado no estoque!",
      });
    }

    res.status(200).json({
      message: "Produto atualizado com sucesso!",
      food: food,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const dlteFood = async (req, res) => {
  try {
    const id = req.params.id;
    const food = await foodService.deleteFood(id);

    if (!food) {
      return res.status(400).json({
        message: "Produto não encontrado no estoque!",
      });
    }

    res.status(200).json({
      message: "Produto deletado com sucesso!",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFood,
  getAllFood,
  getFoodById,
  updtFood,
  dlteFood,
};
