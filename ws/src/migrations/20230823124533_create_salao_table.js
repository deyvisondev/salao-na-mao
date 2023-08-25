/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('salao', function (table) {
        table.increments('id').primary();
        table.string('nome', 100).notNullable();
        table.string('foto', 100).defaultTo(null);
        table.string('capa', 100).defaultTo(null);
        table.string('email', 100);
        table.string('senha', 100).defaultTo(null);
        table.string('telemovel', 100);
        table.string('localidade', 100);
        table.string('distrito', 100);
        table.string('cod_postal', 100).defaultTo(null);
        table.string('pais', 100).defaultTo(null);
        table.string('geo_type', 100).defaultTo(null);
        table.specificType('geo_coordinates', 'POINT[]'); // Usamos specificType para tipos não padrão
        table.timestamp('data_cadastro').defaultTo(knex.fn.now());
        table.timestamp('data_update');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('salao');
};
