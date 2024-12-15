import {  useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Select from 'react-select';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { authContext } from "../Provider/Authprovider";


const options1 = [
    { value: 'comedy', label: 'comedy' },
    { value: 'drama', label: 'drama' },
    { value: 'horror', label: 'horror' },
];

const options2 = [
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
];


const Updatemovie = () => {

    const { user } = useContext(authContext)
    const { email } = user;
    const loadedData = useLoaderData()
    const { _id,rating, poster, genre, title, duration, year, summary } = loadedData
    const [ratings, setRatings] = useState(rating)
    const [selectedOption1, setSelectedOption1] = useState({ value: genre, label: genre });
    const [selectedOption2, setSelectedOption2] = useState({ value: year, label: year });
    

    const handleUpdateMovie = e => {
        e.preventDefault()
        const poster = e.target.poster.value;
        const title = e.target.title.value;
        const genre = e.target.genre.value;
        const duration = e.target.duration.value;
        const rating = ratings;
        const year = e.target.year.value;
        const summary = e.target.summary.value;
        const updateMovie = { email,rating,poster, genre, title, duration, year, summary }
        // console.log(updateMovie)
        fetch(`https://movie-portal-server-ashen-five.vercel.app/updatemovie/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateMovie)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                }
                e.target.reset()
            })

    }
    return (
        <div className='lg:w-3/4 mx-auto py-10'>
            <Helmet>
                <title>UpdateMovie Page</title>
            </Helmet>
            <div className="text-center mb-3">
                <h1 className="text-5xl font-bold text-green-500">Update Movie</h1>
            </div>
            <div className="card bg-base-100 w-full border-2 border-green-500 rounded-xl">
                <form onSubmit={handleUpdateMovie} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Movie Poster</span>
                            </label>
                            <input type="text" name='poster' placeholder="Movie Poster link" className="input input-bordered" defaultValue={poster} required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Movie Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Movie Title" className="input input-bordered" defaultValue={title} required />
                        </div>
                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Genre</span>
                            </label>
                            <Select
                                name='genre'
                                value={selectedOption1}
                                onChange={value=>setSelectedOption1(value)}
                                options={options1}
                            />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Duration</span>
                            </label>
                            <input type="text" name='duration' placeholder="Minutes" className="input input-bordered" defaultValue={duration} required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Release Year</span>
                            </label>
                            <Select
                                name='year'
                                defaultValue={selectedOption2}
                                onChange={value=>setSelectedOption2(value)}
                                options={options2}
                            />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <div>
                                <Rating style={{ maxWidth: 250 }} value={ratings} onChange={setRatings}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Summary</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name='summary' placeholder="summary" defaultValue={summary} required ></textarea>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn rounded-full bg-[#002130] text-white">Update Movie</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Updatemovie;