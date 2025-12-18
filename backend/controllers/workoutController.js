const Workout = require("../models/workoutModel");

// get all workouts
const getWorkouts= async(req,res)=>{
    try {
       const allWorkouts= await Workout.find().limit(10);
       if (!allWorkoutsWorkout) {
         return res.status(404).json({ message: "Workouts Not found" });
       }
       res.status(200).json(allWorkouts)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// get a single workout
const oneWorkout=async(req,res)=>{
    try {
        const singleWorkout=await Workout.findById(req.params.id);
        if (!singleWorkout){
            return res.status(404).json({message:'Workout Not found'});
        };
        res.status(200).json(singleWorkout)
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
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
    const singleWorkout = await Workout.findByIdAndDelete(req.params.id);
    if (!singleWorkout) {
      return res.status(404).json({ message: "Workout Not found" });
    }
    res.status(200).json({message:'Workout Deleted Successfully'});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// update a workout

module.exports = {
  createWorkout,
  getWorkouts,
  oneWorkout,
  deleteWorkout,
};