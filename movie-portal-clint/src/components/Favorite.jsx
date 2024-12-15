import { useContext } from "react";
import { FaRegCalendarAlt, FaStarHalfAlt } from "react-icons/fa";
import { FaFilm, FaHourglassStart } from "react-icons/fa6";
import Swal from "sweetalert2";
import { authContext } from "../Provider/Authprovider";


const Favorite = ({movie}) => {
    const {loadedMovie,setLoadedMovie} = useContext(authContext)
    const { _id, rating, poster, genre, title, duration, year } = movie
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to delete this Movie!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://movie-portal-server-ashen-five.vercel.app/myFavorite/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Movie has been deleted.",
                                icon: "success"
                            });
                            const remainingdata = loadedMovie.filter(movies => movies._id !== _id)
                            setLoadedMovie(remainingdata)
                        }
                    })
            }
        });

    }
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
                    <button onClick={() => handleDelete(_id)} className='btn px-7 rounded-full bg-[#112A46] text-white border-2 border-white'>Delete Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default Favorite;