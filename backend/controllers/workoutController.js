const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");


// get all workouts
const getWorkouts= async(req,res)=>{
    try {
       const allWorkouts= await Workout.find({}).sort({createdAt:-1});
       if (!allWorkouts) {
         return res.status(404).json({ message: "Workouts Not found" });
       }
        res.status(200).json(allWorkouts);

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// get a single workout
const oneWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid workout ID" });
    }

    const singleWorkout = await Workout.findById(id);

    if (!singleWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json(singleWorkout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
// adding the document to db
  try {

    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);

  } catch (error) {

    res.status(400).json({ error: error.message });

  }
};

// delete a workout
const deleteWorkout= async(req,res)=>{
  try {
    const{id}=req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid workout ID" });
    }

    const singleWorkout = await Workout.findOneAndDelete({_id:id});
    if (!singleWorkout) {
      return res.status(404).json({ message: "Workout Not found" });
    }
    res.status(200).json({ message: "Workout Deleted Successfully" });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// update a workout
const updateWorkout=async(req,res)=>{
  try {
    const{id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid workout ID" });
    }

    const oneWorkout = await Workout.findOneAndUpdate({_id:id},{
      ...req.body
    },{new:true});
    if(!oneWorkout){
      return res.status(404).json({message:'Workout not found'})
    }
      res.status(200).json({ message: "Workout Updated Successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {getWorkouts,createWorkout,deleteWorkout,updateWorkout,oneWorkout};