/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('colaborador', function (table) {
        table.increments('id').primary();
        table.string('nome', 100).notNullable();
        table.string('telemovel', 100).notNullable();
        table.string('email', 100);
        table.string('senha', 100).defaultTo(null);
        table.string('foto', 100).defaultTo(null);
        table.string('data_nascimento', 100).defaultTo(null);
        table.enum('sexo', ['M', 'F']);
        table.enum('status', ['A', 'I']).defaultTo('A');
        table.string('capa', 100).defaultTo(null);
        table.string('cb_titular', 100).notNullable();
        table.string('cb_cpfCnpj', 100).notNullable();
        table.string('cb_banco', 100).notNullable();
        table.string('cb_tipo', 100).notNullable();
        table.string('cb_agencia', 100).notNullable();
        table.string('cb_numeroConta', 100).notNullable();
        table.string('cb_dv', 100).notNullable();
        table.string('recipientId_type', 100).defaultTo(null);
        table.timestamp('data_cadastro').defaultTo(knex.fn.now());
        table.timestamp('data_update');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('colaborador');
};
