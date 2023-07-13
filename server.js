const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5050;
const HOST = process.env.DB_HOST;
const multer = require('multer');
const siteRoutes = require('./routes/siteRoutes');
const photoController = require('./controllers/photoController');
const upload = multer({ storage: photoController.storage, fileFilter: photoController.fileFilter });


app.use(express.json());
app.use(cors());

const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey && apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

app.post('/pp/upload', upload.single('photo'), apiKeyMiddleware, photoController.uploadPhoto);

app.use('/pp/delete', siteRoutes);
app.use('/pp/', siteRoutes);
app.use('/pp/photos', siteRoutes);
app.use('/pp/uploads', express.static('uploads'));

app.get('/pp', (_req, res) => {
  res.send('Welcome to my API');
});

app.listen(PORT, () => console.log(`Server running at https://${HOST}/${PORT}`));
