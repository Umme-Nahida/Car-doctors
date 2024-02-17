import { SlCalender } from "react-icons/sl";
const Address = () => {
    return (
        <div className="bg-black">
            <div className="flex gap-2">
                <SlCalender></SlCalender>
                <div>
                    <p>We are open monday-friday</p>
                    <h3>7:00 am - 9:00 pm</h3>
                </div>
            </div>
           
        </div>
    );
};

export default Address;