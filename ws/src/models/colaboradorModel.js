const { Model } = require('objection');

class Colaborador extends Model {
  static get tableName() {
    return 'colaborador';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['nome', 'telemovel', 'cb_titular', 'cb_cpfCnpj', 'cb_banco', 'cb_tipo', 'cb_agencia', 'cb_numeroConta', 'cb_dv'],
      properties: {
        id: { type: 'integer' },
        nome: { type: 'string', maxLength: 100 },
        telemovel: { type: 'string', maxLength: 100 },
        email: { type: 'string', maxLength: 100 },
        senha: { type: 'string', maxLength: 100, default: null },
        foto: { type: 'string', maxLength: 100, default: null },
        data_nascimento: { type: 'string', maxLength: 100, default: null },
        sexo: { type: 'string', enum: ['M', 'F'] },
        status: { type: 'string', enum: ['A', 'I'], default: 'A' },
        capa: { type: 'string', maxLength: 100, default: null },
        cb_titular: { type: 'string', maxLength: 100 },
        cb_cpfCnpj: { type: 'string', maxLength: 100 },
        cb_banco: { type: 'string', maxLength: 100 },
        cb_tipo: { type: 'string', maxLength: 100 },
        cb_agencia: { type: 'string', maxLength: 100 },
        cb_numeroConta: { type: 'string', maxLength: 100 },
        cb_dv: { type: 'string', maxLength: 100 },
        recipientId_type: { type: 'string', maxLength: 100, default: null },
        data_cadastro: { type: 'string', format: 'date-time', default: new Date().toISOString() },
        data_update: { type: 'string', format: 'date-time' },
      },
    };
  }
}

module.exports = Colaborador;