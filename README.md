<h1 align="center">Photography Portfolio</h1> 

## Project Details

I enjoy photography as well as developing; for my final project at BrainStation, I created a full stack photography portfolio. Aspiring photographers curious to know which settings were used for a particular photograph can view this information on mousehover! I created this feature to be automatic; it sends the photograph to the backend, this grabs the exif data from the photograph, saves it into a databsae, and then the front-end makes an axios call to obtain both the photograph and the information from the database.

Other features of the project include a minimal amount of libraries as I wanted to extend my knowledge to the maximum amount possible given the short time frame. 


## Getting Started

This project has been deployed at [https://amzn1.lswr.net/pp/](https://amzn1.lswr.net/pp/). Using Amazon Web Services - LightSail, on a debian based instance. I have had to change some features for security purposes. The back end is using port 8080, but has a reverse proxy set up to redirect to port 443.

The mySQL database, backend and frontend are all on the same server.

## Screenshots 

<img src="https://i.imgur.com/8hBrdFd.jpg" />
<img src="https://i.imgur.com/wgfeqSs.jpg" />
<img src="https://i.imgur.com/DT1V12X.jpg" />
<img src="https://i.imgur.com/Qa2jrDP.jpg" />


<p align="left"> <img src="https://komarev.com/ghpvc/?username=stuckinsnow&label=Profile%20views&color=0e75b6&style=flat" alt="stuckinsnow" /> </p>


<p align="left">
</p>
 
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> </p>

### `npm install`

Please run "npm I" to install the node modules.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `Features`

- Photo carousel 
- Photo modal (no libraries used)
- Page scroll down effect (no libraries used)
- Photograph upload
   - Photograph EXIF data
- Form upload
   - With response from API
- Photograph animations
   - Includes filtering and shuffling
- Photograph GPS location
- Photograph and message delete

### `Technologies` 

- Axios
- Sql
- Knex
- Node.js
- JavaScript
- HTML5
- SASS
- CSS


### `Dependencies`

   - @babel/plugin-proposal-private-property-in-object: "7.21.11"
   - @testing-library/jest-dom: "^5.16.5"
   - @testing-library/react: "^13.4.0"
   - @testing-library/user-event: "^13.5.0"
   - axios: "^1.4.0"
   - isotope-layout: "^3.0.6"
   - or: "^0.2.0"
   - react: "^18.0.2"
   - react-dom: "^18.2.0"
   - react-router-dom: "^6.13.0"
   - react-scripts: "5.0.1"
   - sass: "^1.63.4"
   - swiper: "^9.4.1"
   - web-vitals: "^2.1.4"

## Backend

SQL will need to be configured using the .env sample. A seeds file is not required or implemented as the database will auto populate when a photograph is uploaded. An "uploads" folder will need to be created in the root directory of the backend (not the front end).

https://github.com/stuckinsnow/brainstation-capstone-backend

# Important Notes

For the exif data to be read, a photograph will need to be exported from Adobe Lightroom / Capture One with ALL exif data enabled. Most images from online will not have exif data included.
