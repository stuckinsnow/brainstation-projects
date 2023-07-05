const knex = require('knex')(require('../knexfile'));
const exifAsync = require('exif-async');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

index = (_req, res) => {
  knex('photoalbum')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving photos: ${err}`);
    });
};

uploadPhoto = (req, res) => {
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
          exif_data: exifData,
          photo_name: req.body.photoName,
          photo_region: req.body.selectedRegion
        })
        .then(() => {
          res.json({ message: 'Success!' });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Failed EXIF' });
    });
};

deletePhoto = async (req, res) => {
  const { id } = req.params;

  try {
    const photo = await knex('photoalbum').where({ id }).first();
    knex('photoalbum')
      .where({ id })
      .del()
      .then(() => {
        if (photo && photo.filename) {
          const imagePath = path.join(__dirname, '..', 'uploads', photo.filename); 
          fs.unlink(imagePath, (err) => {
            if (err) {
              console.error(err);
              res.status(500).json({ error: 'Failed to delete the file' });
            } else {
              res.json({ message: 'Photo deleted successfully' });
            }
          });
        } else {
          res.json({ message: 'Photo deleted successfully' });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

photo = async (req, res) => {
  const { id } = req.params;

  try {
    const photo = await knex('photoalbum').where({ id }).first();

    if (photo) {
      res.json(photo);
    } else {
      res.status(404).json({ error: 'Photo not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

fileFilter = function (_req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(new Error('Invalid filetype.'), false);
  }
};

storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (_req, file, cb) {
    cb(null, file.originalname);
  }
});

module.exports = {
  index,
  uploadPhoto, 
  deletePhoto,
  photo,
  fileFilter,
  storage
};