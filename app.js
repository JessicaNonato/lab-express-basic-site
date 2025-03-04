const express = require('express')
const app = express();

app.use(express.static('public'));
app.use((req, res, next) => {
    console.log("entrei no midleware") 
    next()
})


app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html')
  });

  app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about-page.html')
  });

  app.get('/photos', (request, response, next) => {
    response.sendFile(__dirname + '/views/photo-gallery.html')
  });

  app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works-page.html')
  });

  app.listen(3000, () => console.log('My first app listening on port 3000!'));
