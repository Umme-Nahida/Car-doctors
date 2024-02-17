import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Authentication/Provider/AuthProvider";
import BookingRow from "./BookingRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([])
    console.log(booking)
    const axiosSecure = useAxiosSecure()
    
    // const url = (`http://localhost:5000/bookings?email=${user?.email}`)
    const url = (`/bookings?email=${user?.email}`)
    useEffect(() => {
        //  axios.get(url,{withCredentials:true})
        //  .then(res => setBooking(res.data))
        axiosSecure.get(url)
        .then(res=>{
            setBooking(res.data)
        })
    }, [url,axiosSecure])

    // update booking using api 
    const handleUpdate = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                const reamining = booking.filter(book=> book._id !== id)
                const updateId = booking.find(book =>book._id ===id)
                updateId.status = 'confirm'
                const newUpdateBooking = [updateId, ...reamining]
                setBooking(newUpdateBooking)
            }
        })
    }

    return (
        <div>
            <h1>this is booking{booking.length} </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(singleBooking=> <BookingRow
                                 key={singleBooking._id} 
                                 booking={singleBooking}
                                 handleUpdate={handleUpdate}
                                 >
                                 </BookingRow>)
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Bookings;