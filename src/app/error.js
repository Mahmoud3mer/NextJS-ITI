'use client' // Error boundaries must be Client Components

export default function Error({ error, reset }) {
    return (
        <div className="bg-red-600 px-3 py-4 mx-4 my-3">
            <h2 className="text-white text-center font-bold">{error.message}</h2>
            <button onClick={() => reset()} className="bg-yellow-500 rounded-xl p-2 text-white">Try again</button>
        </div>
    )
}