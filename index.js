const express = require('express');
const app = express();

// Rotas
const htmlRoute = require('./routes/html');
const pdfRoute = require('./routes/pdf');

app.use('/api/v1/excel/', htmlRoute);
app.use('/api/v1/excel/', pdfRoute);

app.listen(8080, ()=>{console.log('Runing...')});