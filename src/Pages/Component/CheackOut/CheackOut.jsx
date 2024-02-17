import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Authentication/Provider/AuthProvider";

const CheackOut = () => {
    const singleServiceData = useLoaderData()
    const {user} = useContext(AuthContext)
    console.log(user)
    // console.log(singleServiceData)
    const { title, _id, img, price } = singleServiceData

    const handleCheackOut = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.amount.value;
        const order = {
            customerName: name,
            email,
            img,
            date,
            service:title,
            service_id:_id,
            price:price

        }

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('you have successfully booking')
            }
        })
        console.log(order)
    }
    return (
        <div>
            <h1>Title:{title} </h1>

            <form onSubmit={handleCheackOut}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" defaultValue={user?.email} name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">due amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} name="amount" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                        <button className="btn btn-primary btn-block">Order Confirm</button>
                    </div>
            </form>
        </div>

    );
};

export default CheackOut;