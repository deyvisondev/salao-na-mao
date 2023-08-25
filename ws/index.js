const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors')
const database = require('./database') 

//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


//VARIABLES
app.set ('port', 8000)


//ROTAS

app.use('/salao', require('./src/routes/salaoRouter'))
app.use('/servico', require('./src/routes/servicoRouter'))

// DATABASE CONECTION TEST

async function testDatabaseConnection() {
    try {
        const knex = require('knex')(database.development); // Cria uma instância do Knex com as configurações de desenvolvimento

        await knex.raw('SELECT 1'); // Tenta fazer uma consulta simples

        console.log('Conexão com o banco de dados estabelecida com sucesso');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

testDatabaseConnection(); // Chama a função para testar a conexão


app.listen(app.get('port'), () => {
    console.log(`WS escutando na porta ${app.get('port')}`);
});