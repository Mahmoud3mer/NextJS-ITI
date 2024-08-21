import { MongoClient } from "mongodb";

const mongoClint = new MongoClient("mongodb://localhost:27017/");
const clientPromise = await mongoClint.connect();

export default clientPromise;