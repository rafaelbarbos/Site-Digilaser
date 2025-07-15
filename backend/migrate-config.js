require('dotenv').config(); //Carrega as variáveis de ambiente do arquivo .env

modelu.exports = {
    // Configurações de migração
    databaseUrl:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    migrationsTable: 'pgmigrations', // Nome da tabela de migrações
    dir: 'database/migrations', // Diretório onde as migrações estão localizadas
};

