"use client";

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";



function Card(props) {
    const [likes ,setLikes] = useState(0)

    const increamentLikes = () => {
        setLikes(likes + 1);
    }

    return (
        <div>
            <div className="bg-slate-200 rounded-xl mx-auto my-6 py-4 w-[70%]">
                <Link href={`blog/post/${props.id}`}>
                    <h6 className="font-bold text-center text-cyan-600 py-3">{props.title}</h6>
                    <p className="font-light text-center py-3">{props.body}</p>
                </Link>
                <div 
                    className="flex gap-x-1 bg-blue-700 text-white w-20 text-center justify-center items-center rounded-xl ms-3 cursor-pointer"
                    onClick={() => increamentLikes()}
                    >
                        <span>Like</span><FontAwesomeIcon icon={faThumbsUp}  className="text-xl w-3"/> <span className="text-xs">: {likes}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;