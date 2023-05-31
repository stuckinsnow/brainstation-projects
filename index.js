const express = require('express');
const app = express();
const videosRoutes = require('./routes/videos');
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT;

// middleware begins 

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());


app.use(express.static('public'));

app.use('/videos', videosRoutes);

//middleware ends

// home route
// app.get('/', (req, res) => {
//   console.log('SHE WORK');
//   res.send('HE WORK');
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
