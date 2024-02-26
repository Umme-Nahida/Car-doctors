

const BookingRow = ({booking,handleUpdate}) => {
    console.log(booking)
    const {customerName,img,price,date,service,email,_id,status} = booking;

    return (
         < tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                    <div className="avatar">
                        <div className="w-24 rounded h-24">
                            <img src={img}alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
            </td>
            <td>
                {service}
            </td>
            <td>{price}</td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ?
                    <span className="bolt">confirm</span> :
                    <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">please confirm</button>
                }
            </th>
        </tr >
    );
};

export default BookingRow;