import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Authentication/Provider/AuthProvider";
import BookingRow from "./BookingRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  console.log(booking);
  const axiosSecure = useAxiosSecure();

  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {
    //  axios.get(url,{withCredentials:true})
    //  .then(res => setBooking(res.data))
    axiosSecure.get(url).then((res) => {
      setBooking(res.data);
    });
  }, [url, axiosSecure]);

  // update booking using api
  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "patch",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const reamining = booking.filter((book) => book._id !== id);
          const updateId = booking.find((book) => book._id === id);
          updateId.status = "confirm";
          const newUpdateBooking = [updateId, ...reamining];
          setBooking(newUpdateBooking);
        }
      });
  };

  return (
    <div>
      <div>
        <div className="bg-[url('../../../../public/image/checkout/checkout.png')] bg-cover w-auto h-[150px] md:h-[150px] lg:h-[250px] mb-0 ">
          <div className=" py-20 md:py-10 lg:py-24 pl-5 md:pl-5 lg:pl-10 space-y-2">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold">Manage All Orders</h1>
          <p className="text-[#FF3811]">Home - Manage All Orders</p>
          </div>
        </div>
      </div>
      {/* booking table */}
      {booking.length > 0 ? (
        <div className="overflow-x-auto max-w-screen-xl mx-auto py-10 shadow-xl border m-0 md:m-10 lg:m-20">
          <table className="table ">
            {/* head */}
            <thead className=" ">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox"/>
                  </label>
                </th>
                <th>Image</th>
                <th className="hidden lg:block">Service</th>
                <th className="">Price</th>
                <th className="hidden md:block lg:block">Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((singleBooking) => (
                <BookingRow
                  key={singleBooking._id}
                  booking={singleBooking}
                  handleUpdate={handleUpdate}
                ></BookingRow>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className=" min-h-screen flex justify-center items-center">
          <h1>you don't have a any booking</h1>
        </div>
      )}
    </div>
  );
};

export default Bookings;
