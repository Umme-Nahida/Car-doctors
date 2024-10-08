import { Link } from 'react-router-dom';
import logo from '../../../public/image/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Authentication/Provider/AuthProvider';
import toast from 'react-hot-toast';

const Headers = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleSignOut=()=>{
        logOut()
        .then(result=> {
            console.log(result?.user)
            toast.success('user Log Out successfully')
        })
        .catch(error => console.log(error))
    }
    const navMenu = <>
           <li><Link to="/"><a>Home</a></Link></li>
           <li><Link to="/about"><a>About</a></Link></li>
           <li><Link to="/services"><a>Services</a></Link></li>
           <li><Link to="/contact"><a>Contact</a></Link></li>
          {
            user?.email ?
            <>
              <li><Link to="/bookings"><a>My bookings</a></Link></li>
              <button onClick={handleSignOut}>LogOut</button>
            </> :
            <li><Link to="/login"><button>login</button></Link></li>
          }
    </>
    return (
        <div className="navbar h-6 py-14 px-10 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <img src={logo} alt=""  className='hidden lg:block'/>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn sm:btn-sm md:btn-md lg:btn-md border border-[#FF3811] text-[#FF3811] bg-inherit hover:bg-[#FF3811] hover:text-white">Appointment</a>
            </div>
        </div>
    );
};

export default Headers;