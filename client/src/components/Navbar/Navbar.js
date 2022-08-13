import React from 'react';
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()

    const token = localStorage.getItem('accessToken')

    return (
        <>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <Link to="/">
                        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </Link>
                </div>
                <div class="flex-none">
                    {
                        token ?
                            <>
                                <Link to="/">
                                    <p className="mr-3">Home</p>
                                </Link>
                                <Link to="/quotes">
                                    <p className="mr-3">Quotes</p>
                                </Link>
                            </> :
                            <>
                                <Link to="/register">
                                    <p className="mr-3">Register</p>
                                </Link>
                                <Link to="/login">
                                    <p className="">Login</p>
                                </Link>
                            </>
                    }


                    {
                        token &&
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to="/profile">
                                    <li>
                                        <a class="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                </Link>
                                <Link to="/create-quote">
                                    <li>
                                        <a class="justify-between">
                                            Create Quote
                                            <span class="badge badge-success text-white font-semibold">new</span>
                                        </a>
                                    </li>
                                </Link>
                                <li onClick={() => {
                                    localStorage.removeItem('accessToken')
                                    navigate('/login')
                                }}><a className='text-red-500'>Logout</a></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;