const { Model } = require('objection');

class Agendamento extends Model {
  static get tableName() {
    return 'agendamento';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['salao_id', 'cliente_id', 'colaborador_id', 'servico_id', 'status', 'data_agendamento', 'comissao', 'valor', 'transaction_id'],
      properties: {
        id: { type: 'integer' },
        salao_id: { type: 'integer' },
        cliente_id: { type: 'integer' },
        colaborador_id: { type: 'integer' },
        servico_id: { type: 'integer' },
        status: { type: 'string', enum: ['A', 'I', 'E', 'C'], default: 'A' },
        data_agendamento: { type: 'string', maxLength: 100 },
        comissao: { type: 'integer' },
        valor: { type: 'integer' },
        transaction_id: { type: 'string' },
        data_cadastro: { type: 'string', format: 'date-time', default: new Date().toISOString() },
        data_update: { type: 'string', format: 'date-time' },
      },
    };
  }

  static get relationMappings() {
    const Salao = require('./Salao');  // Substitua pelo caminho correto para o modelo Salao
    const Cliente = require('./Cliente');  // Substitua pelo caminho correto para o modelo Cliente
    const Colaborador = require('./Colaborador');  // Substitua pelo caminho correto para o modelo Colaborador
    const Servico = require('./Servico');  // Substitua pelo caminho correto para o modelo Servico

    return {
      salao: {
        relation: Model.BelongsToOneRelation,
        modelClass: Salao,
        join: {
          from: 'agendamento.salao_id',
          to: 'salao.id'
        }
      },
      cliente: {
        relation: Model.BelongsToOneRelation,
        modelClass: Cliente,
        join: {
          from: 'agendamento.cliente_id',
          to: 'cliente.id'
        }
      },
      colaborador: {
        relation: Model.BelongsToOneRelation,
        modelClass: Colaborador,
        join: {
          from: 'agendamento.colaborador_id',
          to: 'colaborador.id'
        }
      },
      servico: {
        relation: Model.BelongsToOneRelation,
        modelClass: Servico,
        join: {
          from: 'agendamento.servico_id',
          to: 'servico.id'
        }
      }
    };
  }
}

module.exports = Agendamento;
const { Model } = require('objection');

class Agendamento extends Model {
  static get tableName() {
    return 'agendamento';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['salao_id', 'cliente_id', 'colaborador_id', 'servico_id', 'status', 'data_agendamento', 'comissao', 'valor', 'transaction_id'],
      properties: {
        id: { type: 'integer' },
        salao_id: { type: 'integer' },
        cliente_id: { type: 'integer' },
        colaborador_id: { type: 'integer' },
        servico_id: { type: 'integer' },
        status: { type: 'string', enum: ['A', 'I', 'E', 'C'], default: 'A' },
        data_agendamento: { type: 'string', maxLength: 100 },
        comissao: { type: 'integer' },
        valor: { type: 'integer' },
        transaction_id: { type: 'string' },
        data_cadastro: { type: 'string', format: 'date-time', default: new Date().toISOString() },
        data_update: { type: 'string', format: 'date-time' },
      },
    };
  }

  static get relationMappings() {
    const Salao = require('./salaoModel');  // Substitua pelo caminho correto para o modelo Salao
    const Cliente = require('./clienteModel');  // Substitua pelo caminho correto para o modelo Cliente
    const Colaborador = require('./colaboradorModel');  // Substitua pelo caminho correto para o modelo Colaborador
    const Servico = require('./servicoModel');  // Substitua pelo caminho correto para o modelo Servico

    return {
      salao: {
        relation: Model.BelongsToOneRelation,
        modelClass: Salao,
        join: {
          from: 'agendamento.salao_id',
          to: 'salao.id'
        }
      },
      cliente: {
        relation: Model.BelongsToOneRelation,
        modelClass: Cliente,
        join: {
          from: 'agendamento.cliente_id',
          to: 'cliente.id'
        }
      },
      colaborador: {
        relation: Model.BelongsToOneRelation,
        modelClass: Colaborador,
        join: {
          from: 'agendamento.colaborador_id',
          to: 'colaborador.id'
        }
      },
      servico: {
        relation: Model.BelongsToOneRelation,
        modelClass: Servico,
        join: {
          from: 'agendamento.servico_id',
          to: 'servico.id'
        }
      }
    };
  }
}

module.exports = Agendamento;
