
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('proj_res').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('proj_res').insert([
        {id: 1, proj_id: 1, res_id: 1},
        {id: 2, proj_id: 2, res_id: 2},
      ]);
    });
};
