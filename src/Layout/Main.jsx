import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Headers from "../Pages/Shared/Headers";


const Main = () => {
    return (
        <div>
            <div className="w-full">
            <Headers></Headers>
            </div>
            <div className='max-w-screen-2xl min-h-screen mx-auto'>
             <Outlet></Outlet>
            </div>
            <div className="w-full">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;