const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Função para testar a conexão com o banco de dados
async function connectDb() {
    try {
        await pool.query('SELECT NOW()');
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        throw err;
    }
}

// Exportamos um objeto que contém 'pool' e 'connectDb' como propriedades.
module.exports = {
  pool,
  connectDb
};
