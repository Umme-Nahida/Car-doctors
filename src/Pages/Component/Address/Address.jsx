import { SlCalender } from "react-icons/sl";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Address = () => {
    return (
        <div className="bg-black flex items-center justify-evenly py-20 mb-5">
            <div className="flex justify-center items-center gap-5">
                <SlCalender className="text-white text-4xl"></SlCalender>
                <div>
                    <p className="text-white">We are open monday-friday</p>
                    <h3 className="text-white text-2xl">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5">
                <FaPhoneVolume className="text-white text-4xl"></FaPhoneVolume>
                <div>
                    <p className="text-white">Have a question?</p>
                    <h3 className="text-white text-2xl">+2546 251 2658</h3>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5">
                <IoLocationSharp className="text-white text-4xl"></IoLocationSharp>
                <div>
                    <p className="text-white">Need a repair? our address</p>
                    <h3 className="text-white text-2xl">Liza Street, New York</h3>
                </div>
            </div>
           
        </div>
    );
};

export default Address;