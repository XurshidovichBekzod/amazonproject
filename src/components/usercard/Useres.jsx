import React from 'react'
import { useNavigate } from 'react-router-dom'
import imgsecont from "../../assets/img.png"
import "./Useres.css"
const Useres = ({ data }) => {

    const navigate = useNavigate()
    return (
        <div className='productsWrapper'>
            {
                data?.map((user) => (
                    <div key={user.id} className='cardUsers'>
                        <div className='center'>
                            <img className='userImg' onClick={()=> navigate(`/user/${user.id}`)} src={imgsecont} alt="" />
                        </div>
                        <div>
                            <h2>{user.name.firstname} {user.name.lastname} </h2>
                            <p>City: {user.address.city}</p>
                            <p>Phone: {user.phone}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
//  
export default Useres