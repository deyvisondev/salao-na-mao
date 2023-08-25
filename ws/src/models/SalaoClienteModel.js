const { Model } = require('objection');

class SalaoCliente extends Model {
  static get tableName() {
    return 'SalaoCliente';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['salao_id', 'cliente_id', 'status'],
      properties: {
        id: { type: 'integer' },
        salao_id: { type: 'integer' },
        cliente_id: { type: 'integer' },
        status: { type: 'string', enum: ['A', 'I', 'E'], default: 'A' },
        data_cadastro: { type: 'string', format: 'date-time', default: new Date().toISOString() },
        data_update: { type: 'string', format: 'date-time' },
      },
    };
  }

  static get relationMappings() {
    const Salao = require('./salaoModel');  // Substitua pelo caminho correto para o modelo Salao
    const Cliente = require('./clienteModel');  // Substitua pelo caminho correto para o modelo Cliente

    return {
      salao: {
        relation: Model.BelongsToOneRelation,
        modelClass: Salao,
        join: {
          from: 'SalaoCliente.salao_id',
          to: 'salao.id'
        }
      },
      cliente: {
        relation: Model.BelongsToOneRelation,
        modelClass: Cliente,
        join: {
          from: 'SalaoCliente.cliente_id',
          to: 'cliente.id'
        }
      }
    };
  }
}

module.exports = SalaoCliente;
