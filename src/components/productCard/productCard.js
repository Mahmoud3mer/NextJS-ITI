"use client";
import Image from 'next/image';
import { useState } from "react";

function ProductCard(props) {
    const [likes ,setLikes] = useState(0)
    const increamentLikes = () => {
        setLikes(likes + 1);
    }

    // className="w-full h-72"
    return (
        <div>
            <div className="bg-slate-200 rounded-xl mx-auto my-9 pb-4 w-[50%]">
                <div>
                    <Image src={props.image} width={500} height={100} alt={props.title}/>
                </div>
                <h6 className="font-bold text-center text-cyan-600 py-3">{props.title}</h6>
                <p className="font-light text-center py-3">{props.description}</p>
                <h1 className="text-yellow-700 text-center font-bold">Price: {props.price}$</h1>

                
            </div>
        </div>
    )
}

export default ProductCard;