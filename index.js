const express = require('express');
const app = express();
const homeRouter = require('./routes/homeRouter')
const path = require('path');

app.set('view engine', 'ejs');
app.use(homeRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
