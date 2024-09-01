import React from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirect = () => {
    const navigate = useNavigate()

    const redirectToLogin = () => {
        navigate('/login');
      };
    return redirectToLogin
};

export default useRedirect;