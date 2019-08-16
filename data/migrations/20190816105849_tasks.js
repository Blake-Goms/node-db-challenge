

exports.up = function(knex) {
    return knex.schema
    //first table
    // one to many with tasks
    //many to many with resources
    .createTable('project' , tbl => { 
        tbl.increments()            
        tbl.string('name', 255).notNullable().unique();
        tbl.string('description', 255);
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    //second table
    // one to one with project
    .createTable('tasks', tbl => { 
        tbl.increments();
        
        tbl.integer('project_id').unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        tbl.string('description', 255).notNullable();
        tbl.string('notes', 255);
        //tbl.integer('completed', 0).notNullable();
        tbl.boolean('completed').notNullable();
    })

    //third table
    //many to many with projects
    .createTable('resources', tbl => {
        tbl.increments();
        
        tbl.string('description', 255);

        tbl.string('name', 255).notNullable();
        
        tbl.string('notes', 255);
    })
    //fourth table
    //table for projects and resources
    .createTable('proj_res', tbl =>{
        tbl.increments();

        tbl.integer('proj_id')
            .unsigned()
            .references('id')
            .inTable('project');

        tbl.integer('res_id')
            .unsigned()
            .references('id')
            .inTable('resources');
    })

}

exports.down = function(knex) {
    return knex.schema
        .dropTableIfItExists('proj_res')
        .dropTableIfItExists('resources')
        .dropTableIfItExists('tasks')
        .dropTableIfItExists('project')
}

