const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db("scheme");
}

function findById(id) {
    return db('scheme').where({ id }).first();
}

function findSteps(id){

}

function add(newScheme) {
    return db('scheme').insert(newScheme).returning('id').then((ids => {
        const id = ids[0];
        return findById(id);
    }))
}

function update(changes, id){
    return db('scheme').where({ id }).update(changes).then(() => {
        return findById(id)
    })
}

function remove(id){
    return db('scheme').where({ id }).del();
}