/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('SalaoCliente', function(table) {
        table.increments('id').primary();
        table.integer('salao_id').references('id').inTable('salao').notNullable();
        table.integer('cliente_id').references('id').inTable('cliente').notNullable();
        table.enum('status', ['A', 'I', 'E']).defaultTo('A').notNullable();
        table.datetime('data_cadastro').defaultTo(knex.fn.now());
        table.timestamp('data_update');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('SalaoCliente');  
};
