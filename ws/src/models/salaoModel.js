/* const knexConfig = require('../../database');  // Substitua pelo caminho correto do seu arquivo de configuração
const knex = require('knex')(knexConfig.development); */

const knexConfig = require('../../database');
const knex = require('knex')({
  ...knexConfig.development,
  /* useNullAsDefault: true, */
  debug: true,  // Habilita o log de consulta
});

const { Model } = require('objection');

class Salao extends Model {
  static get tableName() {
    return 'salao';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['nome', 'email', 'telemovel', 'localidade', 'distrito'],
      properties: {
        id: { type: 'integer' },
        nome: { type: 'string', maxLength: 100 },
        foto: { type: 'string', maxLength: 100, default: null },
        capa: { type: 'string', maxLength: 100, default: null },
        email: { type: 'string', maxLength: 100 },
        senha: { type: 'string', maxLength: 100, default: null },
        telemovel: { type: 'string', maxLength: 100 },
        localidade: { type: 'string', maxLength: 100 },
        distrito: { type: 'string', maxLength: 100 },
        cod_postal: { type: 'string', maxLength: 100, default: null },
        pais: { type: 'string', maxLength: 100, default: null },
        geo_type: { type: 'string', maxLength: 100, default: null },
        geo_coordinates: { type: 'array', items: { type: 'string' } },
        data_cadastro: { type: 'string', format: 'date-time', default: new Date().toISOString() },
        data_update: { type: 'string', format: 'date-time' },
      },
    };
  }
}

Salao.knex(knex);

module.exports = Salao;
