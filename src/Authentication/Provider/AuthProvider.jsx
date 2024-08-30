import { createContext, useEffect, useState } from "react";
import app from "../firebase.confic";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] =useState("")
    const axiosSecure=useAxiosSecure()


    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        logOut
    }
    
    useEffect(()=>{
       const unsubscrive= onAuthStateChanged(auth,currentUser=>{
          const userEmail  = currentUser?.email || user?.email;
          const loggerUser = {email: userEmail}
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
            if(currentUser){
                axiosSecure.post('/jwt', loggerUser,)
                .then(res=>{
                    console.log(res.data)
                })
            }else{
                axiosSecure.post('/logOut',loggerUser,)
                .then(res=>{
                    console.log(res.data)
                })
                logOut()
            }
        })
        
        return ()=>{
            return unsubscrive() 
        }
    },[user?.email])

    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;