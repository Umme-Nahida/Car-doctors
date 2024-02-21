import { Link, useNavigate } from 'react-router-dom';
import img from '../../../../public/image/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Authentication/Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const SignUp = () => {
     const {createUser} = useContext(AuthContext)
     const navigate = useNavigate();

    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target;
        console.log(form)
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        createUser(email,password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            navigate('/')
            toast.success('you have Sign Up successfully')
        })
        .catch(error => {
            console.log(error)
            toast.error('Please provide a valid information')
        })


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-10">
                    <img src={img} alt="" className='' />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 border-2 border-slate-400">
                    <div className="card-body p-5">
                        <h1 className="text-3xl font-bold">SignUp now!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary"><input type="submit" value="Sign-Up" /></button>
                            </div>
                            <p>Already have a account please <Link to="/login">Login</Link></p>
                            <Toaster></Toaster>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;