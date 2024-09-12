
const express = require('express');
const router = express.Router();
const Student = require('../models/student'); 


router.get('/students', async (req, res) => {
    try {
        const students = await Student.findAll(); 
        res.status(200).json(students); 
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Failed to fetch students' });
    }
});

module.exports = router;
