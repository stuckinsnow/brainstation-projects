const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5050;
const multer = require('multer');
const exifAsync = require('exif-async');
const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.send('Welcome to my API');
});

app.post('/upload', upload.single('photo'), (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: 'No file provided' });
    return;
  }

  const imagePath = req.file.path;

  exifAsync(imagePath)
    .then((exifData) => {
      exifData = exifData || {};

      console.log('EXIF data:', exifData);

      knex('photoalbum')
        .insert({
          filename: req.file.originalname,
          exif_data: JSON.stringify(exifData),
        })
        .then(() => {
          res.json({ message: 'Upload successful' });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Failed to read EXIF data' });
    });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
