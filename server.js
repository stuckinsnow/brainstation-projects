const express = require('express');
const app = express();
const PORT = 8080;

app.use(express());

// home route
app.get('/', (req, res) => {
  console.log('Working');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
