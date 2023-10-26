const router = require('express').Router();
const Habit = require('../models/habitModel')
const habitController = require('../controller/index');


// Get Habits From Database
router.get('/',habitController.home);
// Find the Date and Return the string Date
router.post('/habit',habitController.createHabit);
// Habit Status Update per Days
router.get("/habitStatus", habitController.getHabit);
// Delete Habit
router.get("/:id", habitController.deletehabit);
module.exports = router;
