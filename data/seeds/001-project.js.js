
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, name: 'convert to boolean', description:'convert the sqlite integer to a bool', completed: false},
        {id: 2, name: 'finish this test', description:'you have 3 hours for this test', completed: false},
      ]);
    });
};
