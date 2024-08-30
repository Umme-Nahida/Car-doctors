import { useContext } from "react";
import { AuthContext } from "../../../Authentication/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(loading)
    
    if(loading){
       return  <div className="text-center"><progress className="progress w-56"></progress></div>
    }

    if(user?.email){
        return  children;
    }
    return  <Navigate state={location.pathname} to="/login" replace />
};

export default PrivateRoute;