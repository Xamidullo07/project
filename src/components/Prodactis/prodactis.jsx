import { useEffect, useState } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import React from 'react'
import './prodacts.css'
import axios from 'axios'


const Prodactis = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoadin]  = useState(false)
    const [offset, setOffset] = useState(1)
     
    const perPageCount = 8
    useEffect(() => {
        setLoadin(true)
        axios
            .get("https://dummyjson.com/products",{
                params:{
                    limit: offset * perPageCount
                }
            })
            .then(res => {
                setProducts(res.data.products)
            })
            .catch()
            .finally(() => setLoadin(false))
    }, [offset])
    return (
        <div>
            <h3 className='prodacts_title'>Prodacts</h3>
            <div className='wrapper'>
                {
                    products?.map((products) => [
                        <div key={products.id} className='card'>
                            <img src={products.thumbnail} alt="" />
                            <h3 className='card_title'>{products.title}</h3>
                            <strong className='card_usd'>{products.prics} USD</strong>
                            <br/>
                            <button className='card_btn'>Buy now</button>
                        </div>
                    ])
                }

            </div>
            {
                loading && <Skeleton count={perPageCount}/>
            }

            <button onClick={() => setOffset(p => p + 1)} className='see__btn'>See more</button>
        </div>
    )
}

export default Prodactis