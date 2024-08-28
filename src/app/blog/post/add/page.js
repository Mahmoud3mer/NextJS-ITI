"use client"
import { useState } from "react";

function Add() {
    const [formData,setFormData] = useState({})

    const handleDataForm = (ev) => {
        const key = ev.target.name
        const value = ev.target.value
        setFormData((formData) => ({...formData , [key]: value}));
        console.log(formData)
    }

    const submitData = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3000/api/products",{
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: JSON.stringify(formData)
        })

        console.log(res)
    }

    return (
        <> 
            <form className="border-2 rounded-xl border-blue-600 p-6 my-5 mx-auto w-96" onSubmit={(e)=> submitData(e)}>
                <div>
                    <label htmlFor="title" className="text-blue-600 font-bold">Title: </label>
                    <input onChange={(e) => handleDataForm(e)} type="text" name="title" id="title" className="border-2 w-full rounded-lg outline-none"/>
                </div>
                <div>
                    <label htmlFor="description" className="text-blue-600 font-bold">Description: </label>
                    <textarea onChange={(e) => handleDataForm(e)} type="text" name="description" id="description" className="border-2 w-full rounded-lg outline-none"/>
                </div>
                <div>
                    <label htmlFor="image" className="text-blue-600 font-bold">Image: </label>
                    <input onChange={(e) => handleDataForm(e)} type="file" name="image" id="image" className="w-full rounded-lg"/>
                </div>
                <button className="w-full bg-blue-700 text-white rounded-md my-3 py-2">Send</button>
            </form>
        </>
    )
}

export default Add;