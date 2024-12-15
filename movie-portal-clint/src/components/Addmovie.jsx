import { useContext } from 'react';
import { authContext } from '../Provider/Authprovider';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import Select from 'react-select';
import React, { useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


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


const Addmovie = () => {

    const [rating, setRating] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null);
    const { user } = useContext(authContext)
    const { email } = user;
    const handleAddMovie = e => {
        e.preventDefault()
        const poster = e.target.poster.value;
        const title = e.target.title.value;
        if (title.length < 2) {
            toast.error('Movie title the given input have at least 2 characters')
            return;
        }

        const genre = e.target.genre.value;
        const duration = e.target.duration.value;
        if (duration < 60) {
            toast.error('duration the given input must be greater than 60')
            return;
        }

        const year = e.target.year.value;
        if (year === '') {
            toast.error('select a year to option')
            return;
        }

        const summary = e.target.summary.value;
        const addMovie = { email, rating, poster, genre, title, duration, year, summary }
        // console.log(addMovie)
        fetch('https://movie-portal-server-ashen-five.vercel.app/addMovie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addMovie)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    e.target.reset()
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
        <div className='lg:w-3/4 mx-auto mb-10'>
            <Helmet>
                <title>AddMovie Page</title>
            </Helmet>
            <div className="text-center mb-3">
                <h1 className="text-5xl font-bold text-green-500">Add Movie</h1>
            </div>
            <div className="card bg-base-100 w-full border-2 border-green-500 rounded-xl">
                <form onSubmit={handleAddMovie} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Movie Poster</span>
                            </label>
                            <input type="url" name='poster' placeholder="Movie Poster link" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Movie Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Movie Title" className="input input-bordered" required />
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
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options1}
                            />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Duration</span>
                            </label>
                            <input type="text" name='duration' placeholder="Minutes" className="input input-bordered" required />
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
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options2}
                            />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <div>
                                <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Summary</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name='summary' placeholder="summary" required minLength={10}></textarea>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn rounded-full bg-[#002130] text-white">Add Movie</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Addmovie;