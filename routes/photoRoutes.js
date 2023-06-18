const express = require("express");
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js'); 

const db = knex(knexConfig);

router.get("/", async (_req, res) => {
  try {
    const photos = await db.select().from('photoalbum');
    res.json(photos);
    console.log('After fetching photos:', photos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
 
module.exports = router;

 