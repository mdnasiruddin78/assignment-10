import { FaRegCalendarAlt, FaStarHalfAlt } from "react-icons/fa";
import { FaFilm, FaHourglassStart } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Homecard = ({movie}) => {
    const { _id, rating, poster, genre, title, duration, year } = movie
    return (
        <div className="card bg-black border-2 border-white">
            <div className="px-5 pt-5">
                <img
                    src={poster}
                    alt="image"
                    className="rounded-xl h-[280px] lg:w-[330px] w-[380px]" />
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold text-white text-3xl">Movie Title: {title}</h2>
                <div className="flex items-center text-white text-2xl">Genre:<p className="ml-3">{genre}</p><FaFilm /></div>
                <div className="flex items-center text-white text-2xl">Duration:<p className="ml-3">{duration}</p><FaHourglassStart /></div>
                <div className="flex items-center text-white text-2xl">Release Year:<p className="ml-3">{year}</p><FaRegCalendarAlt /></div>
                <div className="flex items-center text-white text-2xl">Rating:<p className="ml-3">{rating}</p><FaStarHalfAlt /></div>
                <div className="">
                    <Link to={`/moviedetails/${_id}`} className='btn px-7 rounded-full bg-[#112A46] text-white border-2 border-white'>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Homecard;