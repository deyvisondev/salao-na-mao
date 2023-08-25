require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            ssl: {
                rejectUnauthorized: false, // Permite certificados autoassinados
            },
            define: {
                timestamp: true,

            }
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: __dirname + '/src/migrations', // Pasta para as migrações
        },
    },
};

    

/* Execute consultas ou operações no banco de dados:
Agora você pode usar o objeto client para executar consultas SQL ou operações no banco de dados PostgreSQL. Certifique-se de lidar com os erros adequadamente.

Lembre-se de substituir os valores em maiúsculas no arquivo .env pelas informações reais do seu banco de dados. Além disso, mantenha o arquivo .env fora do controle de versão, pois ele pode conter informações sensíveis como senhas.

Com essas etapas, sua API Node.js deverá estar conectada ao banco de dados PostgreSQL usando variáveis de ambiente. Certifique-se de ler a documentação do pacote pg para mais detalhes sobre como executar consultas e transações no banco de dados. */





