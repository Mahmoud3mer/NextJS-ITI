"use client"
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
    const path = usePathname()
    return(
        <header className="bg-slate-300 px-4 py-5 flex flex-row justify-between">
            <div>
                <a href="" className={`px-3 me-2 text-blue-700 text-3xl hover:bg-cyan-200 rounded-md`}><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
            <div className="">
                <Link href="/login" className={`px-3 py-2 me-2 hover:text-red-600 hover:bg-cyan-200 rounded-md ${path =="/login"? "text-red-600 bg-cyan-200 rounded-md" : ""}`}>Login</Link>
                <Link href="/aboutus" className={`px-3 py-2 me-2 hover:text-red-600 hover:bg-cyan-200 rounded-md ${path =="/aboutus"? "text-red-600 bg-cyan-200 rounded-md" : ""}`}>Aboutus</Link>
                <Link href="/contactus" className={`px-3 py-2 me-2 hover:text-red-600 hover:bg-cyan-200 rounded-md ${path =="/contactus"? "text-red-600 bg-cyan-200 rounded-md" : ""}`}>Contactus</Link>
                <Link href="/blog" className={`px-3 py-2 me-2 hover:text-red-600 hover:bg-cyan-200 rounded-md ${path =="/blog"? "text-red-600 bg-cyan-200 rounded-md" : ""}`}>Blog</Link>
                <Link href="/blog/post/add" className={`px-3 py-2 me-2 hover:text-red-600 hover:bg-cyan-200 rounded-md ${path =="/blog"? "text-red-600 bg-cyan-200 rounded-md" : ""}`}>Add Post</Link>
                <Link href="/products" className={`px-3 py-2 me-2 hover:text-red-600 hover:bg-cyan-200 rounded-md ${path =="/products"? "text-red-600 bg-cyan-200 rounded-md" : ""}`}>Products</Link>
            </div>
            {/* <Link href="/login" >Login</Link> */}
        </header>
    )
}

export default Header;