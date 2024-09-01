import { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../Authentication/Provider/AuthProvider';


const axiosSecure = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true, // Ensure cookies are sent with the request
  });


const useAxiosSecure = () => {
 const userData = useContext(AuthContext)
 

  useEffect(() => {
    const responseInterceptor = axiosSecure.interceptors.response.use(
      response => response,
      async (error) => {

        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          console.log('Unauthorized or Forbidden - logging out user');
          await userData?.logOut() // Call the logout function
        }
        return Promise.reject(error);
      }
    );

    // Clean up the interceptor on unmount
    return () => {
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [axiosSecure]);

  return axiosSecure;
};

export default useAxiosSecure;
