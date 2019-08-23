// the changes we want to make
exports.up = function(knex) {
    //create table
    return knex.schema.createTable('fruits', tbl => {
        tbl.increments()
        tbl.string('name', 128).unique().notNullable()
        tbl.decimal('avgWeightOz').notNullable()
        tbl.boolean('delicious')
    })
    
};

// undo the changes
exports.down = function(knex) {
  // drop the fuits table
  return knex.schema.dropTableIfExists('fruits')
};
