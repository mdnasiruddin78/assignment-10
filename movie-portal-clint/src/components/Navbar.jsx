import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.webp';
import { HiMenuAlt1 } from "react-icons/hi";
import { useContext } from "react";
import { authContext } from "../Provider/Authprovider";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";


const Navbar = () => {

    const { logoutUser, user } = useContext(authContext)
    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className="flex justify-between items-center backdrop-blur bg-white/10 py-3 px-6">
            <div className="flex items-center space-x-1">
                {/* <img className="w-20 h-14 rounded-xl hidden lg:flex" src={logo} alt="logo" /> */}
                <h3 className="text-white hidden lg:flex text-2xl font-bold"><span className="text-green-500">MOVIE-</span><span className="text-[#0ea5e9]">PORTAL</span></h3>
                <div className="dropdown lg:hidden flex">
                    <div tabIndex={0} role="button"><HiMenuAlt1 className='text-3xl text-green-500' /></div>
                    <ul tabIndex={0} className="dropdown-content menu text-green-500 backdrop-blur bg-white/20 font-bold rounded-box z-[1] w-44 p-2">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/allmovies">All Movies</NavLink></li>
                        {
                            user &&  <li><NavLink to="/addmovie">Add Movie</NavLink></li>
                        }
                        {
                            user && <li><NavLink to="/myfavorites">My Favorites</NavLink></li>
                        }
                        {
                            user && <li><NavLink to="/upcamming">Upcamming movi</NavLink></li>
                        }
                    </ul>
                </div>
            </div>
            <div className="text-green-500 font-bold space-x-5 hidden lg:flex">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/allmovies'>All Movies</NavLink>
                {
                    user && <NavLink to='/addmovie'>Add Movie</NavLink>
                }
                {
                    user && <NavLink to='/myfavorites'>My Favorites</NavLink>
                }
                {
                    user && <NavLink to="/upcamming">Upcamming movi</NavLink>
                }
            </div>
            <div className='flex justify-between items-center space-x-2'>
                <div>
                    {
                        user && <div className='tooltip tooltip-left' data-tip={`${user?.displayName}`}><img className='w-12 rounded-full' src={user?.photoURL} alt="" /></div>
                    }
                </div>
                {
                    user && user.email ? <button onClick={logoutUser} className='btn px-7 rounded-full border-2 bg-[#002130] text-white'>Logout</button> : <div className="space-x-2">
                        <Link to="/login" className='btn px-7 rounded-full border-2 bg-[#002130] text-white'>Login</Link>
                        <Link to="/register" className='btn px-7 rounded-full border-2 bg-[#002130] text-white'>Register</Link>
                    </div>
                }
                 <button onClick={() => darkModeHandler()}>
                    {

                        dark && <IoSunny className="text-4xl text-green-500" />
                    }
                    {
                        !dark && <IoMoon className="text-4xl text-green-500" />
                    }
                </button>
            </div>
        </div>
    );
};

export default Navbar;