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

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const photo = await db('photoalbum').where({ id }).first();

    if (photo) {
      res.json(photo);
    } else {
      res.status(404).json({ error: 'Photo not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


 
module.exports = router;

 