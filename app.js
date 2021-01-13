const express = require('express')
const path = require('path');
var bodyParser = require("body-parser");

var plasma = require('./mock_plasma');

const app = express()

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3003

app.use(express.static(path.join(__dirname, '')));

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/fsw_local', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname,'index_local.html'));
})

app.get('/fsw_dev', (req, res) => {
  res.sendFile(path.join(__dirname,'index_dev.html'));
})

app.get('/fsw_stg', (req, res) => {
  res.sendFile(path.join(__dirname,'index_stg.html'));
})

app.get('/fsw_prod', (req, res) => {
  res.sendFile(path.join(__dirname,'index_prod.html'));
})

app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'chat.html'));
})

app.get('/iframe', (req, res) => {
  res.sendFile(path.join(__dirname, 'iframe.html'));
})

/* POST messaging oauth2. */
// app.post('/plasma_test/oauth2/token', function(req, res, next) {
//   res.send('POSTcharam')
//   console.log(req);
//   console.log(res);
//   return res;
// });

/* POST messaging oauth2. */
app.post('/plasma_test/oauth2/token', plasma.getToken);

/* POST messaging oauth2. */
app.get('/plasma_test/oauth2/token', function(req, res, next) {
  res.send('GETcharam')
  console.log(req);
  console.log(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
