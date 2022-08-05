const express = require("express");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { connectToDb, getDb } = require("./db");
const products = require("./products");

// init app and add middleware
const app = express();
app.use(express.json);
// db connection
let db;

connectToDb((err) => {
  if (!err) {
    app.listen(5000, () => {
      console.log("Server has started at port 5000!!");
    });
    db = getDb();
  }
});

// route handling
app.get("/users", (req, res) => {
  let users = [];
  // have to use a method in js when wanting to manipulate those specifics values
  db.collection("users")
    .find()
    .sort({ title: 1 })
    .forEach((user) => users.push(user))
    .then(() => {
      res.status(200).json(users);
    })
    .catch(() => {
      res.status(500).send(console.log("Could not fetch docs"));
    });

  // a cursor is a document defined by our query
  // toArray fetches all the docs and puts it into an array
  // forEach fetches one at a time and can then process with less bandWidth being expended
});

app.get("/users/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("users")
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not fetch the document" });
      });
  } else {
    res.status(500).json({ error: "Could not fetch the document" });
  }
});

app.post("/users", (req, res) => {
  const users = req.body;

  db.collection("users")
    .insertOne(users)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: "Could not create new document" });
    });
});

app.delete("/users/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("users")
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not delete the document" });
      });
  } else {
    res.status(500).json({ error: "Could not fetch the document" });
  }
});

app.patch("/users/:id", (req, res) => {
  const updates = req.body;

  if (ObjectId.isValid(req.params.id)) {
    db.collection("users")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: { updates } })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: "Could not delete the document" });
      });
  } else {
    res.status(500).json({ error: "Could not fetch the document" });
  }
});
