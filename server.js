const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5050;
const multer = require('multer');
const siteRoutes = require('./routes/siteRoutes');
const photoController = require('./controllers/photoController');  
const upload = multer({ storage: photoController.storage, fileFilter: photoController.fileFilter }); 

app.use(express.json());
app.use(cors());

const apiKeyMiddleware = (req, _res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey && apiKey === process.env.API_KEY) { 
    next();
  } else { 
    next();
    // res.status(401).json({ error: 'Unauthorized' });
  }
};
 
app.use(apiKeyMiddleware); 

app.get('/', (_req, res) => {
  res.send('Welcome to my API');
});

app.post('/upload', upload.single('photo'), photoController.uploadPhoto);
app.use('/delete', siteRoutes);
app.use('/', siteRoutes); 
app.use('/photos', siteRoutes);
app.use('/uploads', express.static('uploads'));


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));


























