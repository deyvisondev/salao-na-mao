/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('servico', function (table) {
        table.increments('id').primary();
        table.string('titulo', 100).notNullable();
        table.text('descricao').notNullable();
        table.integer('preco').notNullable();
        table.integer('comissao').notNullable();
        table.integer('duracao').notNullable();
        table.integer('recorrencia').notNullable();
        table.integer('salao_id').references('id').inTable('salao');
        table.enum('status', ['A', 'I', 'E']).defaultTo('A');
        table.timestamp('data_cadastro').defaultTo(knex.fn.now());
        table.timestamp('data_update');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('servico');
};
