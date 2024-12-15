import { useContext } from "react";
import { authContext } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";


const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(authContext)

    const location = useLocation()
    
    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;