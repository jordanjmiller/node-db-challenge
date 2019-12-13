
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: `I'm a task`, notes: 'task1', completed: false, project_id: 1},
        {id: 2, description: `I'm a task`, notes: 'task2',  completed: false, project_id: 1},
        {id: 3, description: `I'm a task`, notes: 'task3',  completed: false, project_id: 2}
      ]);
    });
};
