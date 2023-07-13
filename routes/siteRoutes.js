const express = require("express");
const router = express.Router();
const photoController = require('../controllers/photoController');
const contactController = require('../controllers/contactController');

router.get('/', photoController.index);
router.get('/photos/:id', photoController.photo);
router.delete('/delete/:id', photoController.deletePhoto); 
router.post('/contact', contactController.submitContactForm);
router.get('/emails/:id', contactController.getContact);
router.get('/emails', contactController.indexContact);
router.delete('/emails/:id', contactController.deleteContact);

module.exports = router;
