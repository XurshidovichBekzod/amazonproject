import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo.png"
import "./Header.css"
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
    return (
        <header className='header'>
            <nav className='navbar container'>
                <ul className='collection'>
                    <li className='item'>
                        <NavLink to={"/product"}>
                            <img className='logo' src={logo} alt="" />
                        </NavLink>
                    </li>
                    <div className='felxCard'>
                        <input className='inp' type="text" placeholder='Search Amazon' />
                        <div className='card'>
                            <IoSearchSharp className='icon' size={20} color="black" />
                        </div>
                    </div>
                    <div className='textHeader'>
                        <li className='item'>
                            <NavLink to={"/product"}>
                                <p>Products</p>
                            </NavLink>
                        </li>
                        <li className='item'>
                            <NavLink to={"/user"}>
                                <p>User</p>
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header