require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
// app.use (cors({origin:["http://localhost:5000","https://sparkling-narwhal-878eb0.netlify.app"]}))
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.h3mej.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const movieCollection = client.db("movieDb").collection("allInfo");
    const myFavoriteCollection = client.db("movieDb").collection("favorite")

    app.post('/addMovie', async (req, res) => {
      const newMovie = req.body;
      const result = await movieCollection.insertOne(newMovie);
      res.send(result)
    })

    app.get('/addMovie', async (req, res) => {
      const cursor = movieCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get("/ratingBySort", async (req, res) => {
      const cursor = movieCollection.find().sort({ "rating": -1, "_id": -1 }).limit(6);
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/addMovie/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await movieCollection.findOne(query)
      res.send(result)
    })

    app.get('/updatemovie/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await movieCollection.findOne(query)
      res.send(result)
    })

    app.post('/myFavorite', async (req, res) => {
      const favorite = req.body;
      const result = await myFavoriteCollection.insertOne(favorite)
      res.send(result)
    })

    app.get('/myFavorite', async (req, res) => {
      const cursor = myFavoriteCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/myFavorite/:email',async(req,res) => {
      const myEmail = req.params.email;
      const query = {favoriteBy: myEmail}
      const result = await myFavoriteCollection.find(query).toArray()
      res.send(result)
    })

    app.delete('/myFavorite/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await myFavoriteCollection.deleteOne(query)
      res.send(result)
    })

    app.put('/updatemovie/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true };
      const updaterMovie = req.body;
      const movie = {
        $set: {
          rating: updaterMovie.rating,
          poster: updaterMovie.poster,
          genre: updaterMovie.genre,
          title: updaterMovie.title,
          duration: updaterMovie.duration,
          year: updaterMovie.year,
          summary: updaterMovie.summary,
        }
      }
      const result = await movieCollection.updateOne(filter, movie, options);
      res.send(result)
    })

    app.delete('/addMovie/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await movieCollection.deleteOne(query)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('A big online movi site')
})

app.listen(port, () => {
  console.log(`movie portal running on PORT: ${port}`)
})