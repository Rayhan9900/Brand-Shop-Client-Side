import React from 'react'
import { useLoaderData } from 'react-router-dom'

function MyCard() {
    const myCarts = useLoaderData()
    return (
        <div className='my-24'>
            <h2 className='text-center my-12 uppercase text-3xl text-accent'>MY CARTS</h2>
            <div className='grid md:grid-cols-3 gap-16'>
                {
                    myCarts.map(({ Image, BrandName, Name, ShortDescription, Price, Rating, _id }) =>
                        <div key={_id} className="card w-96 h-96 bg-base-100 shadow-xl image-full">
                            <figure><img src={Image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-amber-500">{BrandName}</h2>
                                <p className='text-amber-600'>{Name}</p>
                                <button className='btn border-b-4 border-sky-500'>Delete Cart</button>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MyCard