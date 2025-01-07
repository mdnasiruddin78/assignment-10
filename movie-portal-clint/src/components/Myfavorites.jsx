import { Helmet } from "react-helmet-async";
import { useContext, useEffect } from "react";
import { authContext } from "../Provider/Authprovider";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";


const Myfavorites = () => {

    const { user, setLoding, loadedMovie, setLoadedMovie } = useContext(authContext)
    useEffect(() => {
        fetch(`http://localhost:5000/myFavorite/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoadedMovie(data);
                setLoding(false);
            })
    }, [user])
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
                fetch(`http://localhost:5000/myFavorite/${_id}`, {
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
    if (loadedMovie) {
        return (
            <div className="mb-10 min-h-[calc(100vh-306px)]">
                <Helmet>
                    <title>Myfavorite Page</title>
                </Helmet>
                <h3 className="text-3xl text-green-500 font-bold text-center mb-5">Favorite Movies</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-green-500">
                                <th>Image</th>
                                <th>Title</th>
                                <th>Email</th>
                                <th>Rating</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loadedMovie?.map(movie => <tr key={movie._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={movie?.poster}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-green-500">
                                        {movie?.title}
                                    </td>
                                    <td className="text-green-500">{movie?.favoriteBy}</td>
                                    <td className="text-green-500">{movie?.rating}</td>
                                    <th>
                                        <button onClick={()=>handleDelete(movie?._id)} className="btn btn-ghost text-2xl text-red-500"><MdDeleteForever /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    return <div>no movie in favorite</div>
};

export default Myfavorites;