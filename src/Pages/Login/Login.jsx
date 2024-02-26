import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../public/image/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Authentication/Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate()

    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result =>{
             const loggedIn = (result.user)
             console.log(loggedIn)
             e.target.reset()
             navigate('/')
             toast.success("you have login successfully")
        })
        .catch(error =>{
            console.log(error)
            toast.error("Invalid Email & Password!")
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200 p-0 md:p-10 lg:p-20">
            <div className="hero-content flex-row">
                <div className="lg:text-left w-1/2 mr-10 hidden md:block lg:block">
                   <img src={img} alt="" className='' />
                </div>
                <div className="card flex-shrink-0 w-full md:w-1/2 lg:w-1/2  shadow-2xl bg-base-100 border-2 border-slate-400">
                    <div className="card-body p-5">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                        <form onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"><input type="submit" value="login" /></button>
                            </div>
                            <p>You have a no account please <Link to="/signUp">Sign Up</Link></p>
                             <Toaster></Toaster>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;