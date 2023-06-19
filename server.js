const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5050;
const multer = require('multer');
const photoRoutes = require('./routes/photoRoutes');
const photoController = require('./controllers/photoController'); 
const upload = multer({ storage: photoController.storage, fileFilter: photoController.fileFilter });

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.send('Welcome to my API');
});

app.post('/upload', upload.single('photo'), photoController.uploadPhoto);
app.use('/delete', photoRoutes);
app.use('/photos', photoRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
