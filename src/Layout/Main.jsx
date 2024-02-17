import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Headers from "../Pages/Shared/Headers";


const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <div>
             <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;