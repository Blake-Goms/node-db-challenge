
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, description: 'knex.js.org', name: 'Knex.js', notes: 'this is extremely helpful'},
        {id: 2, description: 'Starting NodeJS from Scratch', name: 'Google Docs NodeJS from Scratch', notes: 'use the google doc'},
      ]);
    });
};
