const express = require("express");
require('dotenv').config();
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5050;
const DB = process.env.DB_NAME;

const photoRoutes = require("./routes/photoRoutes");

// console.log(process.env.DB_NAME);

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
    res.send("Welcome to my API");
});


app.use("/photos", photoRoutes);

app.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`));