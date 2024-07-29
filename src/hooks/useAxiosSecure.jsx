import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Authentication/Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: `https://car-doctors-server-ten.vercel.app`,
    withCredentials: true,
    crossDomain:true

})
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }), error => {
            console.log('catch the error', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logOut the user')
                logOut()
                    .then(result => {
                        console.log(result.user)
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
            }
        }
    }, [logOut, navigate])
    return axiosSecure
};

export default useAxiosSecure;