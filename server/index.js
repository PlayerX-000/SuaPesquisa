const express = require('express');
const app = express();
const porta = process.env.PORT || 2021;
const bot = require('./bot');
const apis = require('./apis');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/pesquisa',bot.run);
app.get('/api/noticia',apis.noticias);


app.listen(porta,()=>{
    console.log('servidor rodando na porta: '+porta);
    console.log('http://localhost:'+porta);
})