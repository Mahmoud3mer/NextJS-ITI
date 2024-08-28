import Card from "@/components/card/card";
// import allPosts from "@/lib/fetchAllPosts";
// import postById from "@/lib/fetchPostById";
// import clientPromise from "@/lib/mongodb";
// import { MongoClient } from "mongodb";
import React from "react";

export const metadata ={
    title: "Blogs"
}

const Blog = async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await data.json();
    console.log(posts)

    // ! Using monogo database
    // const mongoClint = new MongoClient("mongodb://localhost:27017/");
    // const client = await clientPromise;
    // const db = client.db('MyPosts');
    // const posts = await db.collection('Posts').find({}).toArray();

    // const posts = await allPosts;

    // post by id
    // const post = await postById;
    // console.log(post)

    // ! Lab 3  get data using custom api
    // const data = await fetch("http://localhost:3000/api/products")
    // const posts = await data.json();
    // console.log(posts)
    
    return(
        <div>
            {posts.map((post) => (
                <Card
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    userID={post.userId}
                    id={post.id}
                />
            ))}
        </div>
    )
}

export default Blog;