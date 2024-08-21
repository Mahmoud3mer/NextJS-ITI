import clientPromise from "./mongodb";

const client = clientPromise;
const db = client.db('MyPosts');
const postById = db.collection('Posts').find({id:3}).toArray();

export default postById;