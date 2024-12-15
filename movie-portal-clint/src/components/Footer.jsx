import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import logo from '../assets/logo.webp';


const Footer = () => {
    return (
        <footer className="lg:flex md:flex justify-around bg-black text-white p-10 text-center">
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">MOVIE-PORTAL</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">All Movies</a>
                <a className="link link-hover">copyright @ 2024-2030</a>
            </nav>
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">CONTRACT-INFO</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">See Movie Poster</a>
            </nav>
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">social profiles</h6>
                <div className='flex justify-center space-x-3 cursor-pointer'>
                    <div>
                        <img className='w-28 rounded-xl' src={logo} alt="" />
                        <p className=''>www.MOVIE.com</p>
                    </div>
                    <div className='space-y-3 text-4xl'>
                        <FaSquareFacebook className='text-blue-500' />
                        <FaSquareXTwitter />
                        <SiInstagram className='text-red-500' />
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;

{/* bg-#005e7f */ }