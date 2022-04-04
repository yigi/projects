const express = require('express');

// import DB config
const DbConnection = require('../database')

const app = express();

const hostname = 'localhost';
const PORT = process.env.PORT || 8085;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// call imported DB connection here
DbConnection;

app.get('/', (req, res) => {
    res.json({ "message": "sucessfully routed to root" });
});

// import routes
require('../app/routes')(app);

app.listen(PORT, hostname, () => {
    console.log(`server is listening to http://${hostname}:${PORT}`)
});
