import React from 'react';
import {  Layout } from 'antd';
import {Link} from 'react-router-dom'
import "../Navbar/Navbar.css"
import logo from "../Images/channels4_profile.jpg"



const Navbar = () => {
    return (
        <Layout>
            <nav id='Navbar'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className='menu' >
                    <Link className='abc' to={"/"}> <div>Home</div> </Link>
                    <Link className='abc' to={"/about"}> <div>About</div> </Link>
                    <Link className='abc' to={"/contact"}> <div>Contact</div> </Link>
                    <Link className='abc' to={"/login"}> <div>Login</div> </Link>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search' className='form-control' />
                    <button className='btn btn-light'>Search</button>
                </div>
            </nav>
        </Layout>
    );
};
export default Navbar;