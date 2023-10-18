import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Products() {


    const { BrandName } = useParams()
    console.log(BrandName)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/products/${BrandName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])
    console.log(products)

    return (
        <div>
            <>
                <Swiper Navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        products.map(item => <SwiperSlide key={item._id}>
                            <img className='h-96 w-full' src={item.Image} alt="" />
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </>

            <div className='grid md:grid-cols-3'>
                {
                    products.map(product =>
                        <div key={product._id}>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={product.Image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <p>{product.BrandName}</p>
                                    <h2 className="card-title">{product.Name}</h2>
                                    <p>{product.ShortDescription}</p>
                                    <p>{product.Price}</p>
                                    <div className="card-actions justify-center">
                                        <button className="btn btn-primary">Update</button>
                                        <button className="btn btn-primary">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>


        </div>
    )
}

export default Products