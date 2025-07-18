import React from 'react'

const Skleton = () => {
    return (
        <div className='productsWrapper'>
            {
                Array(10).fill().map((_, inx) => (
                    <div key={inx} className='skleton'>
                        <div></div>
                    </div>
                ))
            }
        </div>
    )
}
    export default Skleton