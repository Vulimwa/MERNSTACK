require("dotenv").config();
const express = require('express');
const connectdb = require('../backend/config/db');
const workoutsRoutes=require('./routes/workouts');
const connectDB = require("../backend/config/db");

// Express app
const app = express();

// Middlewares
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.method,req.path,res.statusCode)
    next()
});

// Routes
app.use('/api/workouts',workoutsRoutes);

// listen for requests
const PORT=process.env.PORT||3000
connectDB().then(()=>{
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
});


