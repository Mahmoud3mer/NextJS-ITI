"use client"
import Card from "@/components/card/card";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Post = (props) => {
    const[postId ,setPostId] = useState(props.params.id)
    const[post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => res.json())
        .then((data) => setPost(data))
        .catch((error) => console.error("Error fetching post:", error)); 
    },[postId])

    const router = useRouter()

    const goToPrevPost = () => {
        const newPostId = +postId - 1;
        setPostId(newPostId);
        router.push(`/blog/post/${newPostId}`);
    };

    const goToNextPost = () => {
        const newPostId = +postId + 1;
        setPostId(newPostId);
        router.push(`/blog/post/${newPostId}`);
    };

    return(
        <>
            <Card
                key={post.id}
                title={post.title}
                body={post.body}
                userID={post.userId}
                id={post.id}
            />
            <ul className="flex justify-around my-3">
                <li className="bg-green-600 text-white px-3 py-2 rounded-lg cursor-pointer" onClick={goToPrevPost}>Previous</li>
                <li className="bg-green-600 text-white px-3 py-2 rounded-lg cursor-pointer" onClick={goToNextPost}>Next</li>
            </ul>
        </>
        
    )
}

export default Post;