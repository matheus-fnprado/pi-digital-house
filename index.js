const express = require('express');
const app = express();
const homeRouter = require('./src/routes/homeRouter')
const path = require('path');
const port = 3000

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(homeRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Servidor rodando na porta:' + port))
