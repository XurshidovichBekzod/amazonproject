import React, { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hook/useFetch';
import imgsecont from "../../assets/img.png"
import "./Userinfo.css"

const Userinfo = () => {

    const { id } = useParams()
    const { data, error, loading } = useFetch(`/users/${id}`)

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

        <div className='container userInfo'>
            <div className='imgWith'>
                <img src={imgsecont} alt="" />
            </div>
            <div className='userText'>
                <i>{data?.name.firstname} {data?.name.lastname}</i>
                <p>His name is {data?.name.firstname}. He is 25 years old and lives in {data?.address.city}. {data?.name.firstname} is a very kind and hardworking person. He works as a frontend developer at a local IT company. In his free time, he enjoys reading books, learning new technologies, and spending time with his family
                 {data?.name.firstname} speaks Uzbek, Russian, and is currently learning English</p>
                 <h3>Email: {data?.email}</h3>
                 <h3>Phone: {data?.phone}</h3>
            </div>
        </div>
    )
}

export default Userinfo