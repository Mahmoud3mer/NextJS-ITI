import React from "react";

export const metadata ={
    title: "Cars"
}
//http://localhost:3000/Souq/Cars/BMW/Red
const Cars = ({params}) => {
    // console.log(params.Cars);
    
    return(
        <div>
            <ul className="bg-sky-500 p-8 mx-3 my-5">
                {params.Cars.map((ele,index) => (
                    <li key={index} className="text-white text-center text-2xl font-bold my-3">{ele}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cars;