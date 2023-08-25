const { Model } = require('objection');

class Horario extends Model {
  static get tableName() {
    return 'horario';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['salao_id', 'dias', 'inicio', 'fim', 'especialidades', 'colaboradores'],
      properties: {
        id: { type: 'integer' },
        salao_id: { type: 'integer' },
        dias: { type: 'array', items: { type: 'integer' } },
        inicio: { type: 'string', format: 'date-time' },
        fim: { type: 'string', format: 'date-time' },
        especialidades: { type: 'array', items: { type: 'integer' } },
        colaboradores: { type: 'array', items: { type: 'integer' } },
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
          from: 'horario.salao_id',
          to: 'salao.id'
        }
      }
    };
  }
}

module.exports = Horario;
