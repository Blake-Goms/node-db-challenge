const express = require('express');
const knex = require('knex');
const tasks = require('./tasks-model');


const router = express.Router();

router.get('/project', (req, res) => {
    tasks
        .getProject()
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({error: 'could not access database.'});
        });
});

router.get('/task', (req, res) => {
    tasks
        .getTask()
        .then(task => {
            // res.status(200).json(task);
            if (task) {
                for (let i = 0; i < tasks.length; i++){
                    tasks[i].completed === 0 ? tasks[i].completed = false : tasks[i].completed = true
                }
            res.status(200).json(task);
        }})
        .catch(error => {
            res.status(500).json({error: 'could not access database.'});
        });
});

router.get('/res', (req, res) => {
    tasks
        .getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            res.status(500).json({error: 'could not access database.'});
        });
});

//add a project
router.post('/project', async (req, res) => {
    const postData = req.body;

    try {
        const add = await tasks.addProject(postData);
        res.status(201).json(add);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create new scheme' });
    }
});

//add a task
router.post('/task', async (req, res) => {
    const postData = req.body;

    try {
        const add = await tasks.addTask(postData);
        res.status(201).json(add);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create new scheme' });
    }
});

//add a project
router.post('/res', async (req, res) => {
    const postData = req.body;

    try {
        const add = await tasks.addResource(postData);
        res.status(201).json(add);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create new scheme' });
    }
});



    module.exports = router;


     //     task.forEach(i => {
        //         if(task[i].completed === 0){
        //             const newObj = {...task, (task[i]).completed }
        //             res.status(200).json(newObj);
        //         } 
        //         else if (task[i].completed === 1){
        //             const newObj = {...task, task[i].completed }
        //             res.status(200).json(newObj);
        //         } 
        //         else {
        //             res.status(500).json({message: 'server messed up conversion'})
        //         }
        //     });