const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const jobs = require("./jobData/JobData.json")

app.use(cors());

app.get("/", (req, res)=>{
    res.send("Job Server is running Well....")
})

app.get('/jobs/', (req, res)=>{
    res.send(jobs)
})

app.get('/jobs/:id', (req, res)=>{
    const id = req.params.id;
    const job = jobs.find(job => job.id == id)
    res.send(job);
    
})

app.listen(port, (req,res)=>{
    console.log(`server is running on port ${port}`)
})