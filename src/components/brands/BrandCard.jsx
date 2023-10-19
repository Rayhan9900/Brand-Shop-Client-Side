import React from 'react'
import { Link } from 'react-router-dom'

const BrandCard = ({ brand }) => {
    const { _id, BrandName, Image, Name, Price, Rating, ShortDescription, Type } = brand
    return (
        <div>
            <Link to={`/products/${BrandName}`}>
                <div className="card  w-96 bg-base-100  shadow-xl">
                    <figure><img className='w-64 h-64' src={Image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className='text-amber-500 ml-7'>{BrandName}</h2>
                        <h2 className="card-title ml-7 text-amber-600">{Name}</h2>
                        <div className="">

                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default BrandCard