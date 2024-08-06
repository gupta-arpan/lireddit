import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('post', function (table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
}


export async function down(knex: Knex): Promise<void> {
    return  knex.schema.dropTable('post');
}

