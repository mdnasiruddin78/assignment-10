import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Provider/Authprovider";
import toast from "react-hot-toast";


const Register = () => {

    const {createUsers,googleLogin,setUser,updateUserProfile} = useContext(authContext)
    const [error,setError] = useState()
    const navigate = useNavigate()

    const handleRegister = e => {
        setError()
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if(password.length < 6){
            setError("Password must contain at least 6 characters")
            toast.error('Password must contain at least 6 characters')
            return
        }

        if(!/[a-z]/.test(password)){
            setError("Password must contain at least one lowercase letter")
            toast.error('Password must contain at least one lowercase letter')
            return;
        }

        if(!/[A-Z]/.test(password)){
            setError("Password must contain at least one uppercase letter")
            toast.error('Password must contain at least one uppercase letter')
            return;
        }

        // console.log(name,email,photo,password)

        createUsers(email,password)
        .then(result => {
            setUser({...result.user,displayName:name , photoURL:photo})
            updateUserProfile({displayName:name , photoURL:photo})
            .then(()=>{
                navigate("/")
            }).catch(error => {
                // console.log(error)
            })
            toast.success('Register successfully')
        })
        .catch(error => {
            // console.log('error',error.message)
            toast.error('Error Found')
        })
    }

    return (
        <div className='min-h-screen flex justify-center items-center py-10'>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="card bg-base-100 w-full max-w-lg border-2 shrink-0 p-10">
                <h2 className='text-2xl font-semibold text-center'>Register your account</h2>
                <form onSubmit={ handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="enter your name" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo-URL</span>
                        </label>
                        <input type="link" name='photo' placeholder="enter photo link" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control mt-6 space-y-3">
                        <button className="btn bg-[#002130] rounded-full text-white">Register</button>
                        <button onClick={googleLogin} className='btn rounded-full hover:bg-[#002130] hover:text-white'><FcGoogle className='text-xl' />Login With Google</button>
                    </div>
                    <p className='text-red-500 text-xl'>{error}</p>
                </form>
                <p className='text-center font-semibold'>Allrady Have An Account ?
                    <Link to="/login" className='text-red-600'> Login</Link></p>
            </div>
        </div>
    );
};

export default Register;