import { SlCalender } from "react-icons/sl";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Address = () => {
    return (
        <div className="bg-black flex-cols md:flex lg:flex items-center justify-evenly py-5 md:py-10 lg:py-20 mx-2 md:mx-5 lg:mx-10 space-x-3">
            <div className="flex-cols md:flex lg:flex justify-center items-center gap-2 lg:gap-5 text-center md:text-left lg:text-left mb-10 md:mb-0 lg:mb-0 ">
                <SlCalender className="text-white text-4xl mx-auto"></SlCalender>
                <div>
                    <p className="text-white">We are open monday-friday</p>
                    <h3 className="text-white text-lg md:text-xl lg:text-2xl">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex-cols md:flex lg:flex justify-center items-center gap-2 lg:gap-5 text-center md:text-left lg:text-left mb-10 md:mb-0 lg:mb-0 ">
                <FaPhoneVolume className="text-white text-4xl mx-auto"></FaPhoneVolume>
                <div>
                    <p className="text-white">Have a question?</p>
                    <h3 className="text-white text-lg md:text-xl lg:text-2xl">+2546 251 2658</h3>
                </div>
            </div>
            <div className="flex-cols md:flex lg:flex justify-center items-center gap-5 text-center md:text-left lg:text-left mb-10 md:mb-0 lg:mb-0 ">
                <IoLocationSharp className="text-white text-4xl mx-auto"></IoLocationSharp>
                <div>
                    <p className="text-white">Need a repair? our address</p>
                    <h3 className="text-white text-lg md:text-xl lg:text-2xl">Liza Street, New York</h3>
                </div>
            </div>
           
        </div>
    );
};

export default Address;