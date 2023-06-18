const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5050;
const multer = require('multer');
const photoRoutes = require("./routes/photoRoutes");
const { uploadPhoto, deletePhoto, photo } = require('./controllers/photoController');
// const { uploadPhoto  } = require('./controllers/photoController');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (_req, file, cb) {
    cb(null, file.originalname); 
  }
});

const fileFilter = function (_req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(new Error('Invalid filetype.'), false);
  }
};

const upload = multer({ storage, fileFilter });

app.use(express.json());

app.use(cors());

app.get('/', (_req, res) => {
  res.send('Welcome to my API');
});

app.get('/photos/:id', photo);

app.post('/upload', upload.single('photo'), uploadPhoto);

app.delete('/delete/:id', deletePhoto);

app.use("/photos", photoRoutes);

app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
