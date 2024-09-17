const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// POST route for creating a new person
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('Data saved');
        res.status(200).json(response);
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(400).send(error);
    }
});

// GET route for fetching all persons
router.get('/', async (req, res) => {
    try {
        const response = await Person.find();
        console.log("Data fetched");
        res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(400).send(error);
    }
});

// GET route for fetching persons by work type
router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype.toLowerCase();
        if (['backend', 'frontend', 'fullstack'].includes(worktype)) {
            const result = await Person.find({ work: worktype });
            console.log("Response fetched");
            res.status(200).json(result);
        } else {
            res.status(400).send('Invalid worktype');
        }
    } catch (err) {
        console.error('Error fetching by work type:', err);
        res.status(400).send(err);
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const data = req.body;
        const updatedPerson = await Person.findByIdAndUpdate(id, data, {
            new: true,
            runValidators:true
        });
        if(!updatedPerson){
            res.status(404).send('Person not found');
        }
        console.log('Data updated');
        res.status(200).json(updatedPerson);

    }catch(err){
        console.error('Error updating person:', err);
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const deletedPerson = await Person.findByIdAndDelete(id);
        if(!deletedPerson){
            res.status(404).send('Person not found');
            }
            console.log('Person deleted');
            res.status(200).send('Person deleted');
        }
            catch(err){
                console.error('Error deleting person:', err);
            }
})

module.exports = router;
