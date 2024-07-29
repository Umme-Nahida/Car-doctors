

const BookingRow = ({booking,handleUpdate}) => {
    console.log(booking)
    const {customerName,img,price,date,service,email,_id,status} = booking;

    return (
         < tr className=" w-full">
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td className="max-w-max">
                    <div className="avatar">
                        <div className="w-12 rounded h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <p className="lg:hidden">{service}</p>
                    <p className="lg:hidden md:hidden">{date}</p>
            </td>
            <td className=" hidden lg:block truncate">
                {service}
            </td>
            <td className="">{price}</td>
            <td className=" hidden md:block lg:block md:pt-8">{date}</td>
            <th>
                {
                    status === 'confirm' ?
                    <span className="bolt">confirm</span> :
                    <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-sm">please confirm</button>
                }
            </th>
        </tr >
    );
};

export default BookingRow;