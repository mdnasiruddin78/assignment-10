import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import logo from '../assets/logo.webp';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-black text-white">
            <footer className="lg:flex md:flex justify-around  p-10 text-center">
                <nav className='flex flex-col space-y-3'>
                    <h6 className="footer-title text-xl">MOVIE-PORTAL</h6>
                    <Link to='/'><a className="link link-hover">Home</a></Link>
                    <Link to='/allMovies'><a className="link link-hover">All Movies</a></Link>
                    <a className="link link-hover"></a>
                </nav>
                <nav className='flex flex-col space-y-3'>
                    <div className="flex justify-center">
                    <img className='w-28 rounded-xl' src={logo} alt="" />
                    </div>
                    <p className="text-center">copyright @ 2024-2030 All rights reserved</p>
                </nav>
                <nav className=''>
                    <h6 className="footer-title text-xl">social profiles</h6>
                    <div className='flex justify-around text-4xl cursor-pointer'>
                        <a href="https://www.facebook.com/profile.php?id=100056252312818" target="_blank"><FaSquareFacebook className='text-blue-500' /></a>
                        <a href="https://www.spacex.com/" target="_blank"><FaSquareXTwitter /></a>
                        <a href="https://www.instagram.com/" target="_blank"><SiInstagram className='text-red-500' /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;

{/* bg-#005e7f */ }