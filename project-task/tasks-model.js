const db = require('../data/db-config');

module.exports = {
    getProject,
    getTask,
    getResources,
    addProject,
    addTask,
    addResource,

}

function getProject() {
    return db('project')
}

function getTask() {
    return db('tasks')
        // .innerJoin('project as p, t.project_id', 'p.id')
        // .select('p.name', 'p.description', 't.description as tasks', 't.notes', 't.completed')
}

function getResources() {
    return db('resources')
}

function addProject(body) {
    return db('project').insert(body)
}

function addTask(body) {
    return db('tasks').insert(body)
}

function addResource(body) {
    return db('resources').insert(body)
}