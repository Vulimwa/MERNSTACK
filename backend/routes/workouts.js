const express=require('express');
const router=express.Router();
const {
  createWorkout,
  getWorkouts,
  oneWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

// GET ALL WORKOUTS
router.get('/',getWorkouts);

// GET A SINGLE WORKOUT
router.get('/:id',oneWorkout);

// POST A NEW WORKOUT
router.post('/',createWorkout);

// DELETE NEW WORKOUT

router.delete('/:id',deleteWorkout)

// UPDATE A WORKOUT
router.patch('/:id',(req,res)=>{
    res.json({msg:'UPDATE A new Workout'})
})
module.exports=router;