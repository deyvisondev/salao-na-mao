const { Model } = require('objection');

class SalaoColaborador extends Model {
  static get tableName() {
    return 'SalaoColaborador';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['salao_id', 'colaborador_id', 'status'],
      properties: {
        id: { type: 'integer' },
        salao_id: { type: 'integer' },
        colaborador_id: { type: 'integer' },
        status: { type: 'string', enum: ['A', 'I', 'E'], default: 'A' },
        data_cadastro: { type: 'string', format: 'date-time', default: new Date().toISOString() },
        data_update: { type: 'string', format: 'date-time' },
      },
    };
  }

  static get relationMappings() {
    const Salao = require('./salaoModel');  // Substitua pelo caminho correto para o modelo Salao
    const Colaborador = require('./colaboradorModel');  // Substitua pelo caminho correto para o modelo Colaborador

    return {
      salao: {
        relation: Model.BelongsToOneRelation,
        modelClass: Salao,
        join: {
          from: 'SalaoColaborador.salao_id',
          to: 'salao.id'
        }
      },
      colaborador: {
        relation: Model.BelongsToOneRelation,
        modelClass: Colaborador,
        join: {
          from: 'SalaoColaborador.colaborador_id',
          to: 'colaborador.id'
        }
      }
    };
  }
}

module.exports = SalaoColaborador;
