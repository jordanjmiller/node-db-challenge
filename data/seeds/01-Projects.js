
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'rowValue1', description: 'rowValue1', completed: false},
        {id: 2, name: 'rowValue1', description: 'rowValue1', completed: false},
        {id: 3, name: 'rowValue1', description: 'rowValue1', completed: false}
      ]);
    });
};
