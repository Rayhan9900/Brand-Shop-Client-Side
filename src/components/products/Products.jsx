import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import ProductCard from './ProductCard';

function Products() {


    const { BrandName } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`https://brand-shop-server-i09jslbpl-rayhanmahmud990099-gmailcom.vercel.app/products?BrandName=${BrandName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])

    return (
        <div>
            <>
                <Swiper Navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        products.map(item => <SwiperSlide key={item._id}>
                            <img className=' w-full h-96' src={item.Image} alt="" />
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </>

            <div className='grid md:grid-cols-3 gap-5 mt-7'>
                {
                    products.map(product =>
                        <ProductCard key={product._id} product={product} />
                    )
                }
            </div>


        </div>
    )
}

export default Products