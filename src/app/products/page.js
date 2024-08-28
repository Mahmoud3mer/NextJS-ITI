import ProductCard from "@/components/productCard/productCard";
import React from "react";

export const metadata ={
    title: "Products"
}

const Products = async() => {
    // ! 1- SSR
    // const data = await fetch("https://fakestoreapi.com/products",{
    //     cache: "no-cache"
    // })

    // ! 2- SSG
    // const data = await fetch("https://fakestoreapi.com/products")

    // ! 3- ISR 
    // const data = await fetch("https://fakestoreapi.com/products",{
    //     revalidate: 60
    // })

    // const posts = await data.json();
    // console.log(posts)
    
    return(
        <div>
            {/* {posts.map((post) => (
                <ProductCard
                    key={post.id}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    price={post.price}
                />
            ))} */}
        </div>
    )
}

export default Products;