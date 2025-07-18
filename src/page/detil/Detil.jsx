import React, { useLayoutEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useFetch } from '../../hook/useFetch'
import "./Detil.css"

const Detil = () => {
    const { id } = useParams()
    const { data, error, loading } = useFetch(`/products/${id}`)

    console.log(data);

    if (error) {
        return <p>nimadir xato</p>
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })
    return loading ? (
        <p>loading...</p>
    ) : (
        <div className='detil container'>
            <div className='detilFlex'>
                <div>
                    <img className='imgDetil' src={data?.image} alt="" />
                </div>
                <div className='detilContext'>
                    <i>{data?.title}</i>
                    <p>{data?.description}</p>
                    <button className='btnDetil'>{data?.price} $</button>
                    <div className='detiltext'>
                        <p>Reating: {data?.rating.rate}</p>
                        <p>Count: {data?.rating.count}</p>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default Detil