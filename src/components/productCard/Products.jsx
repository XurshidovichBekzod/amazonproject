import React from 'react'
import "./Products.css"
import { useNavigate } from 'react-router-dom'

const Products = ({data}) => {

  const navigate = useNavigate()

  return (
    <div className='productsWrapper'>
        {
            data?.map((products) => (
                <div key={products.id} className='cardProducts'>
                    <img onClick={()=> navigate(`/product/${products.id}`)} src={products.image} alt="" />
                    <button className='productsBtn'>{products.price} $</button>
                    <p>{products.category}</p>
                    <div className='rating'>
                      <p>{products.rating.rate}</p>
                      <p>{products.rating.count}</p>
                    </div>
                    <button onClick={()=> navigate(`/product/${products.id}`)} className='learnMore'>Learn More</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products