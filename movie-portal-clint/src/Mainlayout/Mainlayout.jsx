import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Mainlayout = () => {
    return (
        <div className="bg-white dark:bg-[#002130]">
            <header className='sticky top-0 z-50'>
               <Navbar></Navbar> 
            </header>
            <main className="max-w-6xl mx-auto">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Mainlayout;