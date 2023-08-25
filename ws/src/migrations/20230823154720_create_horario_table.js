/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('horario', function(table) {
        table.increments('id').primary();
        table.integer('salao_id').unsigned().notNullable();
        table.foreign('salao_id').references('salao.id');
        table.specificType('dias', 'integer[]').notNullable();
        table.datetime('inicio').notNullable();
        table.datetime('fim').notNullable();
        table.specificType('especialidades', 'integer[]').notNullable();
        table.specificType('colaboradores', 'integer[]').notNullable();
        table.datetime('data_cadastro').defaultTo(knex.fn.now());
        table.timestamp('data_update');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('horario');
};
