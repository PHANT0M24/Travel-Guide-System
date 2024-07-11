const { MongoClient, ServerApiVersion } = require("mongodb");

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const bcrypt = require("bcrypt");
const salt = 10;

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
const uri =
  "mongodb+srv://mkarifat24:khairulanam24@travelguidesystem.dqchubt.mongodb.net/?retryWrites=true&w=majority&appName=TravelGuideSystem";
=======
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tjpswkv.mongodb.net/?appName=Cluster0`;
// console.log(uri);
>>>>>>> 4b2637fa9f170c74181ef82a04a3bb4b12b419f3

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("usersDB");
    const userCollection = database.collection("users");

    const feedbackCollection = client.db("travelDB").collection("feedback");
<<<<<<< HEAD

    app.post("/registration", async (req, res) => {
      const user = req.body;
      try {
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        console.log(user.password);

        const result = await userCollection.insertOne(user);
        res.send(result);
      } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).send("Error during registration");
      }
    });

    app.post("/login", async (req, res) => {
      const { email, password } = req.body;

      try {
        const user = await userCollection.findOne({ email: email });
        if (!user) {
          console.log("User not found");
          return res.status(400).send("User not found");
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          console.log("Invalid password");
          return res.status(400).send("Invalid password");
        }

        // Exclude the password field
        const { password: _, ...userWithoutPassword } = user;
        res.send(userWithoutPassword);
      } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Error during login");
      }
    });

=======
    // feedback read
>>>>>>> 4b2637fa9f170c74181ef82a04a3bb4b12b419f3
    app.get("/feedback", async (req, res) => {
      const cursor = feedbackCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // add feedback
    app.post("/feedback", async (req, res) => {
      const newFeedback = req.body;
      console.log(newFeedback);
      const result = await feedbackCollection.insertOne(newFeedback);
      res.send(result);
    });
    // delete feedback
    app.delete("/feedback:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await feedbackCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Easter Ease Server is running");
});
app.listen(port, () => {
  console.log(`Easter Ease server is running on port ${port}`);
});
// async function connectDB() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     console.log("Connected to MongoDB!");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// // Call connectDB to connect to the database at the start
// connectDB();

// const database = client.db("usersDB");
// const userCollection = database.collection("users");

// app.post("/registration", async (req, res) => {
//   const user = req.body;
//   try {
//     const hash = await bcrypt.hash(user.password, salt);
//     user.password = hash;
//     console.log(user.password);

//     const result = await userCollection.insertOne(user);
//     res.send(result);
//   } catch (error) {
//     console.error("Error during registration:", error);
//     res.status(500).send("Error during registration");
//   }
// });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await userCollection.findOne({ email: email });
//     if (!user) {
//       console.log("User not found");
//       return res.status(400).send("User not found");
//     }

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//       console.log("Invalid password");
//       return res.status(400).send("Invalid password");
//     }

//     // Exclude the password field
//     const { password: _, ...userWithoutPassword } = user;
//     res.send(userWithoutPassword);
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).send("Error during login");
//   }
// });
