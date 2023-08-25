/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('agendamento', function(table) {
        table.increments('id').primary();
        table.integer('salao_id').references('id').inTable('salao').notNullable();
        table.integer('cliente_id').references('id').inTable('cliente').notNullable();
        table.integer('colaborador_id').references('id').inTable('colaborador').notNullable();
        table.integer('servico_id').references('id').inTable('servico').notNullable();
        table.enum('status', ['A', 'I', 'E', 'C']).defaultTo('A').notNullable();
        table.string('data_agendamento', 100).notNullable();
        table.integer('comissao').notNullable();
        table.integer('valor').notNullable();
        table.string('transaction_id').notNullable();
        table.datetime('data_cadastro').defaultTo(knex.fn.now());
        table.timestamp('data_update');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('agendamento');  
};
