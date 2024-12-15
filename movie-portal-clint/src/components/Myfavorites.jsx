import { Helmet } from "react-helmet-async";
import Favorite from "./Favorite";
import { useContext, useEffect } from "react";
import { authContext } from "../Provider/Authprovider";


const Myfavorites = () => {

    const { user, setLoding, loadedMovie, setLoadedMovie } = useContext(authContext)
    useEffect(() => {
        fetch(`https://movie-portal-server-ashen-five.vercel.app/myFavorite/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoadedMovie(data);
                setLoding(false);
            })
    }, [user])
    if (loadedMovie) {
        return (
            <div className="mb-10">
                <Helmet>
                    <title>Myfavorite Page</title>
                </Helmet>
                <h3 className="text-3xl text-green-500 font-bold text-center mb-5">Favorite Movies</h3>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {
                        loadedMovie?.map(movie => <Favorite key={movie._id} movie={movie}></Favorite>)
                    }
                </div>
            </div>
        );
    }
    return<div>no movie in favorite</div>
};

export default Myfavorites;