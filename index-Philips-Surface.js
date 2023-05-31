const express = require('express');
const app = express();
const videosRoutes = require('./routes/videos');


require('dotenv').config();
const PORT = process.env.PORT;

app.use(express());

app.use('/videos', videosRoutes);

// home route
app.get('/', (req, res) => {
    res.send('Working');
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
