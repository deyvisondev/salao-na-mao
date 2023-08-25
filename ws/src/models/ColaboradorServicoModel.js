const { Model } = require('objection');

class ColaboradorServico extends Model {
  static get tableName() {
    return 'ColaboradorServico';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['colaborador_id', 'servico_id', 'status'],
      properties: {
        id: { type: 'integer' },
        colaborador_id: { type: 'integer' },
        servico_id: { type: 'integer' },
        status: { type: 'string', enum: ['A', 'I', 'E'], default: 'A' },
        data_cadastro: { type: 'string', format: 'date-time', default: new Date().toISOString() },
        data_update: { type: 'string', format: 'date-time' },
      },
    };
  }

  static get relationMappings() {
    const Colaborador = require('./colaboradorModel');  // Substitua pelo caminho correto para o modelo Colaborador
    const Servico = require('./servicoModel');  // Substitua pelo caminho correto para o modelo Servico

    return {
      colaborador: {
        relation: Model.BelongsToOneRelation,
        modelClass: Colaborador,
        join: {
          from: 'ColaboradorServico.colaborador_id',
          to: 'colaborador.id'
        }
      },
      servico: {
        relation: Model.BelongsToOneRelation,
        modelClass: Servico,
        join: {
          from: 'ColaboradorServico.servico_id',
          to: 'servico.id'
        }
      }
    };
  }
}

module.exports = ColaboradorServico;
