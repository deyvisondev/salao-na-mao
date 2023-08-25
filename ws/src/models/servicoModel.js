/* const knexConfig = require('../../database');  // Substitua pelo caminho correto do seu arquivo de configuração
const knex = require('knex')(knexConfig.development); */

const knexConfig = require('../../database');
const knex = require('knex')({
  ...knexConfig.development,
  /* useNullAsDefault: true, */
  debug: true,  // Habilita o log de consulta
});

const { Model } = require('objection');

class Servico extends Model {
  static get tableName() {
    return 'servico';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['titulo', 'descricao', 'preco', 'comissao', 'duracao', 'recorrencia', 'salao_id'],
      properties: {
        id: { type: 'integer' },
        titulo: { type: 'string', maxLength: 100 },
        descricao: { type: 'string' },
        preco: { type: 'integer' },
        comissao: { type: 'integer' },
        duracao: { type: 'integer' },
        recorrencia: { type: 'integer' },
        salao_id: { type: 'integer' },
        status: { type: 'string', enum: ['A', 'I', 'E'], default: 'A' },
        data_cadastro: { type: 'string', format: 'date-time', default: new Date().toISOString() },
        data_update: { type: 'string', format: 'date-time' },
      },
    };
  }

  static get relationMappings() {
    const Salao = require('./salaoModel');  // Substitua pelo caminho correto para o modelo Salao

    return {
      salao: {
        relation: Model.BelongsToOneRelation,
        modelClass: Salao,
        join: {
          from: 'servico.salao_id',
          to: 'salao.id'
        }
      }
    };
  }
}

Servico.knex(knex);


module.exports = Servico;
