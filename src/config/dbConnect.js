import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ghabriel:123@ghabriel.di5ss.mongodb.net/ghabriel-node")

let db = mongoose.connection;

export default db;