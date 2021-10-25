const express = require('express')
const app = express()

// app.use(express.static('./public'));

// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE

app.get('/', (req, response) => {
  console.log('I went home')
  response.sendFile(`${__dirname}/public/home.html`)
})

app.get('/cats', function (request, response) {
  console.log('I went to /cats.')
  response.sendFile(`${__dirname}/public/catsdotcom.html`)
})

// app.get('/cats', (request, response) => { /* stuff */ })

// app.post('/cats', (request, response) => {console.log('I posted some cats')})

// app.put('/cats', (request, response) => {})

// app.delete('/cats', (request, response) => {})



app.listen(3000, () => console.log('\n\nListening on port 3000.'));
