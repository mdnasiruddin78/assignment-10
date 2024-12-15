import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaFilm, FaHourglassStart, FaRegCalendarAlt, FaStarHalfAlt } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../Provider/Authprovider";


const Moviedetails = () => {

    const {user} = useContext(authContext)
    const movie = useLoaderData()
    
    const { _id, rating, poster, genre, title, duration, year } = movie
    const navigate = useNavigate()
    const favoriteBy = user.email 
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
                fetch(`https://movie-portal-server-ashen-five.vercel.app/addMovie/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            navigate('/allmovies')
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Movie has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    const handleFavorite = () => {
        const favoriteMovie = {rating, poster, genre, title, duration, year,favoriteBy}
        // console.log(favoriteMovie)
        fetch('https://movie-portal-server-ashen-five.vercel.app/myFavorite',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(favoriteMovie)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }

    return (
        <div className="py-10">
            <Helmet>
                <title>MovieDtails Page</title>
            </Helmet>
            <div className="text-center mb-3">
                <h1 className="text-5xl font-bold text-green-500">Movie Dtails</h1>
            </div>
            <div className="flex justify-center">
                <div className="card bg-black border-2 border-white">
                    <div className="px-5 pt-5">
                        <img
                            src={poster}
                            alt="image"
                            className="rounded-xl h-[600px] w-[600px]" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-white text-3xl">Movie Title: {title}</h2>
                        <div className="flex items-center text-white text-2xl">Genre:<p className="ml-3">{genre}</p><FaFilm /></div>
                        <div className="flex items-center text-white text-2xl">Duration:<p className="ml-3">{duration}</p><FaHourglassStart /></div>
                        <div className="flex items-center text-white text-2xl">Release Year:<p className="ml-3">{year}</p><FaRegCalendarAlt /></div>
                        <div className="flex items-center text-white text-2xl">Rating:<p className="ml-3">{rating}</p><FaStarHalfAlt /></div>
                        <div className="flex justify-center space-x-2">
                            <button onClick={()=>handleDelete(_id)} className='btn px-7 rounded-full bg-[#112A46] text-white'>Delete Movie</button>
                            <button onClick={handleFavorite} className='btn px-7 rounded-full bg-[#112A46] text-white'>Add to Favorite</button>
                            <Link to={`/updatemovie/${_id}`} className='btn px-7 rounded-full bg-[#112A46] text-white'>Update Movie</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <Link to='/allmovies' className='btn px-7 rounded-full bg-[#112A46] text-white'>See all movies</Link>
            </div>
        </div>
    );
};

export default Moviedetails;
