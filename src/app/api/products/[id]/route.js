
// !Lab 3
export async function GET(request, context) {
    const {id} = context.params;
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const posts = await data.json();
    return  new Response(JSON.stringify(posts), {status: 200})
}
