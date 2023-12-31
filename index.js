const express = require("express");
const app = express();
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require('cors');
const port = process.env.PORT || 3000;
const jobs = require("./jobData/JobData.json")

app.use(cors());
app.use(express.json());
// const dotenv = require('dotenv').config();


app.get("/", (req, res)=>{
    res.send("Job Server is running Well....")
})
app.get('/jobs/', async(req, res)=>{
    res.send(jobs)
})

app.get('/jobs/:id', (req, res)=>{
    const id = req.params.id;
    const job = jobs.find(job=> job.id ==id)
    res.send(jobs);
    
})













// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(process.env.DATABASE_URL, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     const database = client.db("JobDB");
//     const jobsCollection = database.collection("Jobs");
//     const userDatabase = client.db("clientDB");
//     const clientCollection = userDatabase.collection("clients");

//     app.get('/jobs/', async(req, res)=>{
//         const cursor = jobsCollection.find()
//         const result = await cursor.toArray();
//         res.send(result)
//     })

//     app.get('/jobs/:id', async(req, res)=>{
//         const id = req.params.id;
//         const query = {_id: new ObjectId(id)}
//         const job = await jobsCollection.findOne(query)
//         res.send(job);
        
//     })

//     //get clients data 
//     app.get('/clients', async(req,res)=>{
//         const cursor = clientCollection.find()
//         const result = await cursor.toArray();
//         res.send(result);
//     })


//     // add client in data base
//     app.post("/clients", async (req, res) => {
//       const user = req.body;
//       const result = await clientCollection.insertOne(user);
//       res.send(result);
//     });

//     //delete client in data 
//     app.delete("/clients/:id", async(req, res)=>{
//         const id  = req.params.id;
//         console.log("id")
//         const qurey = {_id: new ObjectId(id)}
//         const result = await clientCollection.deleteOne(qurey);
//         res.send(result);
//     })

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.log);



app.listen(port, (req,res)=>{
    console.log(`server is running on port ${port}`)
})