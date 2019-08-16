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
    return db('tasks as t')
        .select('p.name', 'p.description', 't.description', 't.notes', 't.completed')
        .innerJoin('project as p', 't.project_id', 'p.id')
        // .select('t.description', 't.notes', 't.completed', 'p.project_name', 'p.description')
        // .innerJoin('projects as p', 't.project_id', '=', 'p.id')
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