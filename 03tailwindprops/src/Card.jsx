import React from 'react'

function Card({ username = "visit me", description = "No description available." }) {
    return (
        <div className="bg-gray-400 shadow-xl rounded-xl p-4 m-2">
            <h2 className="text-xl font-bold mb-2">{username}</h2>
            <p className="text-gray-700">{description}</p>
        </div>
    )
}

export default Card