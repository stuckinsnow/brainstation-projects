const express = require("express");
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js'); // Replace with the actual path to your knexfile

// Create a Knex instance
const db = knex(knexConfig);

router.get("/", async (req, res) => {
  try {
    const photos = await db.select().from('photoalbum');
    res.json(photos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});





// router.get("/photos/:id", (req, res) => {
//   const photoId = req.params.id;
//   res.send(`Retrieve photo with ID: ${photoId}`);
//   console.log('Retrieve photo with ID');
// });

// router.post("/", (req, res) => {
//   res.send("Create a new photo");
//   console.log('Post photo');
// });

// router.put("/:id", (req, res) => {
//   const photoId = req.params.id;
//   res.send(`Update photo with ID: ${photoId}`);
//   console.log('Update photo');
// });

// router.delete("/:id", (req, res) => {
//   const photoId = req.params.id;
//   res.send(`Delete photo with ID: ${photoId}`);
//   console.log('Delete photo');
// });

module.exports = router;

 