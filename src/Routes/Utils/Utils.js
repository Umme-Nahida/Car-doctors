import { useContext } from 'react';
import { AuthContext } from '../../Authentication/Provider/AuthProvider';

const Utils =() => {
    const {logOut}= useContext(AuthContext)

    return  logOut()
};

export default Utils;