const express = require("express");
const router = express.Router();
const photoController = require('../controllers/photoController');
const contactController = require('../controllers/contactController');

router.get('/pp/', photoController.index);
router.get('/pp/photos/:id', photoController.photo);
router.delete('/pp/delete/:id', photoController.deletePhoto); 
router.post('/pp/contact', contactController.submitContactForm);
router.get('/pp/emails/:id', contactController.getContact);
router.get('/pp/emails', contactController.indexContact);
router.delete('/pp/emails/:id', contactController.deleteContact);

module.exports = router;
