
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Training Kit', description: 'Hit or miss'},
        {id: 2, name: 'Youtube', description: `There's a video for it somewhere`},
        {id: 3, name: 'MDN', description: 'Docs'}
      ]);
    });
};
