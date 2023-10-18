import React from 'react'

const BrandCard = ({ brand }) => {
    const { _id, BrandName, Image, Name, Price, Rating, ShortDescription, Type } = brand
    return (
        <div>
            <div className="card  w-96 bg-base-100  shadow-xl">
                <figure><img className='w-64 h-64' src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className='text-orange-400 ml-7'>{BrandName}</h2>
                    <h2 className="card-title ml-7">{Name}</h2>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandCard