const express = require('express');
const app = express();
const path = require('path');

const listaUsuario = [
    'Fabiano', 
    'Joice',
    'Adriano',
    'Caique'
]

app.use(express.static(path.join(__dirname, '/src/public/')));
//app.use(express.static(path.join(__dirname, '/src/style/')));

//expressencoded
app.use(express.urlencoded({extended: true}));

    //Route params
app.get('/hello/:usuario', (req, res) => {
    const { usuario } = req.params;
    return res.send(`Hello World ${usuario}`);
});

   //Query params
   //Ex: localhost: 3000/usuarios?id=1
app.get('/usuarios', (req, res) => {
    //console.log(req.query);
    const { nome } = req.query;
    let listaRetorno = listaUsuario.filter(i => i.includes(nome || ''));
    return res.json(listaRetorno);
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/index.html'))
})

app.post('/enviar-mensagem', (req, res) => {
    console.log(req.body);
    //const {name, email, comentario} = req.body;

    return res.send('OK');
});

app.listen(8080, () => console.log('servidor rodando na porta'));
 