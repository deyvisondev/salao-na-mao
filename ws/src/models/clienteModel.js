const { Model } = require('objection');

class Cliente extends Model {
  static get tableName() {
    return 'cliente';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['nome', 'telemovel'],
      properties: {
        id: { type: 'integer' },
        nome: { type: 'string', maxLength: 100 },
        telemovel: { type: 'string', maxLength: 100 },
        email: { type: 'string', maxLength: 100 },
        senha: { type: 'string', maxLength: 100, default: null },
        foto: { type: 'string', maxLength: 100, default: null },
        data_nascimento: { type: 'string', maxLength: 100, default: null },
        doc_type: { type: 'string', maxLength: 100, default: null },
        doc_num: { type: 'string', maxLength: 100, default: null },
        end_descricao: { type: 'string', maxLength: 100, default: null },
        end_num: { type: 'string', maxLength: 100, default: null },
        end_distrito: { type: 'string', maxLength: 100, default: null },
        end_codPostal: { type: 'string', maxLength: 100, default: null },
        end_pais: { type: 'string', maxLength: 100, default: null },
        sexo: { type: 'string', enum: ['M', 'F'] },
        status: { type: 'string', enum: ['A', 'I'], default: 'A' },
        capa: { type: 'string', maxLength: 100, default: null },
        data_cadastro: { type: 'string', format: 'date-time', default: new Date().toISOString() },
        data_update: { type: 'string', format: 'date-time' },
      },
    };
  }
}

module.exports = Cliente;
