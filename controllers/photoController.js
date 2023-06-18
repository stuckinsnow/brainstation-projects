const knex = require('knex')(require('../knexfile'));
const exifAsync = require('exif-async');

exports.index = (_req, res) => {
  knex('photos')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving photos: ${err}`)
    );
};

exports.uploadPhoto = (req, res) => {
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
