import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../Provider/Authprovider";
import toast from "react-hot-toast";


const Login = () => {

    const {signInUsers,googleLogin,setUser} = useContext(authContext)
    const [error,setError] = useState()
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        setError()
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)

        signInUsers(email,password)
        .then(result => {
            const user = result.user;
            setUser(user)
            navigate(location?.state? location.state : '/')
            toast.success('login successfully')
        })
        .catch(err => {
            // setError({...error,login: err.code})
            toast.error('Error Found')
        })
    }

    return (
        <div className='min-h-screen flex justify-center items-center py-10'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="card bg-base-100 w-full max-w-lg border-2 shrink-0 p-10">
                <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered bg-[#F3F3F3]" required />
                        <label className="label">
                            <button className="label-text-alt link link-hover">Forgot password?</button>
                        </label>
                    </div>
                    <div className="form-control mt-6 space-y-3">
                        <button className="btn rounded-full bg-[#002130] text-white">Login</button>
                        <button onClick={googleLogin} className='btn rounded-full hover:bg-[#002130] hover:text-white'><FcGoogle className='text-xl' />Login With Google</button>
                    </div>
                    <p className='text-red-500 text-xl'>{error}</p>
                </form>
                <p className='text-center font-semibold'>Dont’t Have An Account ?
                    <Link to="/register" className='text-red-600'> Register</Link></p>
            </div>
        </div>
    );
};

export default Login;