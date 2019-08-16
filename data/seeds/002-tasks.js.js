
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, description: 'change integer to bool', notes: 'use conditional', completed: false},
        {id: 2, project_id: 2, description: 'pass the test within 3 hours', notes: 'hurry', completed: false},
      ]);
    });
};
