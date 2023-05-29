const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {

    console.log('beep beep');
    // res.send('beeeeeeeeeep beeeeeeeeeep');

    fs.readFile('./data/videos.json', 'utf-8', (err, data) => {
        if (err) {
          return res.send('an error ocurred reading videos data');
        } else {
          res.json(JSON.parse(data)); 
        }
    });
  });



module.exports = router;