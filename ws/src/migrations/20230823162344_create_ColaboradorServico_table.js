/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('ColaboradorServico', function(table) {
        table.increments('id').primary();
        table.integer('colaborador_id').references('id').inTable('colaborador').notNullable();
        table.integer('servico_id').references('id').inTable('servico').notNullable();
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
    await knex.schema.dropTableIfExists('ColaboradorServico');  
};
