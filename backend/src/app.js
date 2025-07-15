require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const { connectDb } = require('./config/database');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend está funcionando! ');
});

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor está rodando na porta ${PORT}`);
    });
}).catch(err => {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1); // Encerra o processo se a conexão falhar
});


