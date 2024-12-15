import { Link, useLoaderData } from "react-router-dom";
import Homecard from "./Homecard";


const Featuredmovie = () => {
    const loadedMovie = useLoaderData()
    return (
        <div>
            <h3 className="text-3xl text-green-500 font-bold text-center mb-3">Featured Movies</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    loadedMovie.map(movie => <Homecard key={movie._id} movie={movie}></Homecard>)
                }
            </div>
            <div className="flex justify-center mt-5">
                <Link to='/allmovies' className='btn px-7 rounded-full bg-[#112A46] text-white'>See all movies</Link>
            </div>
        </div>
    );
};

export default Featuredmovie;