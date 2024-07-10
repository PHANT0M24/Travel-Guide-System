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

const uri =
  "mongodb+srv://mkarifat24:khairulanam24@travelguidesystem.dqchubt.mongodb.net/?retryWrites=true&w=majority&appName=TravelGuideSystem";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call connectDB to connect to the database at the start
connectDB();

const database = client.db("usersDB");
const userCollection = database.collection("users");

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
      return res.status(400).send("User not found");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).send("Invalid password");
    }

    res.send(user);
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Error during login");
  }
});

app.get("/", (req, res) => {
  res.send("Simple Crud Running");
});

app.listen(port, () => {
  console.log(`Simple CRUD is running on port ${port}`);
});
