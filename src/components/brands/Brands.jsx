import React, { useEffect, useState } from 'react'
import BrandCard from './BrandCard'

const Brands = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/brand')
            .then(res => res.json())
            .then(data => {
                setBrands(data)
            })
    }, [])





    return (
        <div className='mb-5 '>
            <h2 className="text-3xl text-center text-cyan-400 ">NEW ARRIVALS</h2>
            <p className='text-xl text-center mb-5'>FIND THE PERFECT PHONE FOR YOU</p>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3'>
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>

        </div>
    )
}

export default Brands