function up(knex) {
    return knex.schema.createTable('images', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image_original_name').notNullable();
        table.string('image_artificial_name').notNullable();
        table.integer('size').notNullable();
        table.string('mimetype').notNullable();
    });
};

function down(knex) {
    return knex.schema.dropTable('images');
};

module.exports = { up, down };