import React from 'react'
import './skeleton.css'

function Skeleton({count}) {
    return (
        <div className='skeleton'>
            {
                Array(count).fill().map((_, inx) => (
                    <div className='skeleton__itme'>
                        <div className='skeleton__image skeleton__animetion'></div>
                        <div className='skeleton__title skeleton__animetion'></div>
                        <div className='skeleton__title skeleton__animetion'></div>
                    </div>
                ))
            }
        </div>
    )
}

export default Skeleton