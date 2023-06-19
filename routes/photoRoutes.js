const express = require("express");
const router = express.Router();
const photoController = require('../controllers/photoController');

router.get('/', photoController.index);
router.get('/:id', photoController.photo);
router.delete('/:id', photoController.deletePhoto);

module.exports = router;