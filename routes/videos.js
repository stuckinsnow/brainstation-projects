const express = require('express');
const router = express.Router();
const fs = require('fs');

require('dotenv').config();
const PORT = process.env.PORT;

const publicPath = 'http://localhost:' + PORT + '/images/';


router.get('/:id', (req, res) => {

const videoId = req.params.id;

  fs.readFile('./data/videos.json', 'utf-8', (err, data) => {
      if (err) {
        return res.send('an error ocurred reading videos data');
      } else {
        
        const videos = JSON.parse(data);
        let selectedVideo = videos.find(
          (video) => video.id === videoId
        );
        selectedVideo = {...selectedVideo, image: publicPath + selectedVideo.image};
        console.log('selectedVideo spread: ', selectedVideo)
        // update image property using spread operator
        


        res.json(selectedVideo); 
      }
  });
});


router.get('/', (req, res) => {

  fs.readFile('./data/videos.json', 'utf-8', (err, data) => {
    if (err) {
      return res.send('an error ocurred reading videos data');
    } else {
      const videosParsed = JSON.parse(data);


      const videoFiltered = videosParsed.map((video) => {
        return ({
          id: video.id,
          title: video.title,
          image: publicPath + video.image,
          channel: video.channel,
        })

      })
    
      res.json(videoFiltered);
    }
  });
});



module.exports = router;