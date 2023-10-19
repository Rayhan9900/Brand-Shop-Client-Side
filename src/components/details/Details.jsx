import React from 'react'
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom'

function Details() {
    const singleData = useLoaderData();
    console.log(singleData)
    const { Image, BrandName, Name, ShortDescription, Price, Rating, _id } = singleData;

    const handleAddCart = (item) => {
        fetch(`http://localhost:5000/carts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Add Product Successfully')
                }
            })
    }


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-8">
                <figure><img className='w-96' src={Image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-amber-500">{BrandName}</h2>
                    <h2 className='text-emerald-300'>{Name}</h2>
                    <p>{ShortDescription}</p>
                    <p>Price:${Price}</p>
                    <p>{Rating}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddCart(singleData)} className="btn btn-primary">Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details