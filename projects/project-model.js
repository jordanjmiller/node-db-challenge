const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask,
}

// - [ ] Build an API with endpoints for:
//   - [ ] adding resources.
//   - [ ] retrieving a list of resources.
//   - [ ] adding projects.
//   - [ ] retrieving a list of projects.
//   - [ ] adding tasks.
//   - [ ] retrieving a list of tasks. **The list of tasks should include the project name and project description**.
// - [ ] When returning `project` or `task` information, the `completed` property should be `true` or `false`.

function getProjects() {
    return db('projects');
}
function getResources() {
    return db('resources');
}
function getTasks() {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select(
            't.project_id',
            'p.name',
            'p.description',
            't.id',
            't.description',
            't.notes',
            't.completed',
        );
}
function addProject(project) {
    return db('projects')
        .insert(project)
        // .then(newProject => getProjectsByID(newProject[0].id));
}
function addResource(resource) {
    return db('resources')
        .insert(resource)
        // .then(newResource => getResourceByID(newResource[0].id));
}
function addTask(task) {
    return db('tasks')
        .insert(task)
        // .then(newTask => getTaskByID(newTask[0].id));
}