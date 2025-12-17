const express=require('express');
const router=express.Router();
const Workout=require('../models/workoutModel')

// GET ALL WORKOUTS
router.get('/',async(req,res)=>{
    
    try {
        const workouts= await Workout.find();
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json(error.error.message)
    }
});

// GET A SINGLE WORKOUT
router.get('/:id',(req,res)=>{
    res.json({msg:'Get single workout'})
});

// POST A NEW WORKOUT
router.post('/',async (req,res)=>{
    const{title,reps,load}=req.body;

    try{
        const workout= await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})

    }
});

// DELETE NEW WORKOUT

router.delete('/:id',(req,res)=>{
    res.json({msg:'DELETE A new Workout'})
})

// UPDATE A WORKOUT
router.patch('/:id',(req,res)=>{
    res.json({msg:'UPDATE A new Workout'})
})
module.exports=router;