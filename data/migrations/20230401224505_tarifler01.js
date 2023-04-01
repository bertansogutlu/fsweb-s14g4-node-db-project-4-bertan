/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  const all = knex.schema().createTable('tarifler', table => {
    table.increments('tarif_id'),
    table.string('tarif_adi').notNullable().unique(),
    table.timestamp('kayit_tarihi').defaultTo(knex.fn.now)
  })
  .createTable('adimlar', table => {
    table.increments(adim_id),
    table.integer('adim_sirasi').unsigned().notNullable(),
    table.string('adim_talimati').notNullable(),
    table.integer('tarif_id').unsigned().notNullable(),
    table.references('tarif_id').inTable('tarifler')
  })
  .createTable('icindekiler', table => {
    table.increments('icindekiler_id'),
    table.string('icindekiler_adi').notNullable(),
    table.float('miktar').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};