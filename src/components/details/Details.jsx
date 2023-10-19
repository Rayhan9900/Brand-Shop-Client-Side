import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Details() {
    const singleData = useLoaderData();
    console.log(singleData)
    return (
        <div>Details</div>
    )
}

export default Details