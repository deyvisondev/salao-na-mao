/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('cliente', function (table) {
        table.increments('id').primary();
        table.string('nome', 100).notNullable();
        table.string('telemovel', 100).notNullable();
        table.string('email', 100);
        table.string('senha', 100).defaultTo(null);
        table.string('foto', 100).defaultTo(null);
        table.string('data_nascimento', 100).defaultTo(null);
        table.string('doc_type', 100).defaultTo(null);
        table.string('doc_num', 100).defaultTo(null);
        table.string('end_descricao', 100).defaultTo(null);
        table.string('end_num', 100).defaultTo(null);
        table.string('end_distrito', 100).defaultTo(null);
        table.string('end_codPostal', 100).defaultTo(null);
        table.string('end_pais', 100).defaultTo(null);
        table.enum('sexo', ['M', 'F']);
        table.enum('status', ['A', 'I']).defaultTo('A');
        table.string('capa', 100).defaultTo(null);
        table.timestamp('data_cadastro').defaultTo(knex.fn.now());
        table.timestamp('data_update');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('cliente');
};
