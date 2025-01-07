import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import { Helmet } from "react-helmet-async";


const Allmovies = () => {
    const loadedMovie = useLoaderData()
    return (
        <div className="mb-10">
            <Helmet>
                <title>AllMovies Page</title>
            </Helmet>
            <h3 className="text-3xl text-green-500 font-bold text-center mb-5">Explore All Movies</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    loadedMovie?.map(movie => <Cards key={movie._id} movie={movie}></Cards>)
                }
            </div>
        </div>
    );
};

export default Allmovies;