const express = require('express');
const router = express.Router();

const foodController = require('../controllers/foodController');

router.post('/foods', foodController.createFood);
router.get('/foods', foodController.getAllFood);
router.get('/foods/:id', foodController.getFoodById);
router.put('/foods/:id', foodController.updtFood);
router.delete('/foods/:id', foodController.dlteFood);

module.exports = router;