
import { MongoClient } from "mongodb";

// export async function GET(request) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const posts = await data.json();
//     return  new Response(JSON.stringify(posts), {status: 200})
// }

// !Lab 3

export async function GET(request) {
    const mongoClint = new MongoClient("mongodb://localhost:27017/");
    const client = await mongoClint.connect();
    const db = client.db('MyPosts');
    const allPosts = await db.collection('Posts').find({}).toArray();
    return  new Response(JSON.stringify(allPosts), {status: 200})
}

export async function POST(request) {
    const mongoClint = new MongoClient("mongodb://localhost:27017/");
    const client = await mongoClint.connect();
    const db = client.db('MyPosts');
    const data = await request.json()
    await db.collection('Posts').insertMany(data);
    return  new Response("Added Successed", {status: 201})
}


 